import { Compass } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Compass className="h-5 w-5" />
            <span className="font-serif text-sm">Calculus Compass</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Образовательный проект по математическому анализу
          </p>
        </div>
      </div>
    </footer>
  );
};
