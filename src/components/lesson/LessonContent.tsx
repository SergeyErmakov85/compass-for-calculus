import { ReactNode } from "react";
import { FunctionGraph } from "@/components/graphs/FunctionGraph";

interface LessonContentProps {
  title: string;
  subtitle?: string;
  concept: string;
  graphDescription: string;
  formula?: string;
  children?: ReactNode;
  graphProps: React.ComponentProps<typeof FunctionGraph>;
}

export const LessonContent = ({
  title,
  subtitle,
  concept,
  graphDescription,
  formula,
  children,
  graphProps,
}: LessonContentProps) => {
  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        )}
      </header>

      {/* Main Graph */}
      <div className="my-8">
        <FunctionGraph {...graphProps} />
      </div>

      {/* Formula if present */}
      {formula && (
        <div className="flex justify-center">
          <div className="math-formula">
            {formula}
          </div>
        </div>
      )}

      {/* Concept explanation */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-card rounded-xl border border-border">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Что показывает график
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {graphDescription}
          </p>
        </div>

        <div className="p-6 bg-card rounded-xl border border-border">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Ключевое понятие
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {concept}
          </p>
        </div>
      </div>

      {/* Additional content */}
      {children && (
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      )}
    </article>
  );
};
