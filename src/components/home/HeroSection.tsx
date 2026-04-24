import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Compass Icon */}
          <div className="mb-8 relative inline-block">
            <div className="relative">
              <Compass className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto" strokeWidth={1.5} />
              <div className="absolute inset-0 animate-compass-spin opacity-20">
                <Compass className="w-20 h-20 md:w-24 md:h-24 text-accent mx-auto" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Calculus
            <span className="block text-accent">Compass</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Математический анализ
          </p>

          {/* Philosophy */}
          <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto">
            Курс, где <span className="text-accent font-medium">график</span> — главный инструмент понимания. 
            Анализ через форму, интуиция через визуализацию.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/module/0/function-definition">
                Начать обучение
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/#modules">
                Обзор модулей
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-foreground">11</div>
              <div className="text-sm text-muted-foreground">модулей</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-foreground">40+</div>
              <div className="text-sm text-muted-foreground">уроков</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-foreground">∞</div>
              <div className="text-sm text-muted-foreground">графиков</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
