import { motion } from 'motion/react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away';
  glow?: boolean;
}

export function Avatar({ src, alt, size = 'md', status, glow = false }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500'
  };

  const initials = alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="relative inline-block">
      <motion.div
        className={`
          ${sizes[size]} rounded-full overflow-hidden 
          ${glow ? 'ring-4 ring-[#00B686]/20 shadow-[0_0_15px_rgba(0,182,134,0.3)]' : ''}
        `}
        whileHover={{ scale: 1.05 }}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00B686] to-[#3DD2A8] flex items-center justify-center text-white">
            {initials}
          </div>
        )}
      </motion.div>
      {status && (
        <div className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[status]} rounded-full border-2 border-white`} />
      )}
    </div>
  );
}
