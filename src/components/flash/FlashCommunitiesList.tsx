import React, { useState } from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { FlashCommunityCard } from './FlashCommunityCard';
import { Search, Zap, Clock, Flame, AlertCircle, MessageCircle, Users, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface FlashCommunitiesListProps {
  flashCommunities: FlashCommunity[];
  onSelectFlash: (flash: FlashCommunity) => void;
}

type FlashFilter = 'all' | 'expiring-soon' | 'under-1h' | 'event' | 'meetup' | 'discussion' | 'emergency';

export function FlashCommunitiesList({ flashCommunities, onSelectFlash }: FlashCommunitiesListProps) {
  const [activeFilter, setActiveFilter] = useState<FlashFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const activeFlash = flashCommunities.filter(f => f.status !== 'ended');
  const endedFlash = flashCommunities.filter(f => f.status === 'ended');
  
  // Get happening now and expiring soon
  const happeningNow = activeFlash.filter(f => f.status === 'live');
  const expiringSoon = activeFlash.filter(f => f.status === 'ending-soon');

  const filters: { id: FlashFilter; label: string; icon?: any; color: string }[] = [
    { id: 'all', label: 'All', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { id: 'expiring-soon', label: 'Expiring Soon', icon: Clock, color: 'from-red-500 to-pink-500' },
    { id: 'under-1h', label: '< 1 Hour', icon: Flame, color: 'from-orange-500 to-red-600' },
    { id: 'event', label: 'Event', icon: Calendar, color: 'from-purple-500 to-indigo-500' },
    { id: 'meetup', label: 'Meetup', icon: Users, color: 'from-teal-500 to-cyan-500' },
    { id: 'discussion', label: 'Discussion', icon: MessageCircle, color: 'from-blue-500 to-indigo-500' },
    { id: 'emergency', label: 'Emergency', icon: AlertCircle, color: 'from-red-600 to-rose-600' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Electric Header */}
      <div className="mb-6 animate-in relative">
        <div className="absolute -top-2 -left-2 w-20 h-20 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative flex items-center gap-3 mb-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 flex items-center justify-center shadow-lg"
          >
            <Zap className="text-white" size={24} />
          </motion.div>
          <div>
            <h2 className="text-gray-900">Flash Communities</h2>
            <p className="text-gray-600">Join limited-time events happening right now</p>
          </div>
        </div>
      </div>

      {/* Electric Search Bar */}
      <div className="mb-6 animate-in">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search flash events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-yellow-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all shadow-md hover:shadow-lg focus:shadow-xl"
          />
        </div>
      </div>

      {/* Hyperactive Filter Chips */}
      <div className="mb-8 animate-in">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? `bg-gradient-to-r ${filter.color} text-white shadow-lg animate-pulse-glow`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-yellow-300'
                }`}
              >
                {Icon && <Icon size={16} />}
                <span className="text-sm font-medium">{filter.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Happening Now - Ultra Priority */}
      {happeningNow.length > 0 && (
        <div className="mb-8 animate-in">
          <div className="relative">
            {/* Electric glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
            
            <div className="relative bg-white rounded-2xl p-6 border-2 border-yellow-400 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg"
                >
                  <Flame className="text-white" size={20} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-gray-900">Happening Now</h3>
                  <p className="text-sm text-gray-600">Join the action while it lasts</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-full text-xs animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                  <span>LIVE</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {happeningNow.map((flash) => (
                  <FlashCommunityCard
                    key={flash.id}
                    flash={flash}
                    onClick={() => onSelectFlash(flash)}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expiring Soon - High Urgency */}
      {expiringSoon.length > 0 && (
        <div className="mb-8 animate-in">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center"
            >
              <Clock className="text-white" size={18} />
            </motion.div>
            <h3 className="text-gray-900">Expiring Soon</h3>
            <div className="ml-auto text-xs text-orange-600 bg-orange-100 px-3 py-1.5 rounded-full font-medium border border-orange-200">
              Last chance to join!
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expiringSoon.map((flash) => (
              <FlashCommunityCard
                key={flash.id}
                flash={flash}
                onClick={() => onSelectFlash(flash)}
                variant="compact"
              />
            ))}
          </div>
        </div>
      )}

      {/* Active Flash Communities */}
      {activeFlash.length > 0 && (
        <div className="mb-8 animate-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Zap className="text-white" size={18} />
            </div>
            <h3 className="text-gray-900">Active Events</h3>
            <div className="ml-auto text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
              {activeFlash.length} active
            </div>
          </div>
          <div className="space-y-4">
            {activeFlash.map((flash) => (
              <FlashCommunityCard
                key={flash.id}
                flash={flash}
                onClick={() => onSelectFlash(flash)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Ended Flash Communities */}
      {endedFlash.length > 0 && (
        <div className="animate-in">
          <h3 className="text-gray-500 mb-4">Recently Ended</h3>
          <div className="space-y-4 opacity-50">
            {endedFlash.map((flash) => (
              <FlashCommunityCard
                key={flash.id}
                flash={flash}
                onClick={() => onSelectFlash(flash)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
