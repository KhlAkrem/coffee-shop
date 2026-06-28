const Badge = ({ variant = 'default', children, className = '' }) => {
  const variants = {
    default: 'bg-surface/50 text-text-muted',
    primary: 'bg-gold-accent/20 text-gold-accent',
    secondary: 'bg-text-secondary/20 text-text-secondary',
    success: 'bg-success/20 text-success',
    error: 'bg-error/20 text-error',
    gold: 'bg-gold-accent/20 text-gold-accent',
    outline: 'border border-gold-accent/20 text-gold-accent',
    vegan: 'bg-green-100 text-green-800',
    bestseller: 'bg-gold-accent text-background-primary',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;