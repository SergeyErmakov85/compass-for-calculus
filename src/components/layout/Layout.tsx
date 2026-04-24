import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <footer className="border-t border-border bg-card/50 py-8 mt-16">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Calculus Compass — курс математического анализа
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Анализ через форму и график
          </p>
        </div>
      </footer>
    </div>
  );
};
