import React, { useState } from 'react';
import { FlashCommunitiesList } from './flash/FlashCommunitiesList';
import { FlashCommunityDetail } from './flash/FlashCommunityDetail';

export interface FlashCommunity {
  id: string;
  name: string;
  description: string;
  category: string;
  participantCount: number;
  icon: string;
  status: 'live' | 'active' | 'ending-soon' | 'ended';
  endsAt: Date;
  gradient: string;
  joined?: boolean;
  triggerType: 'event' | 'meetup' | 'discussion' | 'emergency';
  coverImage?: string;
}

const mockFlashCommunities: FlashCommunity[] = [
  {
    id: '1',
    name: 'Product Launch Sprint',
    description: 'Join us for an intensive 24-hour product launch collaboration with founders worldwide',
    category: 'Product',
    participantCount: 234,
    icon: '🚀',
    status: 'live',
    endsAt: new Date(Date.now() + 2 * 60 * 60 * 1000 + 15 * 60 * 1000), // 2h 15m
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    joined: true,
    triggerType: 'event'
  },
  {
    id: '2',
    name: 'Design Jam Session',
    description: 'Create, share, and get feedback on your designs in real-time',
    category: 'Design',
    participantCount: 167,
    icon: '🎨',
    status: 'active',
    endsAt: new Date(Date.now() + 5 * 60 * 60 * 1000 + 42 * 60 * 1000), // 5h 42m
    gradient: 'from-cyan-500 via-teal-500 to-green-500',
    joined: false,
    triggerType: 'meetup'
  },
  {
    id: '3',
    name: 'Hackathon Finals',
    description: 'Watch the final presentations and vote for your favorite projects',
    category: 'Development',
    participantCount: 892,
    icon: '💻',
    status: 'ending-soon',
    endsAt: new Date(Date.now() + 45 * 60 * 1000), // 45m
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    joined: true,
    triggerType: 'event'
  },
  {
    id: '4',
    name: 'Marketing Blitz',
    description: 'Rapid-fire marketing campaign brainstorming and execution',
    category: 'Marketing',
    participantCount: 0,
    icon: '📢',
    status: 'ended',
    endsAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // ended 2h ago
    gradient: 'from-gray-400 to-gray-500',
    joined: false,
    triggerType: 'discussion'
  },
  {
    id: '5',
    name: 'Startup Office Hours',
    description: 'Get advice from successful founders and investors in a live Q&A',
    category: 'Entrepreneurship',
    participantCount: 445,
    icon: '💡',
    status: 'active',
    endsAt: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8h
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    joined: false,
    triggerType: 'discussion'
  },
  {
    id: '6',
    name: 'Emergency: Server Down',
    description: 'Critical incident response - all hands on deck to restore services',
    category: 'Technical',
    participantCount: 56,
    icon: '🚨',
    status: 'live',
    endsAt: new Date(Date.now() + 30 * 60 * 1000), // 30m
    gradient: 'from-red-500 to-rose-600',
    joined: true,
    triggerType: 'emergency'
  }
];

export function FlashCommunities() {
  const [selectedFlash, setSelectedFlash] = useState<FlashCommunity | null>(null);

  if (selectedFlash) {
    return (
      <FlashCommunityDetail 
        flash={selectedFlash}
        onBack={() => setSelectedFlash(null)}
      />
    );
  }

  return (
    <FlashCommunitiesList 
      flashCommunities={mockFlashCommunities}
      onSelectFlash={setSelectedFlash}
    />
  );
}