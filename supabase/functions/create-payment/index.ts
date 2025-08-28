import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, planType } = await req.json();
    
    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Define pricing based on plan type
    let priceConfig;
    if (planType === 'trial') {
      // Create a trial subscription with 14-day free trial
      priceConfig = {
        price_data: {
          currency: "usd",
          product_data: {
            name: "AGI Misao Pro Plan",
            description: "Advanced AI companion with full features"
          },
          unit_amount: 2900, // $29.00 in cents
          recurring: {
            interval: "month"
          }
        }
      };
    } else {
      // One-time payment for other plans
      priceConfig = {
        price_data: {
          currency: "usd",
          product_data: {
            name: "AGI Misao Pro Plan"
          },
          unit_amount: 2900, // $29.00 in cents
        }
      };
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          ...priceConfig,
          quantity: 1,
        },
      ],
      mode: planType === 'trial' ? "subscription" : "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/trial-signup?canceled=true`,
      ...(planType === 'trial' && {
        subscription_data: {
          trial_period_days: 14,
        },
      }),
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error('Payment error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});