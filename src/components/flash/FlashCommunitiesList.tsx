import React from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { FlashCommunityCard } from './FlashCommunityCard';
import { Search, Zap } from 'lucide-react';

interface FlashCommunitiesListProps {
  flashCommunities: FlashCommunity[];
  onSelectFlash: (flash: FlashCommunity) => void;
}

export function FlashCommunitiesList({ flashCommunities, onSelectFlash }: FlashCommunitiesListProps) {
  const activeFlash = flashCommunities.filter(f => f.status !== 'ended');
  const endedFlash = flashCommunities.filter(f => f.status === 'ended');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="text-yellow-500" size={28} />
          <h2 className="text-gray-900">Flash Communities</h2>
        </div>
        <p className="text-gray-600">Join limited-time events and connect in real-time</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search flash events..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Active Flash Communities */}
      {activeFlash.length > 0 && (
        <div className="mb-8">
          <h3 className="text-gray-900 mb-4">Active Events</h3>
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
        <div>
          <h3 className="text-gray-700 mb-4">Recently Ended</h3>
          <div className="space-y-4 opacity-60">
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
