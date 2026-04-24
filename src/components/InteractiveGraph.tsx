import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  ReferenceDot,
  Area,
  ComposedChart,
} from 'recharts';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface InteractiveGraphProps {
  showArea?: boolean;
  showTangent?: boolean;
  className?: string;
}

export const InteractiveGraph = ({ 
  showArea = false, 
  showTangent = false,
  className 
}: InteractiveGraphProps) => {
  const [time, setTime] = useState([3]);
  
  const t = time[0];
  
  // Generate data for distance function f(t) = t²
  const distanceData = useMemo(() => {
    const data = [];
    for (let x = 0; x <= 6; x += 0.1) {
      data.push({
        t: x,
        distance: x * x,
        speed: 2 * x,
        areaFill: x <= t ? 2 * x : null,
      });
    }
    return data;
  }, [t]);
  
  const currentDistance = t * t;
  const currentSpeed = 2 * t;
  
  // Tangent line data
  const tangentData = useMemo(() => {
    if (!showTangent) return [];
    const slope = 2 * t;
    const yIntercept = currentDistance - slope * t;
    return [
      { t: Math.max(0, t - 1.5), y: slope * Math.max(0, t - 1.5) + yIntercept },
      { t: Math.min(6, t + 1.5), y: slope * Math.min(6, t + 1.5) + yIntercept },
    ];
  }, [t, currentDistance, showTangent]);

  return (
    <div className={cn('space-y-6', className)}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Distance Graph - Function (1) */}
        <div className="graph-container">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Расстояние <span className="text-math">f(t) = t²</span>
            </h4>
            <span className="function-1-badge">Function (1)</span>
          </div>
          
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={distanceData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--graph-grid))" />
              <XAxis 
                dataKey="t" 
                stroke="hsl(var(--graph-axis))"
                label={{ value: 't (время)', position: 'bottom', offset: -5, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                stroke="hsl(var(--graph-axis))"
                label={{ value: 'f(t)', angle: -90, position: 'left', offset: 5, fill: 'hsl(var(--muted-foreground))' }}
              />
              <Line 
                type="monotone" 
                dataKey="distance" 
                stroke="hsl(var(--function-1))" 
                strokeWidth={3}
                dot={false}
              />
              {showTangent && (
                <Line
                  data={tangentData}
                  type="linear"
                  dataKey="y"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              )}
              <ReferenceLine x={t} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
              <ReferenceDot 
                x={t} 
                y={currentDistance} 
                r={8} 
                fill="hsl(var(--function-1))" 
                stroke="hsl(var(--card))"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
            <p className="text-sm">
              При <span className="text-math font-semibold">t = {t.toFixed(1)}</span>, 
              расстояние <span className="text-math font-semibold text-function1">f({t.toFixed(1)}) = {currentDistance.toFixed(1)}</span>
            </p>
          </div>
        </div>
        
        {/* Speed Graph - Function (2) */}
        <div className="graph-container">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Скорость <span className="text-math">s(t) = 2t</span>
            </h4>
            <span className="function-2-badge">Function (2)</span>
          </div>
          
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart data={distanceData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--graph-grid))" />
              <XAxis 
                dataKey="t" 
                stroke="hsl(var(--graph-axis))"
                label={{ value: 't (время)', position: 'bottom', offset: -5, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                stroke="hsl(var(--graph-axis))"
                label={{ value: 's(t)', angle: -90, position: 'left', offset: 5, fill: 'hsl(var(--muted-foreground))' }}
              />
              {showArea && (
                <Area
                  type="monotone"
                  dataKey="areaFill"
                  fill="hsl(var(--function-2) / 0.3)"
                  stroke="none"
                />
              )}
              <Line 
                type="monotone" 
                dataKey="speed" 
                stroke="hsl(var(--function-2))" 
                strokeWidth={3}
                dot={false}
              />
              <ReferenceLine x={t} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
              <ReferenceDot 
                x={t} 
                y={currentSpeed} 
                r={8} 
                fill="hsl(var(--function-2))" 
                stroke="hsl(var(--card))"
                strokeWidth={3}
              />
            </ComposedChart>
          </ResponsiveContainer>
          
          <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
            <p className="text-sm">
              При <span className="text-math font-semibold">t = {t.toFixed(1)}</span>, 
              скорость <span className="text-math font-semibold text-function2">s({t.toFixed(1)}) = {currentSpeed.toFixed(1)}</span>
              {showArea && (
                <span className="block mt-1 text-muted-foreground">
                  Площадь = {currentDistance.toFixed(1)} (накопленное расстояние!)
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      
      {/* Time Slider */}
      <div className="px-4">
        <label className="block text-sm font-medium text-foreground mb-3">
          Время: <span className="text-math text-accent font-semibold">t = {t.toFixed(1)}</span>
        </label>
        <Slider
          value={time}
          onValueChange={setTime}
          min={0}
          max={6}
          step={0.1}
          className="slider-custom"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0</span>
          <span>6</span>
        </div>
      </div>
    </div>
  );
};
