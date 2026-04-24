import { FunctionBadge } from '@/components/FunctionBadge';
import { CarAnimation } from '@/components/CarAnimation';

export const Screen01 = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="text-center space-y-4">
        <FunctionBadge type="both" className="justify-center" />
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Интуиция: Одометр и Спидометр
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Представьте автомобиль на шоссе. У него два прибора, которые рассказывают разные, 
          но связанные истории о движении.
        </p>
      </header>

      <CarAnimation />

      <section className="card-elevated p-6 md:p-8">
        <h3 className="font-serif text-xl font-semibold mb-4">🎯 Что мы видим?</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-function1/20 text-function1 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
            <span><strong className="text-foreground">Одометр</strong> (расстояние) постоянно растёт — это накопление пройденного пути</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-function2/20 text-function2 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
            <span><strong className="text-foreground">Спидометр</strong> (скорость) показывает, насколько быстро растёт это расстояние</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
            <span>Чем выше скорость — тем быстрее крутится одометр. <em>Они связаны!</em></span>
          </li>
        </ul>
      </section>

      <div className="text-center text-sm text-muted-foreground">
        Никаких формул — только интуиция. Формулы придут позже, когда идея станет очевидной.
      </div>
    </div>
  );
};
