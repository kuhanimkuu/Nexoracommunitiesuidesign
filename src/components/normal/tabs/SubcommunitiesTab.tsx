import React from 'react';
import { Users, Layers } from 'lucide-react';

interface Subcommunity {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl?: string;
}

const mockSubcommunities: Subcommunity[] = [
  {
    id: '1',
    name: 'Frontend Developers',
    description: 'React, Vue, and modern frontend frameworks',
    memberCount: 234,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Backend Engineers',
    description: 'APIs, databases, and server architecture',
    memberCount: 189
  },
  {
    id: '3',
    name: 'DevOps & Cloud',
    description: 'Infrastructure, CI/CD, and cloud platforms',
    memberCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Mobile Development',
    description: 'iOS, Android, and cross-platform apps',
    memberCount: 198
  }
];

interface SubcommunitiesTabProps {
  communityId: string;
}

export function SubcommunitiesTab({ communityId }: SubcommunitiesTabProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const colors = ['bg-purple-400', 'bg-teal-400', 'bg-indigo-400', 'bg-pink-400'];

  return (
    <div className="space-y-4">
      {mockSubcommunities.map((subcommunity, index) => (
        <div
          key={subcommunity.id}
          className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-[#38C4DA] hover:shadow-lg transition-all duration-200 cursor-pointer group"
        >
          <div className="flex gap-3">
            {/* Image */}
            <div className="flex-shrink-0">
              {subcommunity.imageUrl ? (
                <img
                  src={subcommunity.imageUrl}
                  alt={subcommunity.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
              ) : (
                <div className={`w-12 h-12 rounded-xl ${colors[index % colors.length]} flex items-center justify-center text-white text-sm`}>
                  {getInitials(subcommunity.name)}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-gray-900 mb-1 group-hover:text-[#38C4DA] transition-colors">
                {subcommunity.name}
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                {subcommunity.description}
              </p>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <Users size={14} />
                <span>{subcommunity.memberCount} members</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Empty State */}
      {mockSubcommunities.length === 0 && (
        <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <Layers size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No subcommunities</h3>
          <p className="text-gray-600 text-sm">This community doesn't have any subcommunities yet.</p>
        </div>
      )}
    </div>
  );
}
