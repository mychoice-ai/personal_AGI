
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MockDataProvider } from "@/hooks/useMockData";
import Index from "./pages/Index";
import Dashboard from "./components/Dashboard";
import NotFound from "./pages/NotFound";
import CausalReasoning from "./pages/CausalReasoning";
import MetaLearning from "./pages/MetaLearning";
import AdvancedBiometric from "./pages/AdvancedBiometric";
import PredictiveAnalysis from "./pages/PredictiveAnalysis";
import SocialIntelligence from "./pages/SocialIntelligence";
import QuantumOptimization from "./pages/QuantumOptimization";
import CollectiveIntelligence from "./pages/CollectiveIntelligence";
import ConsciousnessSimulation from "./pages/ConsciousnessSimulation";
import QuantumSecurity from "./pages/QuantumSecurity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MockDataProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/causal-reasoning" element={<CausalReasoning />} />
            <Route path="/meta-learning" element={<MetaLearning />} />
            <Route path="/advanced-biometric" element={<AdvancedBiometric />} />
            <Route path="/predictive-analysis" element={<PredictiveAnalysis />} />
            <Route path="/social-intelligence" element={<SocialIntelligence />} />
            <Route path="/quantum-optimization" element={<QuantumOptimization />} />
            <Route path="/collective-intelligence" element={<CollectiveIntelligence />} />
            <Route path="/consciousness-simulation" element={<ConsciousnessSimulation />} />
            <Route path="/quantum-security" element={<QuantumSecurity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MockDataProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
