import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Car, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarAnimationProps {
  className?: string;
}

export const CarAnimation = ({ className }: CarAnimationProps) => {
  const [speed, setSpeed] = useState([30]);
  const [distance, setDistance] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const currentSpeed = speed[0];

  useEffect(() => {
    if (!isMoving) return;
    
    const interval = setInterval(() => {
      setDistance(d => {
        const newDistance = d + currentSpeed / 60; // km per second (scaled)
        return newDistance > 100 ? 0 : newDistance;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isMoving, currentSpeed]);

  return (
    <div className={cn('space-y-8', className)}>
      {/* Road visualization */}
      <div className="relative h-32 bg-gradient-to-b from-muted to-secondary rounded-xl overflow-hidden">
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-slate-600 to-slate-700">
          {/* Road markings */}
          <div className="absolute top-1/2 left-0 right-0 h-1 flex gap-8 -translate-y-1/2">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-full bg-amber-200"
                style={{
                  transform: `translateX(${-((distance * 10) % 80)}px)`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Car */}
        <div 
          className="absolute bottom-6 transition-all duration-100"
          style={{ left: `${20 + (distance % 60)}%` }}
        >
          <div className="relative">
            <Car className="w-12 h-12 text-function1 drop-shadow-lg" />
            {isMoving && currentSpeed > 0 && (
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-muted-foreground/40 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Sky elements */}
        <div className="absolute top-4 left-8 text-2xl">☀️</div>
        <div className="absolute top-6 right-12 text-lg opacity-60">☁️</div>
      </div>

      {/* Instruments */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Odometer - Function (1) */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-function1/10 flex items-center justify-center">
              <span className="text-lg">🔢</span>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold">Одометр</h4>
              <p className="text-xs text-muted-foreground">Накопленное расстояние</p>
            </div>
            <span className="function-1-badge ml-auto">Function (1)</span>
          </div>
          
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-right">
            <span className="text-3xl text-emerald-400">{distance.toFixed(1)}</span>
            <span className="text-lg text-emerald-400/70 ml-2">км</span>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Одометр показывает <strong>сколько всего</strong> проехал автомобиль — 
            это <em>накопленная</em> величина.
          </p>
        </div>

        {/* Speedometer - Function (2) */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-function2/10 flex items-center justify-center">
              <Gauge className="w-5 h-5 text-function2" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold">Спидометр</h4>
              <p className="text-xs text-muted-foreground">Текущая скорость</p>
            </div>
            <span className="function-2-badge ml-auto">Function (2)</span>
          </div>
          
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-right">
            <span className="text-3xl text-rose-400">{currentSpeed}</span>
            <span className="text-lg text-rose-400/70 ml-2">км/ч</span>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Спидометр показывает <strong>как быстро</strong> меняется расстояние — 
            это <em>скорость изменения</em>.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="card-elevated p-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm font-medium">
            Установите скорость: <span className="text-accent font-semibold">{currentSpeed} км/ч</span>
          </label>
          <button
            onClick={() => setIsMoving(!isMoving)}
            className={cn(
              'btn-primary text-sm py-2',
              isMoving && 'bg-destructive'
            )}
          >
            {isMoving ? 'Стоп' : 'Поехали!'}
          </button>
        </div>
        
        <Slider
          value={speed}
          onValueChange={setSpeed}
          min={0}
          max={120}
          step={5}
          className="slider-custom"
        />
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0 км/ч</span>
          <span>120 км/ч</span>
        </div>
      </div>

      {/* Key insight */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
          💡 Ключевая идея
        </h4>
        <p className="text-muted-foreground">
          Скорость говорит нам, <em>как быстро</em> растёт расстояние. 
          Расстояние — это <em>накопление</em> скорости за время. 
          Это и есть суть calculus: две функции, связанные друг с другом!
        </p>
      </div>
    </div>
  );
};
