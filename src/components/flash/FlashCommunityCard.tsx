import React, { useState, useEffect } from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { Users, Zap, Clock } from 'lucide-react';

interface FlashCommunityCardProps {
  flash: FlashCommunity;
  onClick: () => void;
}

export function FlashCommunityCard({ flash, onClick }: FlashCommunityCardProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const end = flash.endsAt.getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('Ended');
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
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [flash.endsAt]);

  const getStatusBadge = () => {
    switch (flash.status) {
      case 'live':
        return (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-red-500 text-white rounded-full text-xs animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span>LIVE</span>
          </div>
        );
      case 'ending-soon':
        return (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-white rounded-full text-xs">
            <Zap size={12} />
            <span>ENDING SOON</span>
          </div>
        );
      case 'active':
        return (
          <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs">
            ACTIVE
          </div>
        );
      default:
        return (
          <div className="px-3 py-1 bg-gray-400 text-white rounded-full text-xs">
            ENDED
          </div>
        );
    }
  };

  const isEnded = flash.status === 'ended';

  return (
    <div 
      className={`relative rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
        isEnded 
          ? 'border-gray-300 hover:border-gray-400 bg-white'
          : 'border-transparent hover:shadow-2xl hover:scale-[1.02]'
      }`}
      onClick={onClick}
    >
      {/* Gradient Background */}
      {!isEnded && (
        <div className={`absolute inset-0 bg-gradient-to-br ${flash.gradient} opacity-10`} />
      )}
      
      {/* Animated Border for Live Events */}
      {flash.status === 'live' && (
        <div className={`absolute inset-0 bg-gradient-to-br ${flash.gradient} opacity-20 animate-pulse`} />
      )}

      <div className="relative flex gap-4">
        {/* Icon */}
        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${
          isEnded ? 'bg-gray-200' : `bg-gradient-to-br ${flash.gradient}`
        }`}>
          {flash.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {getStatusBadge()}
            {flash.joined && !isEnded && (
              <div className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">
                Joined
              </div>
            )}
          </div>

          <h3 className={`mb-2 ${isEnded ? 'text-gray-600' : 'text-gray-900'}`}>
            {flash.name}
          </h3>

          <p className={`text-sm mb-3 line-clamp-2 ${isEnded ? 'text-gray-500' : 'text-gray-600'}`}>
            {flash.description}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Countdown Timer */}
            {!isEnded && (
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r ${flash.gradient} text-white`}>
                <Clock size={16} />
                <span>{timeLeft} left</span>
              </div>
            )}

            {/* Participant Count */}
            {flash.status !== 'ended' && (
              <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                <Users size={16} />
                <span>{flash.participantCount} live</span>
              </div>
            )}

            {/* Join Button */}
            {!isEnded && !flash.joined && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`ml-auto px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r ${flash.gradient} hover:shadow-lg transition-all`}
              >
                Join Flash
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
