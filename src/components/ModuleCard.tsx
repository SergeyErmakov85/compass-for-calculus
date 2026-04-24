import { Lock, Check, ChevronRight } from 'lucide-react';
import { Module } from '@/types/course';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
  isActive?: boolean;
}

export const ModuleCard = ({ module, onClick, isActive }: ModuleCardProps) => {
  const isLocked = !module.isUnlocked;
  
  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={cn(
        'module-card w-full text-left group',
        isLocked && 'opacity-60 cursor-not-allowed',
        isActive && 'border-accent ring-2 ring-accent/20'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              {module.id}
            </span>
            {module.progress === 100 && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground">
                <Check className="w-3 h-3" />
              </span>
            )}
          </div>
          
          <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {module.title}
          </h3>
          
          <p className="text-sm text-accent font-medium mb-2">
            {module.subtitle}
          </p>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {module.description}
          </p>
          
          {module.progress > 0 && module.progress < 100 && (
            <div className="mt-4">
              <div className="progress-bar">
                <div 
                  className="progress-bar-fill"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {module.progress}% завершено
              </p>
            </div>
          )}
        </div>
        
        <div className="flex-shrink-0">
          {isLocked ? (
            <Lock className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          )}
        </div>
      </div>
      
      {module.screens.length > 0 && !isLocked && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {module.screens.length} экранов
          </p>
        </div>
      )}
    </button>
  );
};
