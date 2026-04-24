import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import LatexFormula from "@/components/LatexFormula";

const RiemannIntegralVisualization = () => {
  const [partitions, setPartitions] = useState(8);
  const [showArea, setShowArea] = useState(true);
  const [sampleSize, setSampleSize] = useState(100);
  const [anxietyPartitions, setAnxietyPartitions] = useState(6);
  const [stressScenario, setStressScenario] = useState<'acute' | 'chronic'>('chronic');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Анимация для демонстрации сходимости
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnxietyPartitions(prev => {
          if (prev >= 24) {
            setIsAnimating(false);
            return 24;
          }
          return prev + 1;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  // Функция для визуализации - используем x^2 для простоты
  const f = (x: number) => 0.5 * x * x + 1;
  
  // Нормальное распределение для связи с вероятностью
  const normalDist = (x: number, mu = 4, sigma = 1) => {
    return 2 * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
  };

  const width = 600;
  const height = 300;
  const padding = 40;
  const xMin = 0;
  const xMax = 6;
  const yMin = 0;
  const yMax = 20;

  // Масштабирование координат
  const scaleX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - ((y - yMin) / (yMax - yMin)) * (height - 2 * padding);

  // Генерация точек кривой для f(x)
  const generateCurve = (func: (x: number) => number, steps = 100) => {
    const points = [];
    for (let i = 0; i <= steps; i++) {
      const x = xMin + (i / steps) * (xMax - xMin);
      const y = func(x);
      points.push(`${scaleX(x)},${scaleY(y)}`);
    }
    return points.join(" ");
  };

  // Генерация прямоугольников Римана
  const generateRectangles = () => {
    const rects = [];
    const dx = (xMax - xMin) / partitions;
    
    for (let i = 0; i < partitions; i++) {
      const x = xMin + i * dx;
      const y = f(x + dx / 2);
      const rectX = scaleX(x);
      const rectY = scaleY(y);
      const rectWidth = scaleX(x + dx) - scaleX(x);
      const rectHeight = scaleY(0) - scaleY(y);
      
      rects.push(
        <rect
          key={i}
          x={rectX}
          y={rectY}
          width={rectWidth}
          height={rectHeight}
          className="fill-primary opacity-30 stroke-primary stroke-1 transition-all duration-300"
        />
      );
    }
    return rects;
  };

  // Генерация случайных данных с нормальным распределением (Box-Muller transform)
  const generateNormalData = (n: number, mu = 4, sigma = 0.8) => {
    const data = [];
    for (let i = 0; i < n; i++) {
      const u1 = Math.random();
      const u2 = Math.random();
      const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      const value = mu + sigma * z0;
      if (value >= xMin && value <= xMax) {
        data.push(value);
      }
    }
    return data;
  };

  // Генерация гистограммы из данных
  const generateHistogram = () => {
    const data = generateNormalData(sampleSize);
    const bins = 15;
    const binWidth = (xMax - xMin) / bins;
    const counts = new Array(bins).fill(0);
    
    data.forEach(value => {
      const binIndex = Math.floor((value - xMin) / binWidth);
      if (binIndex >= 0 && binIndex < bins) {
        counts[binIndex]++;
      }
    });
    
    const maxCount = Math.max(...counts);
    const rects = [];
    
    for (let i = 0; i < bins; i++) {
      const x = xMin + i * binWidth;
      const normalizedHeight = (counts[i] / maxCount) * 15;
      const rectX = scaleX(x);
      const rectY = scaleY(normalizedHeight);
      const rectWidth = scaleX(x + binWidth) - scaleX(x);
      const rectHeight = scaleY(0) - scaleY(normalizedHeight);
      
      rects.push(
        <rect
          key={i}
          x={rectX}
          y={rectY}
          width={rectWidth}
          height={rectHeight}
          className="fill-primary opacity-40 stroke-primary stroke-1 transition-all duration-300"
        />
      );
    }
    return rects;
  };

  // Функция тревожности в течение дня
  const anxietyFunction = (hour: number) => {
    const base = 2;
    const morning = 2 * Math.exp(-0.5 * Math.pow((hour - 8) / 2, 2));
    const examPeak = 8 * Math.exp(-0.5 * Math.pow((hour - 14) / 1.5, 2));
    const eveningCall = 3 * Math.exp(-0.5 * Math.pow((hour - 19) / 1, 2));
    return base + morning + examPeak + eveningCall;
  };

  // Расчет площади под кривой тревожности
  const calculateAnxietyArea = () => {
    let sum = 0;
    const dx = 24 / anxietyPartitions;
    for (let i = 0; i < anxietyPartitions; i++) {
      const x = i * dx;
      sum += anxietyFunction(x + dx / 2) * dx;
    }
    return sum.toFixed(1);
  };

  return (
    <div className="space-y-8">
      {/* Вводная лекция - Проблема измерения */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Интеграл: Искусство измерения «живых» процессов
        </h2>
        <div className="text-muted-foreground mb-6">
          <p className="mb-4">
            Многие из вас выбрали гуманитарные науки, чтобы держаться подальше от сложных формул. 
            Но сегодня мы будем заниматься не сухими вычислениями — мы будем заниматься <strong className="text-foreground">поиском смысла</strong>.
          </p>
          <p className="mb-4">
            Интеграл — это инструмент для понимания того, как <strong className="text-foreground">мгновенные состояния складываются в глобальный результат</strong>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
              <span className="text-xl">🧱</span> Простой случай: кирпичи
            </h3>
            <p className="text-sm text-muted-foreground">
              Посчитать объём кирпичной стены легко: длина × высота. Всё чётко и стабильно.
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
              <span className="text-xl">📈</span> Сложный случай: тревожность
            </h3>
            <p className="text-sm text-muted-foreground">
              Тревожность течёт. Утром низкая, перед экзаменом взлетает, потом спадает. 
              Как измерить <em>общий объём</em> пережитой тревоги?
            </p>
          </div>
        </div>
      </Card>

      {/* Интерактивная визуализация тревожности */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Пример: Измерение тревожности за день
        </h2>
        <p className="text-muted-foreground mb-6">
          Нарисуем график тревожности пациента в течение дня. Вертикаль — сила тревоги, 
          горизонталь — время. Как найти «площадь» под этой кривой линией?
        </p>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <svg width={600} height={320} className="border border-border rounded-lg bg-background" viewBox="0 0 600 320">
            <defs>
              <pattern id="grid-anxiety" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="hsl(var(--math-grid))" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="anxietyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width={600} height={320} fill="url(#grid-anxiety)" />
            
            {/* Оси */}
            <line x1={50} y1={270} x2={570} y2={270} className="stroke-foreground stroke-2"/>
            <line x1={50} y1={270} x2={50} y2={30} className="stroke-foreground stroke-2"/>
            
            {/* Подписи осей */}
            <text x={580} y={275} className="fill-foreground text-sm">t (часы)</text>
            <text x={25} y={25} className="fill-foreground text-sm">Тревога</text>
            
            {/* Прямоугольники Римана для тревожности */}
            {Array.from({length: anxietyPartitions}, (_, i) => {
              const dx = 24 / anxietyPartitions;
              const x = i * dx;
              const y = anxietyFunction(x + dx / 2);
              const scaledX = 50 + (x / 24) * 520;
              const scaledY = 270 - y * 20;
              const rectWidth = (520 / anxietyPartitions) - 1;
              const rectHeight = y * 20;
              
              return (
                <rect
                  key={i}
                  x={scaledX}
                  y={scaledY}
                  width={rectWidth}
                  height={rectHeight}
                  className="fill-primary opacity-40 stroke-primary stroke-1 transition-all duration-300"
                />
              );
            })}
            
            {/* Кривая тревожности */}
            <polyline
              points={Array.from({length: 100}, (_, i) => {
                const x = (i / 99) * 24;
                const scaledX = 50 + (x / 24) * 520;
                const y = anxietyFunction(x);
                const scaledY = 270 - y * 20;
                return `${scaledX},${scaledY}`;
              }).join(" ")}
              className="fill-none stroke-accent stroke-3"
            />
            
            {/* Метки времени */}
            {[0, 6, 8, 12, 14, 18, 24].map(hour => (
              <text 
                key={hour} 
                x={50 + (hour / 24) * 520} 
                y={290} 
                className={`text-xs text-center ${hour === 14 ? 'fill-accent font-bold' : 'fill-muted-foreground'}`}
              >
                {hour}:00
              </text>
            ))}
            
            {/* Аннотация пика */}
            <text x={50 + (14 / 24) * 520} y={60} className="fill-accent text-xs font-medium" textAnchor="middle">
              Экзамен!
            </text>
            <line 
              x1={50 + (14 / 24) * 520} 
              y1={65} 
              x2={50 + (14 / 24) * 520} 
              y2={270 - anxietyFunction(14) * 20 - 5}
              className="stroke-accent stroke-1"
              strokeDasharray="4,2"
            />
          </svg>
          
          <div className="flex-1 space-y-4 min-w-[280px]">
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">
                Количество измерений: {anxietyPartitions} (раз в {(24 / anxietyPartitions).toFixed(1)} ч)
              </label>
              <Slider
                value={[anxietyPartitions]}
                onValueChange={(value) => setAnxietyPartitions(value[0])}
                min={4}
                max={48}
                step={1}
                className="w-full"
                disabled={isAnimating}
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setAnxietyPartitions(4);
                  setTimeout(() => setIsAnimating(true), 100);
                }}
                variant="outline"
                className="flex-1"
                disabled={isAnimating}
              >
                ▶ Анимация
              </Button>
              <Button
                onClick={() => setAnxietyPartitions(4)}
                variant="outline"
                className="flex-1"
              >
                Сброс
              </Button>
            </div>
            
            <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-sm text-foreground font-medium mb-1">
                Сумма Римана ≈ {calculateAnxietyArea()} баллов·часов
              </p>
              <p className="text-xs text-muted-foreground">
                Это «накопленная тревожность» за день
              </p>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Принцип Minecraft:</strong> Если не умеем считать площадь сложной фигуры — 
                собираем её из простых прямоугольников!
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Интерактивная визуализация стресса */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Эффект накопления: Острый vs Хронический стресс
        </h2>
        <p className="text-muted-foreground mb-6">
          Интеграл помогает понять: <strong className="text-foreground">важна не только интенсивность момента, 
          но и длительность воздействия</strong>. Площадь под кривой — это накопленный эффект.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <svg width={600} height={300} className="border border-border rounded-lg bg-background" viewBox="0 0 600 300">
            <defs>
              <pattern id="grid-stress" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--math-grid))" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="acuteGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="hsl(var(--destructive))" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="chronicGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width={600} height={300} fill="url(#grid-stress)" />
            
            {/* Оси */}
            <line x1={50} y1={250} x2={570} y2={250} className="stroke-foreground stroke-2"/>
            <line x1={50} y1={250} x2={50} y2={30} className="stroke-foreground stroke-2"/>
            
            {/* Подписи */}
            <text x={580} y={255} className="fill-foreground text-xs">Дни</text>
            <text x={15} y={25} className="fill-foreground text-xs">Стресс</text>
            
            {/* Область под выбранной кривой */}
            <path
              d={`M 50,250 ` + 
                 Array.from({length: 100}, (_, i) => {
                   const day = (i / 99) * 90;
                   const scaledX = 50 + (day / 90) * 520;
                   const y = stressScenario === 'acute' 
                     ? 9 * Math.exp(-0.5 * Math.pow((day - 15) / 3, 2))
                     : 4 + 1.5 * Math.sin(day / 10);
                   const scaledY = 250 - y * 22;
                   return `L ${scaledX},${scaledY}`;
                 }).join(" ") +
                 ` L 570,250 Z`}
              fill={stressScenario === 'acute' ? "url(#acuteGradient)" : "url(#chronicGradient)"}
            />
            
            {/* Кривая острого стресса */}
            <polyline
              points={Array.from({length: 100}, (_, i) => {
                const day = (i / 99) * 90;
                const scaledX = 50 + (day / 90) * 520;
                const y = 9 * Math.exp(-0.5 * Math.pow((day - 15) / 3, 2));
                const scaledY = 250 - y * 22;
                return `${scaledX},${scaledY}`;
              }).join(" ")}
              className={`fill-none stroke-2 transition-opacity ${stressScenario === 'acute' ? 'stroke-destructive' : 'stroke-destructive/30'}`}
            />
            
            {/* Кривая хронического стресса */}
            <polyline
              points={Array.from({length: 100}, (_, i) => {
                const day = (i / 99) * 90;
                const scaledX = 50 + (day / 90) * 520;
                const y = 4 + 1.5 * Math.sin(day / 10);
                const scaledY = 250 - y * 22;
                return `${scaledX},${scaledY}`;
              }).join(" ")}
              className={`fill-none stroke-2 transition-opacity ${stressScenario === 'chronic' ? 'stroke-primary' : 'stroke-primary/30'}`}
            />
            
            {/* Метки */}
            <text x={50 + (15 / 90) * 520} y={40} className="fill-destructive text-xs font-medium" textAnchor="middle">
              Острый шок
            </text>
            <text x={300} y={130} className="fill-primary text-xs font-medium" textAnchor="middle">
              Хронический стресс
            </text>
            
            {/* Легенда */}
            <rect x={450} y={40} width={12} height={12} className="fill-destructive opacity-70"/>
            <text x={467} y={50} className="fill-foreground text-xs">Острый (S ≈ 54)</text>
            <rect x={450} y={58} width={12} height={12} className="fill-primary opacity-70"/>
            <text x={467} y={68} className="fill-foreground text-xs">Хронический (S ≈ 360)</text>
          </svg>
          
          <div className="flex-1 space-y-4 min-w-[280px]">
            <div className="flex gap-2">
              <Button
                onClick={() => setStressScenario('acute')}
                variant={stressScenario === 'acute' ? 'default' : 'outline'}
                className="flex-1"
              >
                Острый стресс
              </Button>
              <Button
                onClick={() => setStressScenario('chronic')}
                variant={stressScenario === 'chronic' ? 'default' : 'outline'}
                className="flex-1"
              >
                Хронический
              </Button>
            </div>
            
            <div className={`p-4 rounded-lg border ${
              stressScenario === 'acute' 
                ? 'bg-destructive/10 border-destructive/30' 
                : 'bg-primary/10 border-primary/30'
            }`}>
              {stressScenario === 'acute' ? (
                <>
                  <p className="text-sm text-foreground font-medium mb-1">
                    Острый стресс: высокий пик, быстрое восстановление
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Интеграл (площадь) ≈ 54 единиц. Человек испугался, но быстро восстановился.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm text-foreground font-medium mb-1">
                    Хронический стресс: средний уровень, долгая длительность
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Интеграл (площадь) ≈ 360 единиц. Накопленный эффект в 6 раз больше!
                  </p>
                </>
              )}
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Вывод:</strong> Длительный средний стресс 
                разрушительнее кратковременного шока. Интеграл показывает накопленный ущерб.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Философия интеграла */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Магия предела: от грубого к точному
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-muted rounded-lg text-center">
            <div className="text-3xl mb-2">📏</div>
            <h3 className="font-semibold text-foreground mb-1">Шаг 1: Измеряем грубо</h3>
            <p className="text-sm text-muted-foreground">
              Раз в час — получаем 24 прямоугольника. Картинка «пиксельная».
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg text-center">
            <div className="text-3xl mb-2">🔬</div>
            <h3 className="font-semibold text-foreground mb-1">Шаг 2: Уточняем</h3>
            <p className="text-sm text-muted-foreground">
              Раз в минуту — 1440 тонких столбиков. Ступеньки почти незаметны.
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg text-center">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-semibold text-foreground mb-1">Шаг 3: Предел</h3>
            <p className="text-sm text-muted-foreground">
              При n→∞ сумма Римана становится интегралом — идеальной площадью.
            </p>
          </div>
        </div>
        
        <div className="bg-background border border-border rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">Главный математический фокус:</p>
          <LatexFormula 
            formula="\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i)\Delta x" 
            displayMode={true}
            className="text-foreground text-lg"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Символ ∫ — это стилизованная буква <strong>S</strong> (от лат. <em>Summa</em>). 
            Мы просто суммируем, но делаем это <strong>идеально точно</strong>.
          </p>
        </div>
        
        <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
          <p className="text-center text-foreground font-medium">
            <strong>Интеграл — это искусство видеть Лес (целое), 
            складывая его из бесконечного числа Деревьев (мгновений).</strong>
          </p>
        </div>
      </Card>

      {/* Основная концепция интеграла Римана */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Интеграл Римана: Математическая формализация
        </h2>
        <div className="text-muted-foreground mb-6">
          <p className="mb-2">
            Интеграл функции f(x) от a до b — это предел суммы площадей прямоугольников при увеличении их количества.
          </p>
          <div className="flex items-center gap-2">
            <span>Формула:</span>
            <LatexFormula 
              formula="\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i)\Delta x" 
              displayMode={false}
              className="text-foreground"
            />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <svg width={width} height={height} className="border border-border rounded-lg bg-background">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--math-grid))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width={width} height={height} fill="url(#grid)" />
            
            {/* Оси */}
            <line x1={padding} y1={scaleY(0)} x2={width - padding} y2={scaleY(0)} className="stroke-foreground stroke-2"/>
            <line x1={scaleX(0)} y1={padding} x2={scaleX(0)} y2={height - padding} className="stroke-foreground stroke-2"/>
            
            {/* Подписи осей */}
            <text x={width - padding + 10} y={scaleY(0) + 5} className="fill-foreground text-sm">x</text>
            <text x={scaleX(0) - 15} y={padding - 10} className="fill-foreground text-sm">y</text>
            
            {/* Область под кривой */}
            {showArea && (
              <path
                d={`M ${scaleX(xMin)},${scaleY(0)} L ${generateCurve(f)} L ${scaleX(xMax)},${scaleY(0)} Z`}
                className="fill-primary opacity-10"
              />
            )}
            
            {/* Прямоугольники Римана */}
            {generateRectangles()}
            
            {/* Кривая */}
            <polyline points={generateCurve(f)} className="fill-none stroke-primary stroke-3"/>
            
            {/* Метки */}
            <text x={width / 2 - 40} y={height - 10} className="fill-foreground text-sm text-center font-medium">
              f(x) = 0.5x² + 1
            </text>
          </svg>
          
          <div className="flex-1 space-y-4 min-w-[250px]">
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">
                Количество разбиений: {partitions}
              </label>
              <Slider
                value={[partitions]}
                onValueChange={(value) => setPartitions(value[0])}
                min={2}
                max={40}
                step={1}
                className="w-full"
              />
            </div>
            
            <Button onClick={() => setShowArea(!showArea)} variant="outline" className="w-full">
              {showArea ? "Скрыть" : "Показать"} точную площадь
            </Button>
            
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Идея:</strong> При увеличении количества прямоугольников 
                (n → ∞) их суммарная площадь стремится к точной площади под кривой.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Связь с теорией вероятностей */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Связь с теорией вероятностей
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          <div className="space-y-4">
            <div className="text-muted-foreground">
              <p className="mb-4">
                Функция плотности вероятности f(x) описывает распределение случайной величины.
                Интеграл этой функции даёт вероятность попадания в интервал.
              </p>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Вероятность как площадь:</p>
              <div className="flex items-center justify-center">
                <LatexFormula 
                  formula="P(a \leq X \leq b) = \int_a^b f(x)\,dx" 
                  displayMode={true}
                  className="text-foreground"
                />
              </div>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Нормализация (общая площадь = 1):</p>
              <div className="flex items-center justify-center">
                <LatexFormula 
                  formula="\int_{-\infty}^{+\infty} f(x)\,dx = 1" 
                  displayMode={true}
                  className="text-foreground"
                />
              </div>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Функция плотности нормального распределения:</p>
              <div className="flex items-center justify-center">
                <LatexFormula 
                  formula="f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}" 
                  displayMode={true}
                  className="text-foreground"
                />
              </div>
            </div>
          </div>
          
          <div>
            <svg width={550} height={350} className="border border-border rounded-lg bg-background w-full" viewBox="0 0 550 350">
              <defs>
                <pattern id="grid-prob" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--math-grid))" strokeWidth="0.5"/>
                </pattern>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <rect width={550} height={350} fill="url(#grid-prob)" />
              
              {/* Оси */}
              <line x1={40} y1={280} x2={510} y2={280} className="stroke-foreground stroke-2"/>
              <line x1={40} y1={280} x2={40} y2={40} className="stroke-foreground stroke-2"/>
              
              <text x={520} y={285} className="fill-foreground text-sm">x</text>
              <text x={35} y={30} className="fill-foreground text-sm">f(x)</text>
              
              {/* Выделенная область P(3 ≤ X ≤ 5) */}
              <path
                d={`M ${40 + (3/6) * 470},${280} ` + 
                   Array.from({length: 41}, (_, i) => {
                     const x = 3 + (i / 40) * 2;
                     const scaledX = 40 + (x / 6) * 470;
                     const y = 3 * Math.exp(-0.5 * Math.pow((x - 4) / 1, 2));
                     const scaledY = 280 - y * 70;
                     return `L ${scaledX},${scaledY}`;
                   }).join(" ") +
                   ` L ${40 + (5/6) * 470},${280} Z`}
                fill="url(#areaGradient)"
              />
              
              {/* Прямоугольники для наглядности */}
              {Array.from({length: 20}, (_, i) => {
                const x = (i / 20) * 6;
                const scaledX = 40 + (x / 6) * 470;
                const y = 3 * Math.exp(-0.5 * Math.pow((x + 0.15 - 4) / 1, 2));
                const scaledY = 280 - y * 70;
                const rectWidth = (1 / 20) * 6 * (470 / 6);
                const rectHeight = y * 70;
                const isInRange = x >= 2.85 && x <= 5;
                
                return (
                  <rect
                    key={i}
                    x={scaledX}
                    y={scaledY}
                    width={rectWidth - 1}
                    height={rectHeight}
                    className={`${isInRange ? "fill-accent opacity-20" : "fill-secondary opacity-10"} stroke-border stroke-1`}
                  />
                );
              })}
              
              {/* Кривая нормального распределения */}
              <polyline
                points={Array.from({length: 150}, (_, i) => {
                  const x = (i / 149) * 6;
                  const scaledX = 40 + (x / 6) * 470;
                  const y = 3 * Math.exp(-0.5 * Math.pow((x - 4) / 1, 2));
                  const scaledY = 280 - y * 70;
                  return `${scaledX},${scaledY}`;
                }).join(" ")}
                className="fill-none stroke-primary stroke-3"
              />
              
              {/* Вертикальные линии границ интервала */}
              <line 
                x1={40 + (3/6) * 470} y1={280} 
                x2={40 + (3/6) * 470} y2={280 - 3 * Math.exp(-0.5 * Math.pow((3 - 4) / 1, 2)) * 70}
                className="stroke-accent stroke-2" strokeDasharray="8,4"
              />
              <line 
                x1={40 + (5/6) * 470} y1={280} 
                x2={40 + (5/6) * 470} y2={280 - 3 * Math.exp(-0.5 * Math.pow((5 - 4) / 1, 2)) * 70}
                className="stroke-accent stroke-2" strokeDasharray="8,4"
              />
              
              {/* Метки на оси X */}
              <text x={40 + (0/6) * 470} y={300} className="fill-muted-foreground text-xs text-center">0</text>
              <text x={40 + (1/6) * 470} y={300} className="fill-muted-foreground text-xs text-center">1</text>
              <text x={40 + (2/6) * 470} y={300} className="fill-muted-foreground text-xs text-center">2</text>
              <text x={40 + (3/6) * 470 - 5} y={300} className="fill-accent text-sm font-bold">a=3</text>
              <text x={40 + (4/6) * 470 - 5} y={300} className="fill-foreground text-xs">μ=4</text>
              <text x={40 + (5/6) * 470 - 5} y={300} className="fill-accent text-sm font-bold">b=5</text>
              <text x={40 + (6/6) * 470 - 10} y={300} className="fill-muted-foreground text-xs">6</text>
              
              {/* Аннотации */}
              <text x={275} y={150} className="fill-accent font-bold text-lg" textAnchor="middle">P(3 ≤ X ≤ 5)</text>
              <text x={275} y={170} className="fill-accent text-sm" textAnchor="middle">≈ 68.3%</text>
              
              {/* Легенда */}
              <rect x={400} y={40} width={15} height={15} className="fill-primary opacity-80"/>
              <text x={420} y={52} className="fill-foreground text-xs">Плотность f(x)</text>
              <rect x={400} y={60} width={15} height={15} className="fill-accent opacity-50"/>
              <text x={420} y={72} className="fill-foreground text-xs">Вероятность (площадь)</text>
            </svg>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-4 h-4 rounded-full bg-primary"></span>
              <h3 className="font-semibold text-foreground">Функция плотности</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Кривая показывает относительную вероятность различных значений. 
              Выше кривая — больше вероятность.
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-4 h-4 rounded-full bg-accent"></span>
              <h3 className="font-semibold text-foreground">Площадь = Вероятность</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Закрашенная область под кривой между a и b равна вероятности P(a ≤ X ≤ b).
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-4 h-4 rounded-full bg-secondary"></span>
              <h3 className="font-semibold text-foreground">Прямоугольники Римана</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Интеграл аппроксимируется суммой площадей прямоугольников под кривой.
            </p>
          </div>
        </div>
      </Card>

      {/* Связь со статистикой */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Связь со статистикой: Нормальное распределение
        </h2>
        <p className="text-muted-foreground mb-6">
          Гистограмма эмпирических данных приближается к кривой нормального распределения при увеличении размера выборки.
          Это демонстрирует центральную предельную теорему статистики.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start mb-6">
          <svg width={width} height={height} className="border border-border rounded-lg bg-background">
            <rect width={width} height={height} fill="url(#grid)" />
            
            <line x1={padding} y1={scaleY(0)} x2={width - padding} y2={scaleY(0)} className="stroke-foreground stroke-2"/>
            <line x1={scaleX(0)} y1={padding} x2={scaleX(0)} y2={height - padding} className="stroke-foreground stroke-2"/>
            
            {generateHistogram()}
            
            <polyline
              points={generateCurve((x) => normalDist(x, 4, 0.8) * 7.5, 150)}
              className="fill-none stroke-accent stroke-3"
            />
            
            <text x={width / 2 - 100} y={height - 10} className="fill-foreground text-sm text-center font-medium">
              Гистограмма vs Нормальное распределение
            </text>
            <text x={width - 150} y={padding + 20} className="fill-accent text-xs font-medium">
              Теоретическое распределение
            </text>
          </svg>
          
          <div className="flex-1 space-y-4 min-w-[250px]">
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">
                Размер выборки: {sampleSize}
              </label>
              <Slider
                value={[sampleSize]}
                onValueChange={(value) => setSampleSize(value[0])}
                min={20}
                max={500}
                step={10}
                className="w-full"
              />
            </div>
            
            <Button
              onClick={() => setSampleSize(Math.floor(Math.random() * 480) + 20)}
              variant="outline"
              className="w-full"
            >
              Обновить данные
            </Button>
            
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Наблюдение:</strong> При увеличении размера выборки 
                гистограмма всё точнее приближается к теоретической кривой нормального распределения.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Гистограммы и распределения</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Гистограмма — это приближение функции плотности вероятности методом прямоугольников. 
              При увеличении объёма выборки и уменьшении ширины столбцов гистограмма стремится к 
              истинному распределению.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-primary mt-1"></span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Площадь столбца</strong> = относительная частота × ширина интервала
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-accent mt-1"></span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Интеграл</strong> = суммарная площадь = общая вероятность
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Математическое ожидание</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Среднее значение случайной величины также вычисляется через интеграл:
            </p>
            <div className="p-4 bg-background border border-border rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <LatexFormula 
                  formula="E[X] = \int_{-\infty}^{+\infty} x \cdot f(x) \, dx" 
                  displayMode={true}
                  className="text-foreground text-base"
                />
              </div>
              <p className="mt-2 text-muted-foreground text-xs text-center">
                где f(x) — функция плотности вероятности
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Это "центр масс" распределения, вычисляемый как интеграл произведения 
              значений на их вероятности.
            </p>
          </div>
        </div>
      </Card>

      {/* Дисперсия и стандартное отклонение */}
      <Card className="p-6 bg-card shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Дисперсия: Мера разброса данных
        </h2>
        <div className="text-muted-foreground mb-6">
          <p className="mb-4">
            Дисперсия измеряет, насколько сильно данные отклоняются от среднего значения. 
            Чем больше дисперсия, тем больше разброс данных.
          </p>
          <div className="bg-background border border-border rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center mb-2">
              <LatexFormula 
                formula="\text{Var}(X) = E[(X - \mu)^2] = \int_{-\infty}^{+\infty} (x - \mu)^2 \cdot f(x) \, dx" 
                displayMode={true}
                className="text-foreground text-base"
              />
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">
              где μ = E[X] — математическое ожидание
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <LatexFormula 
                formula="\sigma = \sqrt{\text{Var}(X)}" 
                displayMode={true}
                className="text-foreground text-base"
              />
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">
              σ — стандартное отклонение (корень из дисперсии)
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3 text-foreground text-center">Малая дисперсия (σ = 0.5)</h3>
            <svg width={300} height={200} className="border border-border rounded-lg bg-background mx-auto">
              <defs>
                <pattern id="grid-small" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--math-grid))" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width={300} height={200} fill="url(#grid-small)" />
              
              <line x1={30} y1={170} x2={270} y2={170} className="stroke-foreground stroke-2"/>
              <line x1={150} y1={30} x2={150} y2={170} className="stroke-foreground stroke-1 opacity-30"/>
              
              <polyline
                points={Array.from({length: 100}, (_, i) => {
                  const x = (i / 99) * 6;
                  const scaledX = 30 + (x / 6) * 240;
                  const y = 8 * Math.exp(-0.5 * Math.pow((x - 3) / 0.5, 2));
                  const scaledY = 170 - y * 10;
                  return `${scaledX},${scaledY}`;
                }).join(" ")}
                className="fill-none stroke-primary stroke-2"
              />
              
              <text x={150} y={190} className="fill-foreground text-xs text-center">μ</text>
              <line x1={150} y1={175} x2={150} y2={30} className="stroke-accent stroke-1 stroke-dasharray-4 opacity-50"/>
              
              <line x1={110} y1={175} x2={110} y2={140} className="stroke-secondary stroke-1 stroke-dasharray-2"/>
              <line x1={190} y1={175} x2={190} y2={140} className="stroke-secondary stroke-1 stroke-dasharray-2"/>
              <text x={105} y={190} className="fill-secondary text-xs">-σ</text>
              <text x={185} y={190} className="fill-secondary text-xs">+σ</text>
            </svg>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Данные сконцентрированы близко к среднему значению
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-foreground text-center">Большая дисперсия (σ = 1.2)</h3>
            <svg width={300} height={200} className="border border-border rounded-lg bg-background mx-auto">
              <rect width={300} height={200} fill="url(#grid-small)" />
              
              <line x1={30} y1={170} x2={270} y2={170} className="stroke-foreground stroke-2"/>
              <line x1={150} y1={30} x2={150} y2={170} className="stroke-foreground stroke-1 opacity-30"/>
              
              <polyline
                points={Array.from({length: 100}, (_, i) => {
                  const x = (i / 99) * 6;
                  const scaledX = 30 + (x / 6) * 240;
                  const y = 8 * Math.exp(-0.5 * Math.pow((x - 3) / 1.2, 2));
                  const scaledY = 170 - y * 10;
                  return `${scaledX},${scaledY}`;
                }).join(" ")}
                className="fill-none stroke-primary stroke-2"
              />
              
              <text x={150} y={190} className="fill-foreground text-xs text-center">μ</text>
              <line x1={150} y1={175} x2={150} y2={30} className="stroke-accent stroke-1 stroke-dasharray-4 opacity-50"/>
              
              <line x1={54} y1={175} x2={54} y2={100} className="stroke-secondary stroke-1 stroke-dasharray-2"/>
              <line x1={246} y1={175} x2={246} y2={100} className="stroke-secondary stroke-1 stroke-dasharray-2"/>
              <text x={49} y={190} className="fill-secondary text-xs">-σ</text>
              <text x={241} y={190} className="fill-secondary text-xs">+σ</text>
            </svg>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Данные широко разбросаны относительно среднего
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2 text-foreground">Интерпретация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-foreground">68%</strong> данных находятся в пределах ±σ от среднего</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-foreground">95%</strong> данных находятся в пределах ±2σ от среднего</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong className="text-foreground">99.7%</strong> данных находятся в пределах ±3σ от среднего</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2 text-foreground">Связь с интегралом</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Дисперсия вычисляется как интеграл квадрата отклонений от среднего, 
              взвешенных по функции плотности вероятности.
            </p>
            <p className="text-sm text-muted-foreground">
              Площадь под кривой (x - μ)² · f(x) даёт дисперсию — меру разброса распределения.
            </p>
          </div>
        </div>
      </Card>

    </div>
  );
};

export default RiemannIntegralVisualization;
