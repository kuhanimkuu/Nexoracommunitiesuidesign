import React, { useState, useEffect } from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { Users, Zap, Clock, Flame, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface FlashCommunityCardProps {
  flash: FlashCommunity;
  onClick: () => void;
  variant?: 'default' | 'compact';
}

export function FlashCommunityCard({ flash, onClick, variant = 'default' }: FlashCommunityCardProps) {
  const [timeLeft, setTimeLeft] = useState('');
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const end = flash.endsAt.getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('Ended');
        setProgress(0);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m`);
      } else if (minutes > 0) {
        setTimeLeft(`${minutes}m ${seconds}s`);
      } else {
        setTimeLeft(`${seconds}s`);
      }

      // Calculate progress (assuming 24h max duration)
      const maxDuration = 24 * 60 * 60 * 1000;
      const elapsed = maxDuration - distance;
      setProgress(Math.max(0, Math.min(100, ((maxDuration - distance) / maxDuration) * 100)));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [flash.endsAt]);

  const getStatusConfig = () => {
    switch (flash.status) {
      case 'live':
        return {
          badge: (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full text-xs shadow-lg"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              <span className="font-semibold">LIVE</span>
            </motion.div>
          ),
          borderGlow: 'shadow-[0_0_30px_rgba(255,0,110,0.5)]',
          gradient: 'from-red-500 via-pink-500 to-purple-600',
        };
      case 'ending-soon':
        return {
          badge: (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs shadow-lg animate-pulse">
              <Flame size={12} />
              <span className="font-semibold">ENDING SOON</span>
            </div>
          ),
          borderGlow: 'shadow-[0_0_25px_rgba(255,107,53,0.4)]',
          gradient: 'from-orange-500 via-red-500 to-pink-500',
        };
      case 'active':
        return {
          badge: (
            <div className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs shadow-md">
              <span className="font-semibold">ACTIVE</span>
            </div>
          ),
          borderGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
          gradient: 'from-emerald-500 to-teal-500',
        };
      default:
        return {
          badge: (
            <div className="px-3 py-1.5 bg-gray-400 text-white rounded-full text-xs">
              <span>ENDED</span>
            </div>
          ),
          borderGlow: '',
          gradient: 'from-gray-400 to-gray-500',
        };
    }
  };

  const statusConfig = getStatusConfig();
  const isEnded = flash.status === 'ended';
  
  // Mock avatars for participant cluster
  const mockAvatars = [
    'https://i.pravatar.cc/150?img=11',
    'https://i.pravatar.cc/150?img=12',
    'https://i.pravatar.cc/150?img=13',
    'https://i.pravatar.cc/150?img=14',
  ];

  // Compact variant for discovery sections
  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={{ scale: isEnded ? 1 : 1.03, y: isEnded ? 0 : -4 }}
        whileTap={{ scale: isEnded ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group cursor-pointer"
        onClick={onClick}
      >
        <div className={`relative rounded-2xl p-5 transition-all duration-300 overflow-hidden ${
          isEnded
            ? 'bg-white border-2 border-gray-300'
            : `bg-white border-2 border-transparent ${statusConfig.borderGlow} hover:shadow-2xl`
        }`}>
          {/* Electric Background Gradient */}
          {!isEnded && (
            <div className={`absolute inset-0 bg-gradient-to-br ${flash.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
          )}

          {/* Animated glow for live events */}
          {flash.status === 'live' && (
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-pink-500/20 to-purple-600/20 animate-pulse" />
          )}

          <div className="relative flex gap-4">
            {/* Icon with countdown ring */}
            <div className="flex-shrink-0 relative">
              {!isEnded && (
                <svg className="absolute -inset-1 w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#FF006E" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                isEnded ? 'bg-gray-200' : `bg-gradient-to-br ${flash.gradient} shadow-lg`
              }`}>
                {flash.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {statusConfig.badge}
                {flash.joined && !isEnded && (
                  <div className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                    Joined
                  </div>
                )}
              </div>

              <h4 className={`mb-2 ${isEnded ? 'text-gray-600' : 'text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:' + statusConfig.gradient} transition-all`}>
                {flash.name}
              </h4>

              <p className={`text-sm mb-3 line-clamp-2 ${isEnded ? 'text-gray-500' : 'text-gray-600'}`}>
                {flash.description}
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {/* Countdown */}
                {!isEnded && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r ${statusConfig.gradient} text-white shadow-md`}
                  >
                    <Clock size={14} />
                    <span className="font-semibold">{timeLeft}</span>
                  </motion.div>
                )}

                {/* Participants */}
                {!isEnded && (
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {mockAvatars.slice(0, 3).map((avatar, idx) => (
                        <img
                          key={idx}
                          src={avatar}
                          alt=""
                          className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      {flash.participantCount} live
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default full card variant
  return (
    <motion.div
      whileHover={{ scale: isEnded ? 1 : 1.01, y: isEnded ? 0 : -3 }}
      whileTap={{ scale: isEnded ? 1 : 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative rounded-2xl p-6 transition-all duration-300 overflow-hidden ${
        isEnded
          ? 'bg-white border-2 border-gray-300'
          : `bg-white border-2 border-transparent ${statusConfig.borderGlow} hover:shadow-2xl`
      }`}>
        {/* Electric Background Gradient */}
        {!isEnded && (
          <div className={`absolute inset-0 bg-gradient-to-br ${flash.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
        )}

        {/* Animated streaks for live/ending-soon */}
        {(flash.status === 'live' || flash.status === 'ending-soon') && (
          <>
            <motion.div
              animate={{ x: [-100, 500], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            />
            <motion.div
              animate={{ x: [500, -100], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute bottom-0 right-0 w-40 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
            />
          </>
        )}

        <div className="relative flex gap-5">
          {/* Icon with circular countdown progress */}
          <div className="flex-shrink-0 relative">
            {!isEnded && (
              <svg className="absolute -inset-2 w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="url(#gradient-full)"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  animate={flash.status === 'live' ? { rotate: 360 } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient-full" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#FF006E" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            
            <motion.div
              whileHover={{ rotate: isEnded ? 0 : 5 }}
              className={`relative w-20 h-20 rounded-3xl flex items-center justify-center text-4xl ${
                isEnded ? 'bg-gray-200' : `bg-gradient-to-br ${flash.gradient} shadow-xl`
              }`}
            >
              {flash.icon}
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {statusConfig.badge}
              {flash.joined && !isEnded && (
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                  Joined
                </div>
              )}
            </div>

            <h3 className={`mb-2 ${isEnded ? 'text-gray-600' : 'text-gray-900'}`}>
              {flash.name}
            </h3>

            <p className={`text-sm mb-4 line-clamp-2 ${isEnded ? 'text-gray-500' : 'text-gray-600'}`}>
              {flash.description}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              {/* Electric Countdown Timer */}
              {!isEnded && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${statusConfig.gradient} text-white shadow-lg`}
                >
                  <Clock size={18} />
                  <span className="font-bold">{timeLeft}</span>
                </motion.div>
              )}

              {/* Participant Avatar Cluster */}
              {flash.status !== 'ended' && (
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {mockAvatars.map((avatar, idx) => (
                      <motion.img
                        key={idx}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        src={avatar}
                        alt=""
                        className="w-9 h-9 rounded-full border-3 border-white object-cover shadow-md"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700">
                    <Users size={18} />
                    <span className="font-semibold">{flash.participantCount}</span>
                    <span className="text-gray-500 text-sm">live</span>
                  </div>
                </div>
              )}

              {/* Join Flash Button */}
              {!isEnded && !flash.joined && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`ml-auto px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r ${flash.gradient} hover:shadow-xl transition-all flex items-center gap-2`}
                >
                  <Zap size={16} />
                  <span>Join Flash</span>
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Electric border pulse effect */}
        {flash.status === 'live' && (
          <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none" />
        )}
      </div>
    </motion.div>
  );
}
