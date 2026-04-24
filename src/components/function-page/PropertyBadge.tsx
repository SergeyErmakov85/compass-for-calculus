interface PropertyBadgeProps {
  label: string;
  value: string;
}

export const PropertyBadge = ({ label, value }: PropertyBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
      <span className="text-xs text-muted-foreground">{label}:</span>
      <span className="text-xs font-medium text-foreground">{value}</span>
    </div>
  );
};
