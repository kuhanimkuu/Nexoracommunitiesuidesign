import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface FlashTimerProps {
  endsAt: Date;
  variant?: 'circular' | 'bar' | 'compact';
  triggerType?: 'event' | 'meetup' | 'discussion' | 'emergency';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function FlashTimer({ 
  endsAt, 
  variant = 'circular', 
  triggerType = 'event',
  size = 'md'
}: FlashTimerProps) {
  const [timeLeft, setTimeLeft] = useState('');
  const [progress, setProgress] = useState(100);
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const end = endsAt.getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('ENDED');
        setProgress(0);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Set urgent if less than 1 hour
      setIsUrgent(hours === 0);

      if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m`);
      } else if (minutes > 0) {
        setTimeLeft(`${minutes}m ${seconds}s`);
      } else {
        setTimeLeft(`${seconds}s`);
      }

      // Calculate progress
      const maxDuration = 24 * 60 * 60 * 1000;
      setProgress(Math.max(0, Math.min(100, (distance / maxDuration) * 100)));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  const getTriggerColors = () => {
    const colors = {
      event: {
        primary: '#00D4FF',
        secondary: '#0088FF',
        gradient: 'from-[#00D4FF] to-[#0088FF]',
        glow: 'shadow-[0_0_40px_rgba(0,212,255,0.6)]'
      },
      meetup: {
        primary: '#00FF88',
        secondary: '#00CC66',
        gradient: 'from-[#00FF88] to-[#00CC66]',
        glow: 'shadow-[0_0_40px_rgba(0,255,136,0.6)]'
      },
      discussion: {
        primary: '#B84CFF',
        secondary: '#8B3DFF',
        gradient: 'from-[#B84CFF] to-[#8B3DFF]',
        glow: 'shadow-[0_0_40px_rgba(184,76,255,0.6)]'
      },
      emergency: {
        primary: '#FF0055',
        secondary: '#FF3366',
        gradient: 'from-[#FF0055] to-[#FF3366]',
        glow: 'shadow-[0_0_40px_rgba(255,0,85,0.6)]'
      }
    };
    return colors[triggerType];
  };

  const colors = getTriggerColors();

  const sizeClasses = {
    sm: { container: 'w-16 h-16', text: 'text-xs', svg: 56, radius: 24 },
    md: { container: 'w-24 h-24', text: 'text-sm', svg: 96, radius: 42 },
    lg: { container: 'w-32 h-32', text: 'text-lg', svg: 128, radius: 58 },
    xl: { container: 'w-40 h-40', text: 'text-2xl', svg: 160, radius: 74 }
  };

  const sizeConfig = sizeClasses[size];

  if (variant === 'circular') {
    return (
      <motion.div
        className="relative inline-flex items-center justify-center"
        animate={isUrgent ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        {/* Rotating glow effect */}
        {isUrgent && (
          <div className={`absolute inset-0 ${sizeConfig.container} ${colors.glow} rounded-full blur-xl opacity-60 animate-rotate-glow`} />
        )}

        {/* SVG Progress Ring */}
        <svg 
          className="absolute -rotate-90" 
          width={sizeConfig.svg} 
          height={sizeConfig.svg}
          viewBox={`0 0 ${sizeConfig.svg} ${sizeConfig.svg}`}
        >
          {/* Background circle */}
          <circle
            cx={sizeConfig.svg / 2}
            cy={sizeConfig.svg / 2}
            r={sizeConfig.radius}
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="6"
          />
          {/* Progress circle */}
          <motion.circle
            cx={sizeConfig.svg / 2}
            cy={sizeConfig.svg / 2}
            r={sizeConfig.radius}
            fill="none"
            stroke={`url(#gradient-${triggerType})`}
            strokeWidth="6"
            strokeDasharray={`${2 * Math.PI * sizeConfig.radius}`}
            strokeDashoffset={`${2 * Math.PI * sizeConfig.radius * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id={`gradient-${triggerType}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
          </defs>
        </svg>

        {/* Timer text */}
        <div className={`relative ${sizeConfig.container} flex items-center justify-center`}>
          <motion.div
            className={`${sizeConfig.text} font-black text-gray-900 text-center leading-none`}
            animate={isUrgent ? { color: [colors.primary, colors.secondary, colors.primary] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {timeLeft}
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'bar') {
    return (
      <div className="relative w-full overflow-hidden rounded-full h-3 bg-black/10">
        {/* Progress bar with gradient */}
        <motion.div
          className={`h-full bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}
          style={{ width: `${progress}%` }}
          animate={isUrgent ? { opacity: [0.8, 1, 0.8] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
          />
        </motion.div>

        {/* Timer text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-black text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
            {timeLeft} left
          </span>
        </div>
      </div>
    );
  }

  // Compact variant - inline badge style
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.gradient} ${isUrgent ? colors.glow : ''}`}
      animate={isUrgent ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.8, repeat: Infinity }}
    >
      {/* Pulse dot */}
      <div className="relative">
        <div className="w-2 h-2 bg-white rounded-full" />
        {isUrgent && <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping" />}
      </div>

      {/* Time text */}
      <span className="text-sm font-black text-white">
        {timeLeft}
      </span>
    </motion.div>
  );
}
