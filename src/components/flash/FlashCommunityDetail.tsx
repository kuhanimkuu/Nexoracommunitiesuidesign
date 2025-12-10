import React, { useState, useEffect } from 'react';
import { FlashCommunity } from '../FlashCommunities';
import { ArrowLeft, Users, Clock, Zap } from 'lucide-react';
import { FlashDiscussionsTab } from './tabs/FlashDiscussionsTab';
import { FlashNoticesTab } from './tabs/FlashNoticesTab';
import { FlashMembersTab } from './tabs/FlashMembersTab';
import { FlashSubcommunitiesTab } from './tabs/FlashSubcommunitiesTab';

interface FlashCommunityDetailProps {
  flash: FlashCommunity;
  onBack: () => void;
}

type TabType = 'discussions' | 'notices' | 'members' | 'subcommunities';

export function FlashCommunityDetail({ flash, onBack }: FlashCommunityDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('discussions');
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const end = flash.endsAt.getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('Event Ended');
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [flash.endsAt]);

  const isEnded = flash.status === 'ended';

  const tabs = [
    { id: 'discussions', label: '⚡ Discussions', icon: Zap },
    { id: 'notices', label: '📢 Notices' },
    { id: 'members', label: '👥 Members' },
    { id: 'subcommunities', label: '🔥 Subflash' }
  ] as const;

  // Mock participant avatars
  const participants = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Flash Communities</span>
      </button>

      {/* Flash Header */}
      <div className={`relative rounded-2xl p-6 border-2 shadow-lg mb-6 overflow-hidden ${
        isEnded ? 'border-gray-300 bg-white' : 'border-transparent'
      }`}>
        {/* Gradient Background */}
        {!isEnded && (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${flash.gradient} opacity-15`} />
            {flash.status === 'live' && (
              <div className={`absolute inset-0 bg-gradient-to-br ${flash.gradient} opacity-10 animate-pulse`} />
            )}
          </>
        )}

        {/* Animated Border */}
        {flash.status === 'live' && (
          <div className="absolute inset-0 rounded-2xl">
            <div className={`absolute inset-0 bg-gradient-to-r ${flash.gradient} opacity-40 blur-sm animate-pulse`} />
          </div>
        )}

        <div className="relative">
          {/* Status Badges */}
          <div className="flex items-center gap-2 mb-4">
            {flash.status === 'live' && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white rounded-full text-sm animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>LIVE</span>
              </div>
            )}
            {flash.status === 'ending-soon' && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 text-white rounded-full text-sm">
                <Zap size={14} />
                <span>ENDING SOON</span>
              </div>
            )}
            {flash.status === 'active' && (
              <div className="px-3 py-1.5 bg-green-500 text-white rounded-full text-sm">
                ACTIVE
              </div>
            )}
            {isEnded && (
              <div className="px-3 py-1.5 bg-gray-400 text-white rounded-full text-sm">
                ENDED
              </div>
            )}
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <span className="text-2xl">{flash.icon}</span>
              <span>Flash Event</span>
            </div>
          </div>

          {/* Event Name */}
          <h1 className="text-gray-900 mb-4">{flash.name}</h1>

          {/* Timer and Participants */}
          <div className="flex items-center justify-between mb-6">
            {/* Countdown Timer */}
            {!isEnded ? (
              <div className={`px-6 py-3 rounded-xl bg-gradient-to-r ${flash.gradient} text-white shadow-lg`}>
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span className="text-2xl tracking-wider">{timeLeft}</span>
                </div>
              </div>
            ) : (
              <div className="px-6 py-3 rounded-xl bg-gray-200 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span className="text-xl">Event Ended</span>
                </div>
              </div>
            )}

            {/* Participant Avatars */}
            {!isEnded && (
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {participants.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt=""
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-700">
                    +{flash.participantCount - participants.length}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Join Button */}
          {!isEnded && (
            <div className="relative">
              <button className={`w-full px-6 py-3.5 rounded-xl text-white bg-gradient-to-r ${flash.gradient} hover:shadow-xl transition-all text-lg shadow-lg`}>
                {flash.joined ? 'You\'re In!' : 'Join Flash Event'}
              </button>
              {flash.status === 'live' && (
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${flash.gradient} opacity-30 blur rounded-xl -z-10 animate-pulse`} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Flash Tab Bar */}
      <div className={`rounded-2xl border-2 shadow-sm mb-6 p-2 ${
        isEnded ? 'bg-white border-gray-200' : `bg-gradient-to-r ${flash.gradient} bg-opacity-5 border-transparent`
      }`}>
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${flash.gradient} text-white shadow-md`
                  : 'text-gray-600 hover:bg-white hover:bg-opacity-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'discussions' && <FlashDiscussionsTab flashId={flash.id} gradient={flash.gradient} />}
        {activeTab === 'notices' && <FlashNoticesTab flashId={flash.id} gradient={flash.gradient} />}
        {activeTab === 'members' && <FlashMembersTab flashId={flash.id} />}
        {activeTab === 'subcommunities' && <FlashSubcommunitiesTab flashId={flash.id} gradient={flash.gradient} />}
      </div>
    </div>
  );
}
