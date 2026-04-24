import { ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const pairs = [
  {
    function1: { name: 'Расстояние', symbol: 'f(t)', unit: 'км', example: 'Одометр' },
    function2: { name: 'Скорость', symbol: 'df/dt', unit: 'км/ч', example: 'Спидометр' },
  },
  {
    function1: { name: 'Высота', symbol: 'y(x)', unit: 'м', example: 'Уровень воды' },
    function2: { name: 'Наклон', symbol: 'dy/dx', unit: '—', example: 'Крутизна склона' },
  },
  {
    function1: { name: 'Объём', symbol: 'V(t)', unit: 'л', example: 'Бак с водой' },
    function2: { name: 'Поток', symbol: 'dV/dt', unit: 'л/мин', example: 'Скорость налива' },
  },
  {
    function1: { name: 'Население', symbol: 'P(t)', unit: 'чел.', example: 'Перепись' },
    function2: { name: 'Рост', symbol: 'dP/dt', unit: 'чел./год', example: 'Прирост' },
  },
];

interface FunctionPairsTableProps {
  className?: string;
}

export const FunctionPairsTable = ({ className }: FunctionPairsTableProps) => {
  return (
    <div className={cn('space-y-6', className)}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-4 bg-function1/10 rounded-tl-xl">
                <div className="flex items-center gap-2">
                  <span className="function-1-badge">Function (1)</span>
                  <span className="text-sm font-normal text-muted-foreground">Состояние / Накопление</span>
                </div>
              </th>
              <th className="p-4 bg-muted/50 w-20">
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                  <ArrowRight className="w-4 h-4" />
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </th>
              <th className="text-left p-4 bg-function2/10 rounded-tr-xl">
                <div className="flex items-center gap-2">
                  <span className="function-2-badge">Function (2)</span>
                  <span className="text-sm font-normal text-muted-foreground">Скорость изменения</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((pair, index) => (
              <tr 
                key={index}
                className={cn(
                  'border-b border-border',
                  index === pairs.length - 1 && 'border-b-0'
                )}
              >
                <td className="p-4 bg-function1/5">
                  <div className="space-y-1">
                    <div className="font-serif text-lg font-semibold">{pair.function1.name}</div>
                    <div className="text-math text-function1">{pair.function1.symbol}</div>
                    <div className="text-xs text-muted-foreground">{pair.function1.example}</div>
                  </div>
                </td>
                <td className="p-4 bg-muted/30 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-muted-foreground">d/dt</div>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <ArrowLeft className="w-4 h-4 text-primary" />
                    <div className="text-xs text-muted-foreground">∫ dt</div>
                  </div>
                </td>
                <td className="p-4 bg-function2/5">
                  <div className="space-y-1">
                    <div className="font-serif text-lg font-semibold">{pair.function2.name}</div>
                    <div className="text-math text-function2">{pair.function2.symbol}</div>
                    <div className="text-xs text-muted-foreground">{pair.function2.example}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-function1/10 to-function1/5 border border-function1/20">
          <h4 className="font-serif font-semibold mb-2 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-accent" />
            Производная (Derivative)
          </h4>
          <p className="text-sm text-muted-foreground">
            От состояния к скорости: <em>«Как быстро меняется?»</em>
          </p>
        </div>
        
        <div className="p-4 rounded-xl bg-gradient-to-br from-function2/10 to-function2/5 border border-function2/20">
          <h4 className="font-serif font-semibold mb-2 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-primary" />
            Интеграл (Integral)
          </h4>
          <p className="text-sm text-muted-foreground">
            От скорости к состоянию: <em>«Сколько накопилось?»</em>
          </p>
        </div>
      </div>
    </div>
  );
};
