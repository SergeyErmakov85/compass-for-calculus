import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ── Function reference pages (calculus-compass) ──────────────────────────────
import PolynomialFunctions from "./pages/functions/PolynomialFunctions";
import RationalFunctions from "./pages/functions/RationalFunctions";
import TrigonometricFunctions from "./pages/functions/TrigonometricFunctions";
import ExponentialFunctions from "./pages/functions/ExponentialFunctions";
import LogarithmicFunctions from "./pages/functions/LogarithmicFunctions";
import PiecewiseFunctions from "./pages/functions/PiecewiseFunctions";
import AbsoluteValueFunctions from "./pages/functions/AbsoluteValueFunctions";
import SpecialFunctions from "./pages/functions/SpecialFunctions";

// ── Structured lessons (calculus-compass-08) ──────────────────────────────────
// Module 0 – What is a function
import FunctionDefinition from "./pages/lessons/Module0/FunctionDefinition";
import DomainRange from "./pages/lessons/Module0/DomainRange";
import GraphAnalysis from "./pages/lessons/Module0/GraphAnalysis";
// Module 1 – Polynomial functions
import LinearFunctions from "./pages/lessons/Module1/LinearFunctions";
import QuadraticFunctions from "./pages/lessons/Module1/QuadraticFunctions";
import CubicFunctions from "./pages/lessons/Module1/CubicFunctions";
import HigherDegree from "./pages/lessons/Module1/HigherDegree";
// Module 2 – Rational functions
import VerticalAsymptotes from "./pages/lessons/Module2/VerticalAsymptotes";
import HorizontalAsymptotes from "./pages/lessons/Module2/HorizontalAsymptotes";
import ObliqueAsymptotes from "./pages/lessons/Module2/ObliqueAsymptotes";
import RemovableDiscontinuities from "./pages/lessons/Module2/RemovableDiscontinuities";
// Module 3 – Limits
import LimitGeometry from "./pages/lessons/Module3/LimitGeometry";
import OneSidedLimits from "./pages/lessons/Module3/OneSidedLimits";
import LimitVsValue from "./pages/lessons/Module3/LimitVsValue";
import LimitAtInfinity from "./pages/lessons/Module3/LimitAtInfinity";
// Module 4 – Continuity
import ContinuityDefinition from "./pages/lessons/Module4/ContinuityDefinition";
import DiscontinuityTypes from "./pages/lessons/Module4/DiscontinuityTypes";
import ContinuityGeometry from "./pages/lessons/Module4/ContinuityGeometry";
// Module 5 – Derivative
import TangentLimit from "./pages/lessons/Module5/TangentLimit";
import DerivativeRate from "./pages/lessons/Module5/DerivativeRate";
import FunctionDerivativeLink from "./pages/lessons/Module5/FunctionDerivativeLink";
import Extrema from "./pages/lessons/Module5/Extrema";
// Module 6 – Trigonometric functions
import SinCos from "./pages/lessons/Module6/SinCos";
import Periodicity from "./pages/lessons/Module6/Periodicity";
import Tangent from "./pages/lessons/Module6/Tangent";
import Transformations from "./pages/lessons/Module6/Transformations";
// Module 7 – Exponential and logarithmic
import ExponentialGrowth from "./pages/lessons/Module7/ExponentialGrowth";
import LinearVsExponential from "./pages/lessons/Module7/LinearVsExponential";
import Logarithm from "./pages/lessons/Module7/Logarithm";
import Inverse from "./pages/lessons/Module7/Inverse";
// Module 8 – Piecewise functions
import PiecewiseAnalysis from "./pages/lessons/Module8/PiecewiseAnalysis";
import JunctionPoints from "./pages/lessons/Module8/JunctionPoints";
import Smoothness from "./pages/lessons/Module8/Smoothness";
// Module 9 – Absolute value
import AbsoluteValue from "./pages/lessons/Module9/AbsoluteValue";
import CornerPoints from "./pages/lessons/Module9/CornerPoints";
// Module 10 – Limits of intuition
import Oscillating from "./pages/lessons/Module10/Oscillating";
import NoLimit from "./pages/lessons/Module10/NoLimit";
import LimitsOfAnalysis from "./pages/lessons/Module10/LimitsOfAnalysis";

// ── Interactive guide (calculus-compass-guide) ────────────────────────────────
import GuidePage from "./pages/Module";

