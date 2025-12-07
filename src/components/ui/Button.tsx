import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  icon 
}: ButtonProps) {
  const baseStyles = 'rounded-full inline-flex items-center justify-center gap-2 transition-all duration-200';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#00B686] to-[#3DD2A8] text-white hover:shadow-[0_0_20px_rgba(0,182,134,0.4)] hover:scale-105',
    secondary: 'bg-white border-2 border-[#00B686] text-[#00B686] hover:bg-[#CFFFEA]',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };

  return (
    <motion.button
      whileHover={{ scale: variant !== 'ghost' ? 1.05 : 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </motion.button>
  );
}
