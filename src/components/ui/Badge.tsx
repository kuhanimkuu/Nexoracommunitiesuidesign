import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  icon?: ReactNode;
  pulse?: boolean;
}

export function Badge({ children, variant = 'default', icon, pulse = false }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-[#CFFFEA] text-[#00B686]',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700'
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${variants[variant]}`}
      animate={pulse ? {
        scale: [1, 1.05, 1],
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {icon}
      <span className="text-sm">{children}</span>
    </motion.div>
  );
}
