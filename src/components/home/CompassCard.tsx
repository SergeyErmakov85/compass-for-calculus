import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CompassCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  formula: string;
  delay?: number;
}

export const CompassCard = ({ title, description, icon: Icon, to, formula, delay = 0 }: CompassCardProps) => {
  return (
    <Link 
      to={to}
      className="compass-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
          <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
        </div>
        <code className="math-formula text-xs opacity-70 group-hover:opacity-100 transition-opacity">
          {formula}
        </code>
      </div>
      
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      <div className="mt-4 flex items-center text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Изучить</span>
        <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};
