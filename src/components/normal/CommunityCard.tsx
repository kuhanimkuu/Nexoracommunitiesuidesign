import React from 'react';
import { Community } from '../NormalCommunities';
import { Users, Clock, Check } from 'lucide-react';

interface CommunityCardProps {
  community: Community;
  onClick: () => void;
}

export function CommunityCard({ community, onClick }: CommunityCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getButtonConfig = () => {
    switch (community.status) {
      case 'joined':
        return {
          text: 'Joined',
          icon: <Check size={16} />,
          className: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        };
      case 'pending':
        return {
          text: 'Pending',
          icon: <Clock size={16} />,
          className: 'bg-orange-100 text-orange-700 hover:bg-orange-200'
        };
      default:
        return {
          text: 'Join',
          icon: null,
          className: 'bg-[#38C4DA] text-white hover:bg-[#2FB3C9] shadow-sm hover:shadow-md'
        };
    }
  };

  const buttonConfig = getButtonConfig();
  const bgColors = ['bg-[#C0C4FF]', 'bg-[#38C4DA]', 'bg-purple-400', 'bg-teal-400', 'bg-indigo-400'];
  const colorIndex = community.id.charCodeAt(0) % bgColors.length;

  return (
    <div 
      className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#38C4DA] hover:shadow-lg transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex gap-4">
        {/* Image Holder */}
        <div className="flex-shrink-0">
          {community.imageUrl ? (
            <img
              src={community.imageUrl}
              alt={community.name}
              className="w-16 h-16 rounded-xl object-cover"
            />
          ) : (
            <div className={`w-16 h-16 rounded-xl ${bgColors[colorIndex]} flex items-center justify-center text-white`}>
              <span className="text-lg">{getInitials(community.name)}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 mb-1 group-hover:text-[#38C4DA] transition-colors">
            {community.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {community.description}
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Users size={16} />
              <span>{community.memberCount.toLocaleString()} members</span>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`ml-auto flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all ${buttonConfig.className}`}
            >
              {buttonConfig.icon}
              <span>{buttonConfig.text}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
