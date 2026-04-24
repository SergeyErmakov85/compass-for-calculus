import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ScreenNavigationProps {
  currentScreen: number;
  totalScreens: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome: () => void;
  className?: string;
}

export const ScreenNavigation = ({
  currentScreen,
  totalScreens,
  onPrevious,
  onNext,
  onHome,
  className,
}: ScreenNavigationProps) => {
  const canGoPrevious = currentScreen > 0;
  const canGoNext = currentScreen < totalScreens - 1;

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={onHome}
        className="text-muted-foreground hover:text-foreground"
      >
        <Home className="w-5 h-5" />
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalScreens }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'screen-indicator',
              index === currentScreen && 'active',
              index < currentScreen && 'completed',
              index > currentScreen && 'pending'
            )}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="text-muted-foreground hover:text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={!canGoNext}
          className="text-muted-foreground hover:text-foreground disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
