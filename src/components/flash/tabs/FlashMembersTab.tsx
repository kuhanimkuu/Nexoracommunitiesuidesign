import React from 'react';
import { Users, Zap } from 'lucide-react';

interface FlashMember {
  id: string;
  name: string;
  avatar?: string;
  isLive: boolean;
}

const mockMembers: FlashMember[] = [
  { id: '1', name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', isLive: true },
  { id: '2', name: 'Maria Garcia', isLive: true },
  { id: '3', name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', isLive: true },
  { id: '4', name: 'Sophie Anderson', isLive: true },
  { id: '5', name: 'Marcus Lee', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', isLive: true },
  { id: '6', name: 'Emma Brown', isLive: true },
  { id: '7', name: 'Ryan Taylor', isLive: true },
  { id: '8', name: 'Olivia Martinez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', isLive: true },
  { id: '9', name: 'David Kim', isLive: true },
  { id: '10', name: 'Lisa Chen', isLive: true },
  { id: '11', name: 'Tom Harris', isLive: true },
  { id: '12', name: 'Anna White', isLive: true }
];

interface FlashMembersTabProps {
  flashId: string;
}

export function FlashMembersTab({ flashId }: FlashMembersTabProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(w => w[0]).join('').toUpperCase();
  };

  const colors = ['bg-purple-400', 'bg-teal-400', 'bg-pink-400', 'bg-blue-400', 'bg-indigo-400', 'bg-orange-400'];

  return (
    <div className="space-y-6">
      {/* Live Participants Header */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <h3 className="text-gray-900">Live Participants</h3>
        </div>
        <p className="text-gray-600 text-sm">{mockMembers.length} people actively participating</p>
      </div>

      {/* Avatar Cluster Layout */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {mockMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative"
            >
              {/* Member Chip */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-100 to-teal-100 border-2 border-green-300 rounded-full hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className={`w-7 h-7 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white text-xs`}>
                      {getInitials(member.name)}
                    </div>
                  )}
                  
                  {/* Live Indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
                </div>

                {/* Name */}
                <span className="text-sm text-gray-900">{member.name}</span>
              </div>

              {/* Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                {member.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="text-purple-600" size={20} />
            <span className="text-sm text-gray-600">Total Joined</span>
          </div>
          <div className="text-2xl text-gray-900">{mockMembers.length}</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="text-green-600" size={20} />
            <span className="text-sm text-gray-600">Currently Live</span>
          </div>
          <div className="text-2xl text-gray-900">{mockMembers.filter(m => m.isLive).length}</div>
        </div>
      </div>

      {/* Empty State */}
      {mockMembers.length === 0 && (
        <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <Users size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No participants yet</h3>
          <p className="text-gray-600 text-sm">Be the first to join this flash event!</p>
        </div>
      )}
    </div>
  );
}
