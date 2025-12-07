import { motion } from 'motion/react';

interface FilterChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function FilterChip({ label, selected, onClick, icon }: FilterChipProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full transition-all duration-200
        ${selected 
          ? 'bg-gradient-to-r from-[#00B686] to-[#3DD2A8] text-white shadow-md' 
          : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-[#00B686]'
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={selected ? { 
        boxShadow: '0 0 15px rgba(0, 182, 134, 0.3)' 
      } : {}}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
    </motion.button>
  );
}
