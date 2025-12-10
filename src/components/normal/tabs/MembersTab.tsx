import React from 'react';
import { Crown, Shield, Users as UsersIcon } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'moderator' | 'member';
  status: 'online' | 'offline';
}

const mockMembers: Member[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    role: 'admin',
    status: 'online'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    role: 'moderator',
    status: 'online'
  },
  {
    id: '3',
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    role: 'moderator',
    status: 'offline'
  },
  {
    id: '4',
    name: 'Sophie Anderson',
    role: 'member',
    status: 'online'
  },
  {
    id: '5',
    name: 'Marcus Lee',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'member',
    status: 'online'
  },
  {
    id: '6',
    name: 'Emma Brown',
    role: 'member',
    status: 'offline'
  },
  {
    id: '7',
    name: 'Ryan Taylor',
    role: 'member',
    status: 'offline'
  },
  {
    id: '8',
    name: 'Olivia Martinez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    role: 'member',
    status: 'online'
  }
];

interface MembersTabProps {
  communityId: string;
}

export function MembersTab({ communityId }: MembersTabProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const getRoleConfig = (role: Member['role']) => {
    switch (role) {
      case 'admin':
        return {
          label: 'Admin',
          icon: <Crown size={12} />,
          bgColor: 'bg-[#38C4DA]',
          textColor: 'text-white'
        };
      case 'moderator':
        return {
          label: 'Moderator',
          icon: <Shield size={12} />,
          bgColor: 'bg-[#C0C4FF]',
          textColor: 'text-white'
        };
      default:
        return null;
    }
  };

  const colors = ['bg-purple-400', 'bg-teal-400', 'bg-indigo-400', 'bg-pink-400', 'bg-blue-400'];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-gray-900">Members</h3>
        <p className="text-gray-600 text-sm">{mockMembers.length} total members</p>
      </div>

      <div className="divide-y divide-gray-200">
        {mockMembers.map((member, index) => {
          const roleConfig = getRoleConfig(member.role);
          
          return (
            <div
              key={member.id}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className={`w-11 h-11 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white text-sm`}>
                      {getInitials(member.name)}
                    </div>
                  )}
                  
                  {/* Status Indicator */}
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    member.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`} />
                </div>

                {/* Name and Role */}
                <div className="flex-1 min-w-0">
                  <div className="text-gray-900 text-sm mb-1">
                    {member.name}
                  </div>
                  {roleConfig && (
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${roleConfig.bgColor} ${roleConfig.textColor}`}>
                      {roleConfig.icon}
                      <span>{roleConfig.label}</span>
                    </div>
                  )}
                </div>

                {/* Status Text */}
                <div className="text-xs text-gray-500">
                  {member.status === 'online' ? 'Online' : 'Offline'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {mockMembers.length === 0 && (
        <div className="p-12 text-center">
          <UsersIcon size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No members yet</h3>
          <p className="text-gray-600 text-sm">Be the first to join!</p>
        </div>
      )}
    </div>
  );
}
