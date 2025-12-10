import React from 'react';
import { Community } from '../NormalCommunities';
import { CommunityCard } from './CommunityCard';
import { Search } from 'lucide-react';

interface CommunitiesListProps {
  communities: Community[];
  onSelectCommunity: (community: Community) => void;
}

export function CommunitiesList({ communities, onSelectCommunity }: CommunitiesListProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-gray-900 mb-2">Discover Communities</h2>
        <p className="text-gray-600">Join communities that match your interests</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search communities..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38C4DA] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Communities List */}
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
  );
}
