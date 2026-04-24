import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface LatexFormulaProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

const LatexFormula = ({ formula, displayMode = false, className = "" }: LatexFormulaProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(formula, containerRef.current, {
          displayMode,
          throwOnError: false,
          trust: true,
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
      }
    }
  }, [formula, displayMode]);

  return <span ref={containerRef} className={className} />;
};

export default LatexFormula;
