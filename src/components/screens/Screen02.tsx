import { FunctionBadge } from '@/components/FunctionBadge';
import { FunctionPairsTable } from '@/components/FunctionPairsTable';

export const Screen02 = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="text-center space-y-4">
        <FunctionBadge type="both" className="justify-center" />
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Пары функций
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Расстояние и скорость — лишь один пример. Эта пара «состояние ↔ скорость изменения» 
          встречается повсюду!
        </p>
      </header>

      <FunctionPairsTable />

      <section className="card-elevated p-6 md:p-8">
        <h3 className="font-serif text-xl font-semibold mb-4">🔑 Главный паттерн</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-function1" />
              Function (1) — «Сколько?»
            </h4>
            <p className="text-sm text-muted-foreground">
              Это величина, которая накапливается или представляет состояние системы 
              в данный момент. Её можно измерить напрямую.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-function2" />
              Function (2) — «Как быстро?»
            </h4>
            <p className="text-sm text-muted-foreground">
              Это темп изменения первой величины. Она говорит нам о динамике — 
              как меняется состояние с течением времени.
            </p>
          </div>
        </div>
      </section>

      <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
          💡 Почему это важно?
        </h4>
        <p className="text-muted-foreground">
          Calculus — это наука о связи между этими двумя типами функций. 
          <strong className="text-foreground"> Производная</strong> переводит Function (1) в Function (2), 
          а <strong className="text-foreground"> интеграл</strong> — обратно. 
          Всё остальное — детали.
        </p>
      </div>
    </div>
  );
};
