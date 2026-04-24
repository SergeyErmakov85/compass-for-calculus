import { ReactNode } from "react";

interface GraphContainerProps {
  title: string;
  formula?: string;
  description?: string;
  children: ReactNode;
}

export const GraphContainer = ({ title, formula, description, children }: GraphContainerProps) => {
  return (
    <div className="graph-container">
      <div className="mb-4">
        <h4 className="font-serif text-lg font-medium text-foreground mb-1">{title}</h4>
        {formula && (
          <code className="math-formula">{formula}</code>
        )}
      </div>
      <div className="aspect-[4/3] w-full">
        {children}
      </div>
      {description && (
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
