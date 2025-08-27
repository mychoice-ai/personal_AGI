import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, BarChart3, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PredictiveAnalysis = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Predictive Analysis</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Advanced Predictive Analytics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Harness the power of machine learning and statistical modeling to predict future trends and outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Time Series Forecasting
                </CardTitle>
                <CardDescription>
                  Predict future values based on historical data patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• LSTM neural networks</li>
                  <li>• ARIMA modeling</li>
                  <li>• Prophet forecasting</li>
                  <li>• Seasonal decomposition</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Classification Models
                </CardTitle>
                <CardDescription>
                  Predict categorical outcomes and risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Random Forest classifiers</li>
                  <li>• Support Vector Machines</li>
                  <li>• Gradient boosting</li>
                  <li>• Deep neural networks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Regression Analysis
                </CardTitle>
                <CardDescription>
                  Predict continuous values and relationships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Linear and polynomial regression</li>
                  <li>• Ridge and Lasso regularization</li>
                  <li>• Elastic net regression</li>
                  <li>• Bayesian regression</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Validation</CardTitle>
                <CardDescription>
                  Ensure accuracy and reliability of predictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Cross-validation techniques</li>
                  <li>• Performance metrics</li>
                  <li>• Confidence intervals</li>
                  <li>• Model interpretability</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Begin Predictive Modeling
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PredictiveAnalysis;