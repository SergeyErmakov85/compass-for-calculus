import { FunctionBadge } from '@/components/FunctionBadge';
import { InteractiveGraph } from '@/components/InteractiveGraph';

export const Screen04 = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="text-center space-y-4">
        <FunctionBadge type="function2" className="justify-center" />
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Площадь под графиком скорости
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Вот удивительный факт: площадь под графиком скорости — 
          это <em>накопленное расстояние</em>. Проверьте сами!
        </p>
      </header>

      <InteractiveGraph showArea />

      <section className="card-elevated p-6 md:p-8">
        <h3 className="font-serif text-xl font-semibold mb-4">✨ Магия площади</h3>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Посмотрите на закрашенную область под графиком скорости. 
            Её площадь <strong className="text-foreground">в точности равна</strong> расстоянию!
          </p>
          <div className="p-4 rounded-lg bg-secondary/50 font-mono text-center">
            <span className="text-function2">Площадь под s(t)</span>
            <span className="mx-4">=</span>
            <span className="text-function1">Расстояние f(t)</span>
          </div>
          <p>
            При <span className="text-math">t = 3</span>: площадь треугольника = <span className="text-math">½ × 3 × 6 = 9</span>, 
            и расстояние <span className="text-math">f(3) = 3² = 9</span>. Совпадение?
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-function2/10 to-function2/5 border border-function2/20">
          <h4 className="font-serif font-semibold mb-2">📊 Скорость → Расстояние</h4>
          <p className="text-sm text-muted-foreground">
            Накопление скорости (площадь) даёт пройденный путь.
          </p>
        </div>
        
        <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border">
          <h4 className="font-serif font-semibold mb-2">⏱️ Время как основа</h4>
          <p className="text-sm text-muted-foreground">
            Чем дольше едем — тем больше площадь и расстояние.
          </p>
        </div>
        
        <div className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <h4 className="font-serif font-semibold mb-2">🎯 Это и есть интеграл</h4>
          <p className="text-sm text-muted-foreground">
            Позже мы дадим этой операции имя: ∫ s(t) dt.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
          🎓 Fundamental Theorem of Calculus (превью)
        </h4>
        <p className="text-muted-foreground">
          То, что вы только что увидели — сердце всего calculus. 
          Производная и интеграл — <strong className="text-foreground">обратные операции</strong>. 
          Наклон кривой и площадь под кривой связаны как «туда и обратно».
        </p>
      </div>
    </div>
  );
};
