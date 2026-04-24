import { Link } from "react-router-dom";
import { courseStructure } from "@/data/courseStructure";
import { cn } from "@/lib/utils";

export const CompassNavigation = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-4">
            Навигация по курсу
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый модуль раскрывает новый аспект математического анализа. 
            Начните с основ и двигайтесь к сложным концепциям.
          </p>
        </div>

        {/* Compass-style circular layout for larger screens */}
        <div className="hidden lg:block relative w-full mx-auto" style={{ maxWidth: "1600px" }}>
          <div className="relative aspect-square">
            {/* Central compass */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 shadow-lg">
              <div className="text-center">
                <div className="font-serif text-5xl font-semibold text-primary">Анализ</div>
                <div className="text-2xl text-muted-foreground mt-2">через форму</div>
              </div>
            </div>

            {/* Module circles arranged radially */}
            {courseStructure.map((module, index) => {
              const angle = (index / courseStructure.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42; // percentage — pushed outward to avoid overlap
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <Link
                  key={module.id}
                  to={module.lessons[0]?.path || "/"}
                  className={cn(
                    "absolute w-56 h-56 -translate-x-1/2 -translate-y-1/2 rounded-xl",
                    "bg-card border border-border shadow-sm",
                    "hover:shadow-lg hover:scale-105 hover:border-accent/50",
                    "transition-all duration-300 flex flex-col items-center justify-center p-5",
                    "group cursor-pointer"
                  )}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full mb-3 flex items-center justify-center text-white font-semibold text-3xl"
                    style={{ backgroundColor: `hsl(var(--${module.color}))` }}
                  >
                    {module.id}
                  </div>
                  <div className="text-base font-medium text-foreground text-center line-clamp-3 group-hover:text-accent transition-colors leading-tight">
                    {module.title}
                  </div>
                </Link>
              );
            })}

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <marker
                  id="compass-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
                </marker>
              </defs>
              {courseStructure.map((module, index) => {
                const angle = (index / courseStructure.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 42;
                // Card is w-56 (224px) inside ~1336px container ≈ 8.4 viewBox units half-width.
                // Stop the line just before the card edge so the arrow head lands on the rectangle.
                const cardHalf = 8.6;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                const endX = x - cardHalf * Math.cos(angle);
                const endY = y - cardHalf * Math.sin(angle);

                return (
                  <line
                    key={module.id}
                    x1="50"
                    y1="50"
                    x2={endX}
                    y2={endY}
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.4"
                    strokeDasharray="1.2 1"
                    strokeOpacity="0.85"
                    markerEnd="url(#compass-arrow)"
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
