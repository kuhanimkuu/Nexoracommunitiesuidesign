import { Search } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search communities..." }: SearchBarProps) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-14 pr-6 py-4 rounded-full bg-white border-2 border-gray-100 focus:border-[#00B686] focus:outline-none transition-all shadow-sm hover:shadow-md"
      />
      <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-[#00B686]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
