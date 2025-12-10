import React, { useState } from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { ArrowLeft, Users, Zap, MessageSquare, Bell, Grid3x3, Sparkles, AlertCircle } from 'lucide-react';
import { FlashDiscussionsTab } from './tabs/FlashDiscussionsTab';
import { FlashNoticesTab } from './tabs/FlashNoticesTab';
import { FlashMembersTab } from './tabs/FlashMembersTab';
import { FlashSubcommunitiesTab } from './tabs/FlashSubcommunitiesTab';
import { FlashTimer } from './FlashTimer';
import { motion } from 'motion/react';

interface FlashCommunityDetailProps {
  flash: FlashCommunity;
  onBack: () => void;
}

type TabType = 'posts' | 'members' | 'notices';

export function FlashCommunityDetail({ flash, onBack }: FlashCommunityDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('posts');

  const getTriggerConfig = () => {
    const configs = {
      event: {
        icon: Zap,
        label: 'EVENT',
        gradient: 'from-[#00D4FF] to-[#0088FF]',
        bgColor: 'bg-[#00D4FF]/10',
        textColor: 'text-[#0088FF]',
        glow: 'shadow-[0_0_60px_rgba(0,212,255,0.5)]'
      },
      meetup: {
        icon: Users,
        label: 'MEETUP',
        gradient: 'from-[#00FF88] to-[#00CC66]',
        bgColor: 'bg-[#00FF88]/10',
        textColor: 'text-[#00CC66]',
        glow: 'shadow-[0_0_60px_rgba(0,255,136,0.5)]'
      },
      discussion: {
        icon: MessageSquare,
        label: 'DISCUSSION',
        gradient: 'from-[#B84CFF] to-[#8B3DFF]',
        bgColor: 'bg-[#B84CFF]/10',
        textColor: 'text-[#8B3DFF]',
        glow: 'shadow-[0_0_60px_rgba(184,76,255,0.5)]'
      },
      emergency: {
        icon: AlertCircle,
        label: 'EMERGENCY',
        gradient: 'from-[#FF0055] to-[#FF3366]',
        bgColor: 'bg-[#FF0055]/10',
        textColor: 'text-[#FF0055]',
        glow: 'shadow-[0_0_60px_rgba(255,0,85,0.5)]'
      }
    };
    return configs[flash.triggerType];
  };

  const config = getTriggerConfig();
  const TriggerIcon = config.icon;
  const isEnded = flash.status === 'ended';

  const tabs = [
    { id: 'posts', label: 'Posts', icon: MessageSquare },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'notices', label: 'Notices', icon: Bell },
  ] as const;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back button */}
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group"
        whileHover={{ x: -4 }}
      >
        <ArrowLeft size={20} className="group-hover:animate-bounce-subtle" />
        <span className="font-semibold">Back to Flashes</span>
      </motion.button>

      {/* HERO COUNTDOWN SECTION */}
      <motion.div
        className="relative mb-8 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer glow */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${config.gradient} rounded-[40px] blur-3xl opacity-30 ${!isEnded && 'animate-pulse'}`} />

        {/* Main hero card */}
        <div className="relative bg-white rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
          {/* Diagonal background patterns */}
          <div className={`absolute top-0 right-0 w-full h-full ${config.bgColor} transform skew-x-12 translate-x-1/2 opacity-30`} />
          <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${config.gradient}`} />
          <div className={`absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r ${config.gradient}`} />

          {/* Diagonal streaks animation */}
          {!isEnded && flash.status === 'live' && (
            <>
              <motion.div
                className={`absolute top-0 left-0 w-32 h-1 bg-gradient-to-r ${config.gradient} opacity-60`}
                animate={{ x: [-100, 1000], rotate: 45 }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.div
                className={`absolute bottom-0 right-0 w-40 h-1 bg-gradient-to-r ${config.gradient} opacity-60`}
                animate={{ x: [1000, -100], rotate: -45 }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 0.5 }}
              />
            </>
          )}

          <div className="relative p-10">
            <div className="flex items-start justify-between gap-8 mb-8">
              {/* Left: Icon + Info */}
              <div className="flex gap-6 flex-1">
                {/* Massive icon */}
                <motion.div
                  className="text-8xl"
                  animate={!isEnded && flash.status === 'live' ? { 
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.05, 1] 
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  {flash.icon}
                </motion.div>

                <div className="flex-1">
                  {/* Trigger badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${config.gradient} text-white mb-4 shadow-lg`}>
                    <TriggerIcon size={18} className="animate-neon-pulse" />
                    <span className="text-sm font-black tracking-widest">{config.label}</span>
                  </div>

                  {/* Title - OVERSIZED */}
                  <h1 className="text-5xl font-black text-gray-900 mb-4 leading-tight">
                    {flash.name}
                  </h1>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-6">
                    {flash.description}
                  </p>

                  {/* Participants */}
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          src={`https://i.pravatar.cc/150?img=${30 + i}`}
                          alt=""
                          className="w-11 h-11 rounded-full border-3 border-white object-cover hover:scale-110 transition-transform"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-2xl font-black text-gray-900">{flash.participantCount}</div>
                      <div className="text-sm text-gray-500 font-medium">members active</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Massive Timer */}
              <div className="flex flex-col items-center gap-4">
                <FlashTimer 
                  endsAt={flash.endsAt} 
                  variant="circular" 
                  triggerType={flash.triggerType}
                  size="xl"
                />
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Time Left</div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            {flash.status === 'live' && (
              <motion.div
                className="flex items-center justify-center gap-3 py-3 px-6 bg-gradient-to-r from-[#FF0055] to-[#FF3366] rounded-2xl"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping" />
                </div>
                <span className="text-white font-black text-lg tracking-wider">LIVE RIGHT NOW</span>
              </motion.div>
            )}

            {flash.status === 'ending-soon' && (
              <motion.div
                className="flex items-center justify-center gap-3 py-3 px-6 bg-gradient-to-r from-[#FFBF00] to-[#FF6B00] rounded-2xl"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles size={20} className="text-white" />
                <span className="text-white font-black text-lg tracking-wider">ENDING SOON - JOIN NOW!</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* TABS */}
      <div className="mb-6">
        <div className="bg-white rounded-2xl p-2 shadow-lg border-2 border-gray-100">
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg`
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={20} />
                  <span className="font-bold">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* TAB CONTENT */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 min-h-[400px]"
      >
        {activeTab === 'posts' && <FlashDiscussionsTab />}
        {activeTab === 'members' && <FlashMembersTab />}
        {activeTab === 'notices' && <FlashNoticesTab />}
      </motion.div>

      {/* FLOATING JOIN BUTTON */}
      {!flash.joined && !isEnded && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
        >
          <motion.button
            className={`relative px-8 py-4 rounded-full bg-gradient-to-r ${config.gradient} text-white font-black text-lg shadow-2xl overflow-hidden group ${config.glow}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                config.glow,
                config.glow.replace('0.5', '0.8'),
                config.glow
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            
            <span className="relative flex items-center gap-3">
              <Sparkles size={24} className="animate-bounce-subtle" />
              Join This Flash
              <Zap size={24} className="animate-neon-pulse" />
            </span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
