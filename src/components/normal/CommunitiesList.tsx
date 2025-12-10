import React, { useState } from 'react';
import { Community } from '../NormalCommunities';
import { CommunityCard } from './CommunityCard';
import { Search, TrendingUp, MapPin, Sparkles, Filter } from 'lucide-react';

interface CommunitiesListProps {
  communities: Community[];
  onSelectCommunity: (community: Community) => void;
}

type FilterType = 'popular' | 'new' | 'for-you' | 'local' | 'all';

export function CommunitiesList({ communities, onSelectCommunity }: CommunitiesListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const filters: { id: FilterType; label: string; icon?: any }[] = [
    { id: 'popular', label: 'Popular', icon: TrendingUp },
    { id: 'new', label: 'New', icon: Sparkles },
    { id: 'for-you', label: 'For You', icon: Filter },
    { id: 'local', label: 'Local', icon: MapPin },
    { id: 'all', label: 'All' },
  ];

  // Mock discovery data
  const growingFast = communities.slice(0, 2);
  const nearby = communities.slice(2, 4);
  const recommended = communities.slice(1, 3);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6 animate-in">
        <h2 className="text-gray-900 mb-2">Discover Communities</h2>
        <p className="text-gray-600">Join communities that match your interests and connect with like-minded people</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 animate-in">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#38C4DA] focus:border-transparent transition-all shadow-sm hover:shadow-md"
          />
        </div>
      </div>

      {/* Floating Filter Bar */}
      <div className="mb-8 animate-in sticky top-4 z-10">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl p-2 shadow-lg">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#38C4DA] to-[#C0C4FF] text-white shadow-md scale-105'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:scale-102'
                  }`}
                >
                  {Icon && <Icon size={16} />}
                  <span className="text-sm font-medium">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Discovery Blocks */}
      <div className="mb-8 space-y-6 animate-in">
        {/* Growing Fast */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <h3 className="text-gray-900">Growing Fast</h3>
            <div className="ml-auto text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              +247% this week
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {growingFast.map((community) => (
              <CommunityCard
                key={community.id}
                community={community}
                onClick={() => onSelectCommunity(community)}
                variant="compact"
                showTrending
              />
            ))}
          </div>
        </div>

        {/* Nearby */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38C4DA] to-[#2FB3C9] flex items-center justify-center">
              <MapPin size={16} className="text-white" />
            </div>
            <h3 className="text-gray-900">Nearby</h3>
            <div className="ml-auto text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Within 10 miles
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nearby.map((community) => (
              <CommunityCard
                key={community.id}
                community={community}
                onClick={() => onSelectCommunity(community)}
                variant="compact"
                showLocation
              />
            ))}
          </div>
        </div>

        {/* Recommended for You */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C0C4FF] to-[#A8ACFF] flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <h3 className="text-gray-900">Recommended for You</h3>
            <div className="ml-auto text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Based on your activity
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommended.map((community) => (
              <CommunityCard
                key={community.id}
                community={community}
                onClick={() => onSelectCommunity(community)}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Communities */}
      <div className="animate-in">
        <h3 className="text-gray-900 mb-4">All Communities</h3>
        <div className="space-y-4">
          {communities.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
              onClick={() => onSelectCommunity(community)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
