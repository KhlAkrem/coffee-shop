import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', onClick, asChild = false, as = 'button' }) => {
  const Base = asChild ? motion.span : motion[as];

  const variants = {
    primary: {
      background: 'bg-gold-accent text-background-primary',
      hover: 'hover:bg-gold-light hover:text-background-primary',
    },
    outline: {
      background: 'border border-gold-accent text-gold-accent hover:bg-gold-accent/10',
      hover: 'hover:bg-gold-accent/20',
    },
    secondary: {
      background: 'bg-surface text-text-primary',
      hover: 'hover:bg-gold-accent/20 hover:text-gold-accent',
    },
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm rounded',
    medium: 'px-6 py-3 text-base rounded-md',
    large: 'px-8 py-4 text-lg rounded-lg',
  };

  const baseClasses = `transition-all duration-200 transform ${variants[variant].background} ${sizes[size]} ${variant === 'outline' ? variants[variant].hover : ''}`;
  const hoverClasses = variant === 'outline' ? variants[variant].hover : `${variants[variant].background} ${variants[variant].hover}`;

  return (
    <Button
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Button;