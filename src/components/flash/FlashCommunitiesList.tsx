import React, { useState } from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { FlashCommunityCard } from './FlashCommunityCard';
import { Search, Sparkles, Zap, MessageSquare, Users, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FlashCommunitiesListProps {
  flashCommunities: FlashCommunity[];
  onSelectFlash: (flash: FlashCommunity) => void;
}

type FlashFilter = 'all' | 'event' | 'meetup' | 'discussion' | 'emergency';

export function FlashCommunitiesList({ flashCommunities, onSelectFlash }: FlashCommunitiesListProps) {
  const [activeFilter, setActiveFilter] = useState<FlashFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const activeFlash = flashCommunities.filter(f => f.status !== 'ended');
  const endedFlash = flashCommunities.filter(f => f.status === 'ended');
  
  // Get happening now (live + ending soon)
  const happeningNow = activeFlash.filter(f => f.status === 'live' || f.status === 'ending-soon');
  
  // Get emergency
  const emergencies = activeFlash.filter(f => f.triggerType === 'emergency');

  // Filter icons and colors
  const filters: { 
    id: FlashFilter; 
    label: string; 
    icon: any; 
    gradient: string;
    borderColor: string;
  }[] = [
    { 
      id: 'all', 
      label: 'All Flashes', 
      icon: Sparkles, 
      gradient: 'from-[#FFBF00] via-[#FF0088] to-[#A855F7]',
      borderColor: 'border-[#FFBF00]'
    },
    { 
      id: 'event', 
      label: 'Events', 
      icon: Zap, 
      gradient: 'from-[#00D4FF] to-[#0088FF]',
      borderColor: 'border-[#00D4FF]'
    },
    { 
      id: 'meetup', 
      label: 'Meetups', 
      icon: Users, 
      gradient: 'from-[#00FF88] to-[#00CC66]',
      borderColor: 'border-[#00FF88]'
    },
    { 
      id: 'discussion', 
      label: 'Discussions', 
      icon: MessageSquare, 
      gradient: 'from-[#B84CFF] to-[#8B3DFF]',
      borderColor: 'border-[#B84CFF]'
    },
    { 
      id: 'emergency', 
      label: 'Emergency', 
      icon: AlertCircle, 
      gradient: 'from-[#FF0055] to-[#FF3366]',
      borderColor: 'border-[#FF0055]'
    },
  ];

  const filteredFlash = activeFilter === 'all' 
    ? activeFlash 
    : activeFlash.filter(f => f.triggerType === activeFilter);

  return (
    <div className="max-w-6xl mx-auto">
      {/* OVERSIZED HERO HEADER */}
      <motion.div 
        className="mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Diagonal background accent */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#00D4FF]/20 to-[#B84CFF]/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#FF0088]/20 to-[#00FF88]/20 blur-3xl rounded-full animate-pulse" />
        
        <div className="relative">
          {/* Oversized heading with playful contrast */}
          <div className="flex items-end gap-4 mb-4">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-7xl"
            >
              ⚡
            </motion.div>
            <div>
              <div className="text-6xl font-black text-gray-900 leading-none tracking-tight mb-2">
                Flash Communities
              </div>
              <div className="text-xl text-gray-600">
                Join before they disappear forever
              </div>
            </div>
          </div>

          {/* Live count badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF0055] to-[#FF3366] text-white rounded-full shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping" />
            </div>
            <span className="text-sm font-black">{activeFlash.length} LIVE NOW</span>
          </motion.div>
        </div>
      </motion.div>

      {/* SEARCH - Playful design */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] via-[#B84CFF] to-[#FF0088] rounded-2xl opacity-20 blur-lg" />
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Search flashes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border-3 border-gray-200 rounded-2xl focus:outline-none focus:border-[#00D4FF] transition-all shadow-lg text-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* FILTER CHIPS - Neon style */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter, index) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-2xl whitespace-nowrap transition-all ${
                  isActive
                    ? 'text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 hover:scale-102 shadow-md border-2 border-gray-200'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {isActive && (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-r ${filter.gradient} rounded-2xl`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${filter.gradient} rounded-2xl blur-xl opacity-60 animate-pulse`} />
                  </>
                )}
                <Icon size={20} className="relative z-10" />
                <span className="relative z-10 font-bold">{filter.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* EMERGENCY BANNER - Highest priority */}
      {emergencies.length > 0 && (
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="relative">
            {/* Intense glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF0055] via-[#FF3366] to-[#FF0055] rounded-3xl blur-2xl opacity-40 animate-pulse" />
            
            <div className="relative bg-gradient-to-br from-[#FF0055] to-[#FF3366] rounded-3xl p-6 shadow-2xl border-2 border-[#FF0055]">
              {/* Diagonal streaks */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/40 transform -skew-x-12" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-white/40 transform -skew-x-12" />
              
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="text-5xl"
                  animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                >
                  🚨
                </motion.div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">EMERGENCY ALERT</div>
                  <div className="text-white/90">Immediate attention required</div>
                </div>
              </div>

              <div className="space-y-3">
                {emergencies.map((flash) => (
                  <FlashCommunityCard
                    key={flash.id}
                    flash={flash}
                    onClick={() => onSelectFlash(flash)}
                    variant="emergency"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* HAPPENING NOW - Event board style */}
      {happeningNow.length > 0 && (
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Angled header */}
          <div className="relative mb-6">
            <div className="absolute -left-2 top-0 w-2 h-full bg-gradient-to-b from-[#00D4FF] to-[#B84CFF] transform -skew-y-2" />
            <div className="pl-6">
              <div className="text-4xl font-black text-gray-900 mb-1">Happening Now</div>
              <div className="text-gray-600">Don{"'"}t miss out — join the action</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {happeningNow.map((flash, index) => (
              <motion.div
                key={flash.id}
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FlashCommunityCard
                  flash={flash}
                  onClick={() => onSelectFlash(flash)}
                  variant="diagonal"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ALL FLASHES - Main feed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Angled header */}
        <div className="relative mb-6">
          <div className="absolute -left-2 top-0 w-2 h-full bg-gradient-to-b from-[#FFBF00] to-[#FF0088] transform -skew-y-2" />
          <div className="pl-6">
            <div className="text-4xl font-black text-gray-900 mb-1">
              {activeFilter === 'all' ? 'All Active Flashes' : filters.find(f => f.id === activeFilter)?.label}
            </div>
            <div className="text-gray-600">{filteredFlash.length} active • Join before time runs out</div>
          </div>
        </div>

        <div className="space-y-5">
          {filteredFlash.map((flash, index) => (
            <motion.div
              key={flash.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <FlashCommunityCard
                flash={flash}
                onClick={() => onSelectFlash(flash)}
                variant="default"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ENDED FLASHES - Faded out */}
      {endedFlash.length > 0 && (
        <motion.div
          className="mt-12 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-2xl font-black text-gray-500 mb-4">Expired Flashes</div>
          <div className="space-y-3">
            {endedFlash.map((flash) => (
              <FlashCommunityCard
                key={flash.id}
                flash={flash}
                onClick={() => onSelectFlash(flash)}
                variant="ended"
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
