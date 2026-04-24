import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

interface Point {
  x: number;
  y: number | null;
}

interface Annotation {
  x: number;
  y: number;
  label: string;
  color?: string;
}

interface AsymptoteLine {
  value: number;
  axis: "x" | "y";
  label?: string;
}

interface HighlightPoint {
  x: number;
  y: number;
  label?: string;
  color?: string;
}

interface AdditionalFn {
  fn: (x: number) => number | null;
  color?: string;
  label?: string;
}

interface ShowAsymptotes {
  vertical?: number[];
  horizontal?: number[];
}

interface FunctionGraphProps {
  fn: (x: number) => number | null;
  // New API
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  annotations?: Annotation[];
  // Legacy API (function reference pages)
  xDomain?: [number, number];
  yDomain?: [number, number];
  highlightPoints?: HighlightPoint[];
  color?: string;
  additionalFns?: AdditionalFn[];
  showAsymptotes?: ShowAsymptotes;
  discontinuities?: number[];
  // Shared
  samples?: number;
  asymptotes?: AsymptoteLine[];
  secondaryFn?: (x: number) => number | null;
  title?: string;
  showDerivative?: boolean;
}

export const FunctionGraph = ({
  fn,
  xMin,
  xMax,
  yMin,
  yMax,
  samples = 200,
  annotations = [],
  asymptotes = [],
  secondaryFn,
  title,
  xDomain,
  yDomain,
  highlightPoints = [],
  color,
  additionalFns = [],
  showAsymptotes,
  discontinuities = [],
}: FunctionGraphProps) => {
  // Resolve domain: explicit xMin/xMax take priority, then xDomain, then defaults
  const resolvedXMin = xMin ?? (xDomain ? xDomain[0] : -5);
  const resolvedXMax = xMax ?? (xDomain ? xDomain[1] : 5);
  const resolvedYMin = yMin ?? (yDomain ? yDomain[0] : undefined);
  const resolvedYMax = yMax ?? (yDomain ? yDomain[1] : undefined);
  // Merge annotations and highlightPoints (same shape)
  const allAnnotations: Annotation[] = [
    ...annotations,
    ...highlightPoints.map((p) => ({
      x: p.x,
      y: p.y,
      label: p.label ?? "",
      color: p.color,
    })),
  ];
  // Merge legacy showAsymptotes into asymptotes
  const allAsymptotes: AsymptoteLine[] = [
    ...asymptotes,
    ...(showAsymptotes?.vertical ?? []).map((v) => ({ value: v, axis: "x" as const })),
    ...(showAsymptotes?.horizontal ?? []).map((v) => ({ value: v, axis: "y" as const })),
    ...discontinuities.map((v) => ({ value: v, axis: "x" as const })),
  ];
  const lineColor = color ?? "hsl(var(--graph-primary))";
  const data = useMemo(() => {
    const points: Point[] = [];
    const step = (resolvedXMax - resolvedXMin) / samples;

    for (let i = 0; i <= samples; i++) {
      const x = resolvedXMin + i * step;
      const y = fn(x);

      // Handle discontinuities by checking for large jumps
      if (i > 0 && y !== null && points[i - 1]?.y !== null) {
        const prevY = points[i - 1].y!;
        if (Math.abs(y - prevY) > 50) {
          points.push({ x, y: null });
          continue;
        }
      }

      // Clamp extreme values
      if (y !== null && (Math.abs(y) > 100)) {
        points.push({ x, y: null });
      } else {
        points.push({ x, y });
      }
    }
    return points;
  }, [fn, resolvedXMin, resolvedXMax, samples]);

  const secondaryData = useMemo(() => {
    if (!secondaryFn) return null;
    const points: Point[] = [];
    const step = (resolvedXMax - resolvedXMin) / samples;

    for (let i = 0; i <= samples; i++) {
      const x = resolvedXMin + i * step;
      const y = secondaryFn(x);
      if (y !== null && Math.abs(y) <= 100) {
        points.push({ x, y });
      } else {
        points.push({ x, y: null });
      }
    }
    return points;
  }, [secondaryFn, resolvedXMin, resolvedXMax, samples]);

  const computedYMin = resolvedYMin ?? Math.min(...data.filter(p => p.y !== null).map(p => p.y!), -5);
  const computedYMax = resolvedYMax ?? Math.max(...data.filter(p => p.y !== null).map(p => p.y!), 5);

  return (
    <div className="graph-container p-4 md:p-6">
      {title && (
        <h3 className="font-serif text-lg text-foreground mb-4 text-center">
          {title}
        </h3>
      )}
      <div className="h-[300px] md:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--graph-grid))"
              opacity={0.5}
            />
            <XAxis
              dataKey="x"
              type="number"
              domain={[resolvedXMin, resolvedXMax]}
              stroke="hsl(var(--graph-axis))"
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <YAxis
              domain={[computedYMin, computedYMax]}
              stroke="hsl(var(--graph-axis))"
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => value.toFixed(1)}
            />
            
            {/* Axis lines */}
            <ReferenceLine x={0} stroke="hsl(var(--graph-axis))" strokeWidth={1.5} />
            <ReferenceLine y={0} stroke="hsl(var(--graph-axis))" strokeWidth={1.5} />
            
            {/* Asymptotes */}
            {allAsymptotes.map((asymptote, index) => (
              <ReferenceLine
                key={index}
                {...(asymptote.axis === "x" ? { x: asymptote.value } : { y: asymptote.value })}
                stroke="hsl(var(--graph-secondary))"
                strokeDasharray="8 4"
                strokeWidth={2}
                opacity={0.7}
              />
            ))}

            {/* Main function line */}
            <Line
              type="monotone"
              dataKey="y"
              stroke={lineColor}
              strokeWidth={3}
              dot={false}
              connectNulls={false}
              isAnimationActive={true}
              animationDuration={1000}
            />

            {/* Additional functions (legacy API) */}
            {additionalFns.map((af, idx) => {
              const afData: Point[] = [];
              const step = (resolvedXMax - resolvedXMin) / samples;
              for (let i = 0; i <= samples; i++) {
                const x = resolvedXMin + i * step;
                const y = af.fn(x);
                if (y !== null && Math.abs(y) <= 100) {
                  afData.push({ x, y });
                } else {
                  afData.push({ x, y: null });
                }
              }
              return (
                <Line
                  key={`af-${idx}`}
                  data={afData}
                  type="monotone"
                  dataKey="y"
                  stroke={af.color ?? "hsl(var(--graph-tertiary))"}
                  strokeWidth={2}
                  dot={false}
                  connectNulls={false}
                  isAnimationActive={false}
                />
              );
            })}

            {/* Secondary function line */}
            {secondaryData && (
              <Line
                data={secondaryData}
                type="monotone"
                dataKey="y"
                stroke="hsl(var(--graph-tertiary))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                connectNulls={false}
              />
            )}

            {/* Annotation points */}
            {allAnnotations.map((annotation, index) => (
              <ReferenceDot
                key={index}
                x={annotation.x}
                y={annotation.y}
                r={6}
                fill={annotation.color || "hsl(var(--graph-secondary))"}
                stroke="hsl(var(--background))"
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Annotations legend */}
      {allAnnotations.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          {allAnnotations.map((annotation, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: annotation.color || "hsl(var(--graph-secondary))" }}
              />
              <span className="text-muted-foreground">
                {annotation.label} ({annotation.x.toFixed(1)}, {annotation.y.toFixed(1)})
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Asymptotes legend */}
      {allAsymptotes.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-4 justify-center">
          {allAsymptotes.filter(a => a.label).map((asymptote, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-6 h-0.5 bg-graph-secondary" style={{ borderStyle: "dashed" }} />
              <span className="text-muted-foreground">{asymptote.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
