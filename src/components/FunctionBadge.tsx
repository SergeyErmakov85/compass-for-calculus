import { cn } from '@/lib/utils';

interface FunctionBadgeProps {
  type: 'function1' | 'function2' | 'both';
  className?: string;
}

export const FunctionBadge = ({ type, className }: FunctionBadgeProps) => {
  if (type === 'both') {
    return (
      <div className={cn('flex gap-2', className)}>
        <span className="function-1-badge">
          <span className="mr-1">f</span> Состояние
        </span>
        <span className="function-2-badge">
          <span className="mr-1">f′</span> Скорость
        </span>
      </div>
    );
  }

  if (type === 'function1') {
    return (
      <span className={cn('function-1-badge', className)}>
        <span className="mr-1">f</span> Function (1) — Состояние
      </span>
    );
  }

  return (
    <span className={cn('function-2-badge', className)}>
      <span className="mr-1">f′</span> Function (2) — Скорость
    </span>
  );
};
