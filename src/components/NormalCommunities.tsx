import React, { useState } from 'react';
import { CommunitiesList } from './normal/CommunitiesList';
import { CommunityDetail } from './normal/CommunityDetail';

export interface Community {
  id: string;
  name: string;
  description: string;
  category: string;
  memberCount: number;
  imageUrl?: string;
  status: 'join' | 'joined' | 'pending';
  isAdmin?: boolean;
}

const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'Tech Innovators',
    description: 'A community for developers and tech enthusiasts to share ideas and collaborate',
    category: 'Technology',
    memberCount: 1243,
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop',
    status: 'joined',
    isAdmin: true
  },
  {
    id: '2',
    name: 'Design Masters',
    description: 'Share your creative work and get feedback from fellow designers',
    category: 'Design',
    memberCount: 856,
    status: 'join'
  },
  {
    id: '3',
    name: 'Product Leaders',
    description: 'Strategic discussions on product management and user experience',
    category: 'Product',
    memberCount: 432,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
    status: 'pending'
  },
  {
    id: '4',
    name: 'Marketing Minds',
    description: 'Growth strategies, campaigns, and marketing best practices',
    category: 'Marketing',
    memberCount: 678,
    status: 'join'
  },
  {
    id: '5',
    name: 'Startup Founders',
    description: 'Connect with entrepreneurs building the next generation of companies',
    category: 'Entrepreneurship',
    memberCount: 1567,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop',
    status: 'joined'
  }
];

export function NormalCommunities() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);

  if (selectedCommunity) {
    return (
      <CommunityDetail 
        community={selectedCommunity} 
        onBack={() => setSelectedCommunity(null)}
      />
    );
  }

  return (
    <CommunitiesList 
      communities={mockCommunities}
      onSelectCommunity={setSelectedCommunity}
    />
  );
}
