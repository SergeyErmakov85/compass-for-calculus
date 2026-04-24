import { ConfidenceInterval } from "@/components/ConfidenceInterval";
import { ProbabilityTheory } from "@/components/ProbabilityTheory";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-top duration-700">
            Теория вероятности
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Основные формулы и понятия теории вероятностей
          </p>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <ProbabilityTheory />
        </div>

        <header className="text-center space-y-4 mt-24 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-top duration-700">
            Визуализация статистики
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Интерактивная иллюстрация доверительного интервала в нормальном распределении
          </p>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <ConfidenceInterval />
        </div>

        <footer className="text-center text-sm text-muted-foreground pt-8">
          <p>Перемещайте слайдер, чтобы изменить уровень доверия и увидеть, как изменяется ширина интервала</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
