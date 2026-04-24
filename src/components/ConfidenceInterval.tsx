import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export const ConfidenceInterval = () => {
  const [confidence, setConfidence] = useState(95);
  
  const width = 800;
  const height = 400;
  const padding = 60;
  
  // Normal distribution parameters
  const mean = width / 2;
  const stdDev = 80;
  
  // Calculate z-score for confidence level
  const zScores: { [key: number]: number } = {
    90: 1.645,
    95: 1.96,
    99: 2.576
  };
  const zScore = zScores[confidence] || 1.96;
  
  // Calculate interval bounds
  const lowerBound = mean - zScore * stdDev;
  const upperBound = mean + zScore * stdDev;
  
  // Generate normal distribution curve points
  const generateCurve = () => {
    const points: string[] = [];
    const steps = 200;
    const scaleY = 200;
    
    for (let i = 0; i <= steps; i++) {
      const x = (width / steps) * i;
      const z = (x - mean) / stdDev;
      const y = height - padding - (scaleY * Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI));
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };
  
  // Generate shaded area for confidence interval
  const generateShadedArea = () => {
    const points: string[] = [];
    const steps = 100;
    const scaleY = 200;
    
    const startX = Math.max(0, lowerBound);
    const endX = Math.min(width, upperBound);
    const range = endX - startX;
    
    for (let i = 0; i <= steps; i++) {
      const x = startX + (range / steps) * i;
      const z = (x - mean) / stdDev;
      const y = height - padding - (scaleY * Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI));
      points.push(`${x},${y}`);
    }
    
    points.push(`${endX},${height - padding}`);
    points.push(`${startX},${height - padding}`);
    
    return points.join(" ");
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Доверительный интервал
          </h2>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Уровень доверия</div>
            <div className="text-3xl font-bold text-primary">{confidence}%</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Slider
            value={[confidence]}
            onValueChange={(value) => setConfidence(value[0])}
            min={90}
            max={99}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>90%</span>
            <span>95%</span>
            <span>99%</span>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          style={{ maxHeight: "400px" }}
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
            </linearGradient>
            
            <linearGradient id="intervalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grid lines */}
          <g opacity="0.1">
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1={0}
                y1={padding + i * (height - 2 * padding) / 4}
                x2={width}
                y2={padding + i * (height - 2 * padding) / 4}
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}
          </g>

          {/* X-axis */}
          <line
            x1={0}
            y1={height - padding}
            x2={width}
            y2={height - padding}
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Shaded confidence interval area */}
          <polygon
            points={generateShadedArea()}
            fill="url(#intervalGradient)"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Normal distribution curve */}
          <polyline
            points={generateCurve()}
            fill="none"
            stroke="url(#curveGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Lower bound line */}
          <line
            x1={lowerBound}
            y1={height - padding}
            x2={lowerBound}
            y2={padding}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.7"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Upper bound line */}
          <line
            x1={upperBound}
            y1={height - padding}
            x2={upperBound}
            y2={padding}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.7"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Mean line */}
          <line
            x1={mean}
            y1={height - padding}
            x2={mean}
            y2={padding}
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            opacity="0.8"
          />

          {/* Mean point */}
          <circle
            cx={mean}
            cy={height - padding}
            r="6"
            fill="hsl(var(--accent))"
            filter="url(#glow)"
          />

          {/* Labels */}
          <text
            x={mean}
            y={height - padding + 30}
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="14"
            fontWeight="600"
          >
            μ (среднее)
          </text>

          <text
            x={lowerBound}
            y={height - padding + 30}
            textAnchor="middle"
            fill="hsl(var(--primary))"
            fontSize="12"
            fontWeight="500"
            className="transition-all duration-500 ease-in-out"
          >
            −{zScore.toFixed(2)}σ
          </text>

          <text
            x={upperBound}
            y={height - padding + 30}
            textAnchor="middle"
            fill="hsl(var(--primary))"
            fontSize="12"
            fontWeight="500"
            className="transition-all duration-500 ease-in-out"
          >
            +{zScore.toFixed(2)}σ
          </text>

          {/* Confidence level annotation */}
          <text
            x={mean}
            y={padding - 10}
            textAnchor="middle"
            fill="hsl(var(--primary))"
            fontSize="16"
            fontWeight="700"
          >
            {confidence}% интервал
          </text>
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">μ</span>
            </div>
            <h3 className="text-lg font-semibold">Среднее значение</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Центральная точка распределения, вокруг которой строится доверительный интервал. 
            Это наша лучшая оценка истинного параметра генеральной совокупности.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-bold">±</span>
            </div>
            <h3 className="text-lg font-semibold">Границы интервала</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Диапазон, в котором с вероятностью {confidence}% находится истинное значение параметра. 
            Чем выше уровень доверия, тем шире интервал.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold mb-3 text-primary">Интерпретация</h3>
        <p className="text-foreground/80 leading-relaxed">
          Если мы возьмем 100 выборок и построим для каждой доверительный интервал с уровнем {confidence}%, 
          то примерно в <span className="font-bold text-primary">{confidence} случаях из 100</span> этот 
          интервал будет содержать истинное значение параметра генеральной совокупности.
        </p>
      </div>
    </div>
  );
};
