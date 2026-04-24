import { useState } from "react";
import RiemannIntegralVisualization from "@/components/RiemannIntegralVisualization";
import ProblemsSection from "@/components/ProblemsSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [view, setView] = useState<"theory" | "problems">("theory");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Интеграл Римана
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Интерактивная визуализация и связь с теорией вероятностей
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={view === "theory" ? "default" : "outline"}
              onClick={() => setView("theory")}
              size="sm"
            >
              📖 Теория
            </Button>
            <Button
              variant={view === "problems" ? "default" : "outline"}
              onClick={() => setView("problems")}
              size="sm"
            >
              📝 Задачи
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {view === "theory" ? <RiemannIntegralVisualization /> : <ProblemsSection />}

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            <p>Учебная иллюстрация математических концепций</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
