import { FunctionBadge } from '@/components/FunctionBadge';
import { InteractiveGraph } from '@/components/InteractiveGraph';

export const Screen03 = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="text-center space-y-4">
        <FunctionBadge type="both" className="justify-center" />
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Синхронные графики
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Посмотрите, как связаны графики расстояния и скорости. 
          Двигайте ползунок времени и наблюдайте за обоими графиками одновременно.
        </p>
      </header>

      <InteractiveGraph showTangent />

      <section className="card-elevated p-6 md:p-8">
        <h3 className="font-serif text-xl font-semibold mb-4">👀 Что замечаем?</h3>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-function1/20 text-function1 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-foreground">Расстояние</strong> — кривая, 
              которая растёт всё быстрее (парабола <span className="text-math">f(t) = t²</span>)
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-function2/20 text-function2 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-foreground">Скорость</strong> — прямая линия, 
              которая показывает <em>наклон</em> кривой расстояния (<span className="text-math">s(t) = 2t</span>)
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-foreground">Касательная</strong> (пунктир) — 
              её наклон в точке равен значению скорости в этот момент
            </div>
          </li>
        </ul>
      </section>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <h4 className="font-serif font-semibold mb-2">📐 Геометрия производной</h4>
          <p className="text-sm text-muted-foreground">
            Скорость = наклон касательной к графику расстояния. 
            Чем круче график — тем больше скорость.
          </p>
        </div>
        
        <div className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <h4 className="font-serif font-semibold mb-2">🔗 Связь функций</h4>
          <p className="text-sm text-muted-foreground">
            Когда скорость растёт линейно (2t), расстояние растёт 
            по параболе (t²). Это не совпадение!
          </p>
        </div>
      </div>
    </div>
  );
};