// ── Visualizations ────────────────────────────────────────────────────────────
import ConfidenceIntervalPage from "./pages/visualizations/ConfidenceIntervalPage";
import IntegralPage from "./pages/visualizations/IntegralPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* ── Function reference ── */}
          <Route path="/functions/polynomial" element={<PolynomialFunctions />} />
          <Route path="/functions/rational" element={<RationalFunctions />} />
          <Route path="/functions/trigonometric" element={<TrigonometricFunctions />} />
          <Route path="/functions/exponential" element={<ExponentialFunctions />} />
          <Route path="/functions/logarithmic" element={<LogarithmicFunctions />} />
          <Route path="/functions/piecewise" element={<PiecewiseFunctions />} />
          <Route path="/functions/absolute" element={<AbsoluteValueFunctions />} />
          <Route path="/functions/special" element={<SpecialFunctions />} />

          {/* ── Structured lessons Module 0 ── */}
          <Route path="/module/0/function-definition" element={<FunctionDefinition />} />
          <Route path="/module/0/domain-range" element={<DomainRange />} />
          <Route path="/module/0/graph-analysis" element={<GraphAnalysis />} />

          {/* ── Module 1 ── */}
          <Route path="/module/1/linear" element={<LinearFunctions />} />
          <Route path="/module/1/quadratic" element={<QuadraticFunctions />} />
          <Route path="/module/1/cubic" element={<CubicFunctions />} />
          <Route path="/module/1/higher-degree" element={<HigherDegree />} />

          {/* ── Module 2 ── */}
          <Route path="/module/2/vertical-asymptotes" element={<VerticalAsymptotes />} />
          <Route path="/module/2/horizontal-asymptotes" element={<HorizontalAsymptotes />} />
          <Route path="/module/2/oblique-asymptotes" element={<ObliqueAsymptotes />} />
          <Route path="/module/2/removable-discontinuities" element={<RemovableDiscontinuities />} />

          {/* ── Module 3 ── */}
          <Route path="/module/3/limit-geometry" element={<LimitGeometry />} />
          <Route path="/module/3/one-sided-limits" element={<OneSidedLimits />} />
          <Route path="/module/3/limit-vs-value" element={<LimitVsValue />} />
          <Route path="/module/3/limit-at-infinity" element={<LimitAtInfinity />} />

          {/* ── Module 4 ── */}
          <Route path="/module/4/continuity-definition" element={<ContinuityDefinition />} />
          <Route path="/module/4/discontinuity-types" element={<DiscontinuityTypes />} />
          <Route path="/module/4/continuity-geometry" element={<ContinuityGeometry />} />

          {/* ── Module 5 ── */}
          <Route path="/module/5/tangent-limit" element={<TangentLimit />} />
          <Route path="/module/5/derivative-rate" element={<DerivativeRate />} />
          <Route path="/module/5/function-derivative-link" element={<FunctionDerivativeLink />} />
          <Route path="/module/5/extrema" element={<Extrema />} />

          {/* ── Module 6 ── */}
          <Route path="/module/6/sin-cos" element={<SinCos />} />
          <Route path="/module/6/periodicity" element={<Periodicity />} />
          <Route path="/module/6/tangent" element={<Tangent />} />
          <Route path="/module/6/transformations" element={<Transformations />} />

          {/* ── Module 7 ── */}
          <Route path="/module/7/exponential-growth" element={<ExponentialGrowth />} />
          <Route path="/module/7/linear-vs-exponential" element={<LinearVsExponential />} />
          <Route path="/module/7/logarithm" element={<Logarithm />} />
          <Route path="/module/7/inverse" element={<Inverse />} />

          {/* ── Module 8 ── */}
          <Route path="/module/8/piecewise-analysis" element={<PiecewiseAnalysis />} />
          <Route path="/module/8/junction-points" element={<JunctionPoints />} />
          <Route path="/module/8/smoothness" element={<Smoothness />} />

          {/* ── Module 9 ── */}
          <Route path="/module/9/absolute-value" element={<AbsoluteValue />} />
          <Route path="/module/9/corner-points" element={<CornerPoints />} />

          {/* ── Module 10 ── */}
          <Route path="/module/10/oscillating" element={<Oscillating />} />
          <Route path="/module/10/no-limit" element={<NoLimit />} />
          <Route path="/module/10/limits-of-analysis" element={<LimitsOfAnalysis />} />

          {/* ── Interactive guide ── */}
          <Route path="/guide/:moduleId" element={<GuidePage />} />

          {/* ── Visualizations ── */}
          <Route path="/visualizations/probability" element={<ConfidenceIntervalPage />} />
          <Route path="/visualizations/integral" element={<IntegralPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
