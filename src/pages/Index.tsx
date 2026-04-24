import { Link, useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Divide,
  Waves,
  BarChart3,
  GitBranch,
  Maximize2,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  Target,
  BarChart2,
  Sigma,
  ArrowRight,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { CompassCard } from "@/components/home/CompassCard";
import { CompassNavigation } from "@/components/home/CompassNavigation";
import { ModuleCard } from "@/components/ModuleCard";
import { modules } from "@/data/courseData";

const functionTypes = [
  { title: "Полиномиальные", icon: TrendingUp, to: "/functions/polynomial", formula: "aₙxⁿ + …" },
  { title: "Рациональные", icon: Divide, to: "/functions/rational", formula: "P(x)/Q(x)" },
  { title: "Тригонометрические", icon: Waves, to: "/functions/trigonometric", formula: "sin, cos, tan" },
  { title: "Экспоненциальные", icon: ArrowUpRight, to: "/functions/exponential", formula: "eˣ" },
  { title: "Логарифмические", icon: BarChart3, to: "/functions/logarithmic", formula: "ln(x)" },
  { title: "Кусочно-заданные", icon: GitBranch, to: "/functions/piecewise", formula: "{ … }" },
  { title: "С модулем", icon: Maximize2, to: "/functions/absolute", formula: "|x|" },
  { title: "Особые случаи", icon: Sparkles, to: "/functions/special", formula: "sin(1/x)" },
];

const visualizations = [
  {
    title: "Интеграл Римана",
    description: "Интерактивная визуализация суммы Римана + связь с теорией вероятностей. Задачи и теория.",
    icon: Sigma,
    to: "/visualizations/integral",
    badge: "SVG + интерактив",
  },
  {
    title: "Доверительный интервал",
    description: "Визуализация нормального распределения и доверительного интервала со слайдером.",
    icon: BarChart2,
    to: "/visualizations/probability",
    badge: "Теория вероятностей",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 relative inline-block">
              <Compass className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto" strokeWidth={1.5} />
              <div className="absolute inset-0 animate-compass-spin opacity-20">
                <Compass className="w-20 h-20 md:w-24 md:h-24 text-accent mx-auto" strokeWidth={1} />
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Calculus
              <span className="block text-accent">Compass</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Математический анализ — визуально
            </p>
            <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto">
              Курс, где <span className="text-accent font-medium">график</span> — главный инструмент понимания.
              Анализ через форму, интуиция через визуализацию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/module/0/function-definition">
                  Начать обучение
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/#modules">Обзор модулей</Link>
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[["11", "модулей"], ["40+", "уроков"], ["∞", "графиков"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="font-serif text-3xl font-bold text-foreground">{val}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key concepts ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">Ключевая идея</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, color: "text-primary bg-primary/10", title: "Function (1)", desc: "Состояние, накопление — расстояние, объём, население" },
              { icon: Target, color: "text-accent bg-accent/10", title: "Связь", desc: "Производная и интеграл — два перехода между функциями" },
              { icon: TrendingUp, color: "text-emerald-500 bg-emerald-500/10", title: "Function (2)", desc: "Скорость изменения — скорость, поток, темп роста" },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6 text-center shadow-sm">
                <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Structured course modules ──────────────────────────────────────── */}
      <section id="modules" className="py-16">
        <CompassNavigation />
      </section>

      {/* ── Interactive guide ─────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Интерактивный гид
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Пошаговое погружение: от интуиции к формуле. Вдохновлено подходом Гилберта Стрэнга.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                onClick={() => module.isUnlocked && navigate(`/guide/${module.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Visualizations ────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Интерактивные визуализации
            </h2>
            <p className="text-muted-foreground">
              Динамические иллюстрации математических концепций
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {visualizations.map((viz) => {
              const Icon = viz.icon;
              return (
                <Link
                  key={viz.to}
                  to={viz.to}
                  className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                          {viz.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{viz.description}</p>
                      <span className="inline-block text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                        {viz.badge}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Function reference ────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Справочник функций
            </h2>
            <p className="text-muted-foreground">
              Эталонные графики с аналитическими свойствами
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {functionTypes.map((func, index) => (
              <CompassCard
                key={func.to}
                title={func.title}
                description=""
                icon={func.icon}
                to={func.to}
                formula={func.formula}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
