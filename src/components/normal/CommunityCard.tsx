import React from 'react';
import { Community } from '../NormalCommunities';
import { Users, Check, Clock, TrendingUp, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CommunityCardProps {
  community: Community;
  onClick: () => void;
  variant?: 'default' | 'compact';
  showTrending?: boolean;
  showLocation?: boolean;
}

export function CommunityCard({ 
  community, 
  onClick, 
  variant = 'default',
  showTrending = false,
  showLocation = false 
}: CommunityCardProps) {
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
          className: 'bg-white/90 text-gray-700 border-2 border-gray-300 hover:bg-gray-50'
        };
      case 'pending':
        return {
          text: 'Pending',
          icon: <Clock size={16} />,
          className: 'bg-orange-50 text-orange-600 border-2 border-orange-200 hover:bg-orange-100'
        };
      default:
        return {
          text: 'Join',
          icon: null,
          className: 'bg-gradient-to-r from-[#38C4DA] to-[#5DD5E8] text-white hover:shadow-lg hover:scale-105 border-2 border-transparent'
        };
    }
  };

  const buttonConfig = getButtonConfig();
  
  // Generate mock avatar URLs for avatar cluster
  const mockAvatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
  ];

  // Cover image gradients
  const coverGradients = [
    'from-teal-400 via-cyan-500 to-blue-500',
    'from-purple-400 via-pink-500 to-red-500',
    'from-emerald-400 via-teal-500 to-cyan-500',
    'from-violet-400 via-purple-500 to-indigo-500',
    'from-amber-400 via-orange-500 to-red-500',
  ];
  const gradientIndex = community.id.charCodeAt(0) % coverGradients.length;

  // Category colors
  const categoryColors: Record<string, string> = {
    'Technology': 'bg-blue-100 text-blue-700 border-blue-200',
    'Design': 'bg-purple-100 text-purple-700 border-purple-200',
    'Product': 'bg-teal-100 text-teal-700 border-teal-200',
    'Marketing': 'bg-orange-100 text-orange-700 border-orange-200',
    'Entrepreneurship': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group cursor-pointer"
        onClick={onClick}
      >
        <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#38C4DA] transition-all duration-300 shadow-sm hover:shadow-xl">
          {/* Cover Image/Gradient */}
          <div className="relative h-32 overflow-hidden">
            {community.imageUrl ? (
              <img
                src={community.imageUrl}
                alt={community.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${coverGradients[gradientIndex]} group-hover:scale-110 transition-transform duration-500`} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Trending Badge */}
            {showTrending && (
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500 text-white px-2.5 py-1 rounded-full text-xs animate-pulse">
                <TrendingUp size={12} />
                <span>+45%</span>
              </div>
            )}

            {/* Location Badge */}
            {showLocation && (
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#38C4DA] text-white px-2.5 py-1 rounded-full text-xs">
                <MapPin size={12} />
                <span>2.3 mi</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Category Chip */}
            <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs border mb-2 ${categoryColors[community.category] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
              {community.category}
            </div>

            <h4 className="text-gray-900 mb-2 group-hover:text-[#38C4DA] transition-colors">
              {community.name}
            </h4>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {community.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              {/* Avatar Cluster */}
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
                <span className="text-xs text-gray-500">{community.memberCount.toLocaleString()}</span>
              </div>

              {/* Join Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${buttonConfig.className}`}
              >
                {buttonConfig.icon}
                <span>{buttonConfig.text}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant - full card
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#38C4DA] transition-all duration-300 shadow-sm hover:shadow-xl">
        {/* Cover Image/Gradient */}
        <div className="relative h-40 overflow-hidden">
          {community.imageUrl ? (
            <img
              src={community.imageUrl}
              alt={community.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${coverGradients[gradientIndex]} group-hover:scale-110 transition-transform duration-500`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Activity Indicator - Pulse Dot */}
          <div className="absolute top-4 left-4">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category Chip */}
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs border mb-3 ${categoryColors[community.category] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
            {community.category}
          </div>

          <h3 className="text-gray-900 mb-2 group-hover:text-[#38C4DA] transition-colors">
            {community.name}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {community.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Avatar Cluster + Member Count */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {mockAvatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                <Users size={16} />
                <span>{community.memberCount.toLocaleString()}</span>
              </div>
            </div>

            {/* Join Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all ${buttonConfig.className}`}
            >
              {buttonConfig.icon}
              <span>{buttonConfig.text}</span>
            </button>
          </div>
        </div>

        {/* Gradient Accent Border on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#38C4DA]/20 to-[#C0C4FF]/20 rounded-2xl" />
        </div>
      </div>
    </motion.div>
  );
}
