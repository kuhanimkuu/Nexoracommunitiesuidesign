import React, { useState } from 'react';
import { Community } from '../NormalCommunities';
import { ArrowLeft, Users, Check, Clock } from 'lucide-react';
import { DiscussionsTab } from './tabs/DiscussionsTab';
import { NoticesTab } from './tabs/NoticesTab';
import { MembersTab } from './tabs/MembersTab';
import { SubcommunitiesTab } from './tabs/SubcommunitiesTab';
import { SettingsTab } from './tabs/SettingsTab';

interface CommunityDetailProps {
  community: Community;
  onBack: () => void;
}

type TabType = 'discussions' | 'notices' | 'members' | 'subcommunities' | 'settings';

export function CommunityDetail({ community, onBack }: CommunityDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('discussions');

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
          icon: <Check size={18} />,
          className: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        };
      case 'pending':
        return {
          text: 'Pending',
          icon: <Clock size={18} />,
          className: 'bg-orange-100 text-orange-700 hover:bg-orange-200'
        };
      default:
        return {
          text: 'Join Community',
          icon: null,
          className: 'bg-[#38C4DA] text-white hover:bg-[#2FB3C9] shadow-sm hover:shadow-md'
        };
    }
  };

  const buttonConfig = getButtonConfig();
  const bgColors = ['bg-[#C0C4FF]', 'bg-[#38C4DA]', 'bg-purple-400', 'bg-teal-400', 'bg-indigo-400'];
  const colorIndex = community.id.charCodeAt(0) % bgColors.length;

  const tabs = [
    { id: 'discussions', label: 'Discussions' },
    { id: 'notices', label: 'Notices' },
    { id: 'members', label: 'Members' },
    { id: 'subcommunities', label: 'Subcommunities' },
    ...(community.isAdmin ? [{ id: 'settings', label: 'Settings' }] : [])
  ] as const;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Communities</span>
      </button>

      {/* Header Section */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
        <div className="flex gap-4 mb-6">
          {/* Community Image */}
          <div className="flex-shrink-0">
            {community.imageUrl ? (
              <img
                src={community.imageUrl}
                alt={community.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
            ) : (
              <div className={`w-20 h-20 rounded-xl ${bgColors[colorIndex]} flex items-center justify-center text-white`}>
                <span className="text-2xl">{getInitials(community.name)}</span>
              </div>
            )}
          </div>

          {/* Community Info */}
          <div className="flex-1">
            <h1 className="text-gray-900 mb-2">{community.name}</h1>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block px-3 py-1 bg-[#38C4DA] bg-opacity-10 text-[#38C4DA] rounded-full text-sm">
                {community.category}
              </span>
              <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                <Users size={16} />
                <span>{community.memberCount.toLocaleString()} members</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{community.description}</p>
          </div>
        </div>

        {/* Join Button */}
        <button className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all ${buttonConfig.className}`}>
          {buttonConfig.icon}
          <span>{buttonConfig.text}</span>
        </button>
      </div>

      {/* Tab Bar */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6 p-2">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#38C4DA] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'discussions' && <DiscussionsTab communityId={community.id} />}
        {activeTab === 'notices' && <NoticesTab communityId={community.id} />}
        {activeTab === 'members' && <MembersTab communityId={community.id} />}
        {activeTab === 'subcommunities' && <SubcommunitiesTab communityId={community.id} />}
        {activeTab === 'settings' && community.isAdmin && <SettingsTab communityId={community.id} />}
      </div>
    </div>
  );
}
