import React from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { Users, Sparkles, Zap, MessageSquare, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { FlashTimer } from './FlashTimer';

interface FlashCommunityCardProps {
  flash: FlashCommunity;
  onClick: () => void;
  variant?: 'default' | 'diagonal' | 'emergency' | 'ended';
}

export function FlashCommunityCard({ flash, onClick, variant = 'default' }: FlashCommunityCardProps) {
  const getTriggerConfig = () => {
    const configs = {
      event: {
        icon: Zap,
        label: 'EVENT',
        gradient: 'from-[#00D4FF] to-[#0088FF]',
        bgColor: 'bg-[#00D4FF]/10',
        textColor: 'text-[#0088FF]',
        borderColor: 'border-[#00D4FF]',
        glow: 'shadow-[0_0_40px_rgba(0,212,255,0.4)]'
      },
      meetup: {
        icon: Users,
        label: 'MEETUP',
        gradient: 'from-[#00FF88] to-[#00CC66]',
        bgColor: 'bg-[#00FF88]/10',
        textColor: 'text-[#00CC66]',
        borderColor: 'border-[#00FF88]',
        glow: 'shadow-[0_0_40px_rgba(0,255,136,0.4)]'
      },
      discussion: {
        icon: MessageSquare,
        label: 'DISCUSSION',
        gradient: 'from-[#B84CFF] to-[#8B3DFF]',
        bgColor: 'bg-[#B84CFF]/10',
        textColor: 'text-[#8B3DFF]',
        borderColor: 'border-[#B84CFF]',
        glow: 'shadow-[0_0_40px_rgba(184,76,255,0.4)]'
      },
      emergency: {
        icon: AlertCircle,
        label: 'EMERGENCY',
        gradient: 'from-[#FF0055] to-[#FF3366]',
        bgColor: 'bg-[#FF0055]/10',
        textColor: 'text-[#FF0055]',
        borderColor: 'border-[#FF0055]',
        glow: 'shadow-[0_0_40px_rgba(255,0,85,0.4)]'
      }
    };
    return configs[flash.triggerType];
  };

  const config = getTriggerConfig();
  const TriggerIcon = config.icon;
  const isEnded = flash.status === 'ended';
  
  // Mock avatars
  const mockAvatars = [
    'https://i.pravatar.cc/150?img=21',
    'https://i.pravatar.cc/150?img=22',
    'https://i.pravatar.cc/150?img=23',
  ];

  // Emergency variant - compact inline
  if (variant === 'emergency') {
    return (
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 cursor-pointer border-2 border-white/30"
        onClick={onClick}
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-4">
          <div className="text-4xl">{flash.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="text-xl font-black text-white mb-1">{flash.name}</div>
            <div className="text-sm text-white/80 line-clamp-1">{flash.description}</div>
          </div>
          <FlashTimer 
            endsAt={flash.endsAt} 
            variant="circular" 
            triggerType={flash.triggerType}
            size="md"
          />
        </div>
      </motion.div>
    );
  }

  // Ended variant - minimal
  if (variant === 'ended' || isEnded) {
    return (
      <motion.div
        className="bg-white/50 rounded-2xl p-5 cursor-pointer border-2 border-gray-200"
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl opacity-50">{flash.icon}</div>
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-500 mb-1">{flash.name}</div>
            <div className="text-sm text-gray-400">Flash ended</div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Diagonal variant - angled, playful
  if (variant === 'diagonal') {
    return (
      <motion.div
        className="group relative cursor-pointer"
        onClick={onClick}
        whileHover={{ scale: 1.03, rotate: 1 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${config.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
        
        {/* Main card */}
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
          {/* Diagonal accent stripe */}
          <div className={`absolute top-0 right-0 w-32 h-full bg-gradient-to-br ${config.gradient} opacity-10 transform skew-x-12 translate-x-8`} />
          
          {/* Diagonal top accent */}
          <div className={`h-2 bg-gradient-to-r ${config.gradient} transform -skew-x-12`} />

          <div className="p-6 relative">
            {/* Trigger badge - angled */}
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${config.gradient} text-white mb-4 shadow-lg`}
              whileHover={{ rotate: -2 }}
            >
              <TriggerIcon size={16} className="animate-neon-pulse" />
              <span className="text-xs font-black tracking-wider">{config.label}</span>
            </motion.div>

            {/* Content */}
            <div className="mb-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight">
                    {flash.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {flash.description}
                  </p>
                </div>
                <div className="text-5xl transform group-hover:scale-110 transition-transform">
                  {flash.icon}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4">
              {/* Timer */}
              <FlashTimer 
                endsAt={flash.endsAt} 
                variant="circular" 
                triggerType={flash.triggerType}
                size="sm"
              />

              {/* Participants */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {mockAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700">
                  {flash.participantCount}
                </span>
              </div>

              {/* Join button */}
              {!flash.joined && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${config.gradient} text-white font-bold shadow-lg`}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join
                </motion.button>
              )}
              
              {flash.joined && (
                <div className="px-4 py-2 rounded-xl bg-gray-900 text-white font-bold text-sm">
                  Joined ✓
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant - asymmetric, layered
  return (
    <motion.div
      className="group relative cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Outer glow */}
      {flash.status === 'live' && (
        <div className={`absolute -inset-2 bg-gradient-to-r ${config.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse`} />
      )}

      {/* Main card container */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
        {/* Angled background accent */}
        <div className={`absolute top-0 right-0 w-80 h-full ${config.bgColor} transform skew-x-6 translate-x-20 opacity-50`} />
        
        {/* Diagonal streak decorations */}
        <motion.div
          className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${config.gradient}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Status indicator - live pulse */}
        {flash.status === 'live' && (
          <motion.div
            className="absolute top-6 right-6"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#FF0055] to-[#FF3366] text-white rounded-full text-xs font-black">
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              LIVE
            </div>
          </motion.div>
        )}

        <div className="relative p-7">
          <div className="flex gap-6">
            {/* Left: Icon + Timer */}
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="text-6xl"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {flash.icon}
              </motion.div>
              
              <FlashTimer 
                endsAt={flash.endsAt} 
                variant="circular" 
                triggerType={flash.triggerType}
                size="md"
              />
            </div>

            {/* Right: Content */}
            <div className="flex-1 min-w-0">
              {/* Trigger badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${config.bgColor} ${config.textColor} mb-3 border-2 ${config.borderColor}`}>
                <TriggerIcon size={14} />
                <span className="text-xs font-black tracking-wide">{config.label}</span>
              </div>

              {/* Title - oversized */}
              <h3 className="text-3xl font-black text-gray-900 mb-3 leading-tight">
                {flash.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {flash.description}
              </p>

              {/* Footer - participants + action */}
              <div className="flex items-center justify-between gap-4">
                {/* Participant count with avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {mockAvatars.map((avatar, idx) => (
                      <motion.img
                        key={idx}
                        src={avatar}
                        alt=""
                        className="w-9 h-9 rounded-full border-3 border-white object-cover"
                        whileHover={{ scale: 1.3, zIndex: 10 }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">{flash.participantCount}</div>
                    <div className="text-xs text-gray-500 font-medium">live now</div>
                  </div>
                </div>

                {/* Action button */}
                {!flash.joined ? (
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className={`relative px-6 py-3 rounded-2xl bg-gradient-to-r ${config.gradient} text-white font-black shadow-xl overflow-hidden group/btn`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    <span className="relative flex items-center gap-2">
                      <Sparkles size={18} />
                      Join Flash
                    </span>
                  </motion.button>
                ) : (
                  <div className="px-5 py-2.5 rounded-2xl bg-gray-900 text-white font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    You{"'"}re in
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom angled accent */}
        <motion.div
          className={`h-2 bg-gradient-to-r ${config.gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
