import { cn } from '@/lib/utils';

interface CompassIconProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const CompassIcon = ({ className, size = 48, animated = false }: CompassIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(animated && 'animate-pulse-soft', className)}
    >
      {/* Outer ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner ring */}
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="hsl(var(--border))"
        strokeWidth="1"
        fill="hsl(var(--card))"
      />
      
      {/* Cardinal points */}
      <text x="24" y="10" textAnchor="middle" fill="hsl(var(--primary))" fontSize="6" fontWeight="600">N</text>
      <text x="24" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">S</text>
      <text x="6" y="26" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">W</text>
      <text x="42" y="26" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">E</text>
      
      {/* Compass needle - North (gold) */}
      <polygon
        points="24,12 21,24 24,22 27,24"
        fill="hsl(var(--accent))"
      />
      
      {/* Compass needle - South (blue) */}
      <polygon
        points="24,36 27,24 24,26 21,24"
        fill="hsl(var(--primary))"
      />
      
      {/* Center dot */}
      <circle
        cx="24"
        cy="24"
        r="2"
        fill="hsl(var(--accent))"
      />
    </svg>
  );
};
