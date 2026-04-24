import { Link } from "react-router-dom";
import { courseStructure } from "@/data/courseStructure";
import { cn } from "@/lib/utils";

export const CompassNavigation = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Навигация по курсу
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждый модуль раскрывает новый аспект математического анализа. 
            Начните с основ и двигайтесь к сложным концепциям.
          </p>
        </div>

        {/* Compass-style circular layout for larger screens */}
        <div className="hidden lg:block relative max-w-4xl mx-auto">
          <div className="relative aspect-square">
            {/* Central compass */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 shadow-lg">
              <div className="text-center">
                <div className="font-serif text-lg font-semibold text-primary">Анализ</div>
                <div className="text-xs text-muted-foreground">через форму</div>
              </div>
            </div>

            {/* Module circles arranged radially */}
            {courseStructure.map((module, index) => {
              const angle = (index / courseStructure.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42; // percentage
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <Link
                  key={module.id}
                  to={module.lessons[0]?.path || "/"}
                  className={cn(
                    "absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-xl",
                    "bg-card border border-border shadow-sm",
                    "hover:shadow-lg hover:scale-110 hover:border-accent/50",
                    "transition-all duration-300 flex flex-col items-center justify-center p-2",
                    "group cursor-pointer"
                  )}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full mb-1 flex items-center justify-center text-white font-semibold text-sm"
                    style={{ backgroundColor: `hsl(var(--${module.color}))` }}
                  >
                    {module.id}
                  </div>
                  <div className="text-xs font-medium text-foreground text-center line-clamp-2 group-hover:text-accent transition-colors">
                    {module.title}
                  </div>
                </Link>
              );
            })}

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {courseStructure.map((module, index) => {
                const angle = (index / courseStructure.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 42;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);

                return (
                  <line
                    key={module.id}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="hsl(var(--border))"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Linear layout for smaller screens */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courseStructure.map((module) => (
            <Link
              key={module.id}
              to={module.lessons[0]?.path || "/"}
              className="lesson-card flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold shrink-0"
                style={{ backgroundColor: `hsl(var(--${module.color}))` }}
              >
                {module.id}
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
                <p className="text-xs text-accent mt-2">
                  {module.lessons.length} {module.lessons.length === 1 ? "урок" : "урока"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
