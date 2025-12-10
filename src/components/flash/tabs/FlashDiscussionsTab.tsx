import React from 'react';
import { Flame, Zap, Heart } from 'lucide-react';

interface FlashMessage {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  message: string;
  timestamp: string;
  reactions: number;
  reactionType: 'fire' | 'zap' | 'heart';
}

const mockMessages: FlashMessage[] = [
  {
    id: '1',
    author: { name: 'Alex', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    message: 'Just launched our MVP! Got 50 signups in the first hour 🎉',
    timestamp: '2m ago',
    reactions: 12,
    reactionType: 'fire'
  },
  {
    id: '2',
    author: { name: 'Maria' },
    message: 'Amazing energy here! Anyone else working on AI products?',
    timestamp: '5m ago',
    reactions: 8,
    reactionType: 'zap'
  },
  {
    id: '3',
    author: { name: 'James', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    message: 'We just closed our first customer! This community is incredible for motivation',
    timestamp: '8m ago',
    reactions: 15,
    reactionType: 'heart'
  },
  {
    id: '4',
    author: { name: 'Sophie' },
    message: "Quick question: what's your go-to tool for user research?",
    timestamp: '12m ago',
    reactions: 5,
    reactionType: 'zap'
  },
  {
    id: '5',
    author: { name: 'Ryan', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    message: 'The presentations so far have been mind-blowing! 🚀',
    timestamp: '15m ago',
    reactions: 9,
    reactionType: 'fire'
  }
];

interface FlashDiscussionsTabProps {
  flashId: string;
  gradient: string;
}

export function FlashDiscussionsTab({ flashId, gradient }: FlashDiscussionsTabProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(w => w[0]).join('').toUpperCase();
  };

  const getReactionIcon = (type: FlashMessage['reactionType']) => {
    switch (type) {
      case 'fire':
        return <Flame size={14} className="text-orange-500" />;
      case 'zap':
        return <Zap size={14} className="text-yellow-500" />;
      case 'heart':
        return <Heart size={14} className="text-red-500" />;
    }
  };

  const bubbleColors = [
    'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200',
    'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
    'bg-gradient-to-br from-green-50 to-teal-50 border-green-200',
    'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200'
  ];

  const avatarColors = ['bg-purple-400', 'bg-teal-400', 'bg-pink-400', 'bg-blue-400'];

  return (
    <div className="space-y-3">
      <div className="text-sm text-gray-600 mb-4 px-1">
        💬 Live chat-style discussions
      </div>

      {mockMessages.map((msg, index) => (
        <div key={msg.id} className="flex gap-3 animate-in slide-in-from-bottom-2">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {msg.author.avatar ? (
              <img
                src={msg.author.avatar}
                alt={msg.author.name}
                className="w-9 h-9 rounded-full object-cover"
              />
            ) : (
              <div className={`w-9 h-9 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-xs`}>
                {getInitials(msg.author.name)}
              </div>
            )}
          </div>

          {/* Chat Bubble */}
          <div className="flex-1 max-w-lg">
            <div className={`${bubbleColors[index % bubbleColors.length]} border-2 rounded-2xl rounded-tl-sm p-3 hover:shadow-md transition-all`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-900 text-sm">{msg.author.name}</span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-gray-500 text-xs">{msg.timestamp}</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-2">
                {msg.message}
              </p>

              <div className="flex items-center gap-1.5">
                <button className="flex items-center gap-1 px-2 py-1 bg-white bg-opacity-60 rounded-full text-xs hover:bg-opacity-100 transition-all">
                  {getReactionIcon(msg.reactionType)}
                  <span className="text-gray-700">{msg.reactions}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Live Indicator */}
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm text-gray-500">Live messages updating...</span>
      </div>

      {/* Empty State */}
      {mockMessages.length === 0 && (
        <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <Zap size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No messages yet</h3>
          <p className="text-gray-600 text-sm">Be the first to start the conversation!</p>
        </div>
      )}
    </div>
  );
}