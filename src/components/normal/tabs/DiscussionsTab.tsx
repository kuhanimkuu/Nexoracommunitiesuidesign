import React from 'react';
import { Heart, MessageCircle, Clock } from 'lucide-react';

interface Post {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  title: string;
  content: string;
  timestamp: string;
  reactions: number;
  comments: number;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: { name: 'Sarah Chen' },
    title: 'Excited to share our new design system!',
    content: 'After months of work, we\'ve finally launched our comprehensive design system. It includes over 100 components, detailed guidelines, and accessibility best practices. Would love to hear your feedback!',
    timestamp: '2 hours ago',
    reactions: 24,
    comments: 8
  },
  {
    id: '2',
    author: { name: 'Michael Rodriguez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    title: 'Best practices for async team collaboration?',
    content: 'Our team is now fully remote across 4 time zones. What tools and processes have worked well for you in managing async collaboration?',
    timestamp: '5 hours ago',
    reactions: 42,
    comments: 15
  },
  {
    id: '3',
    author: { name: 'Emily Thompson' },
    title: 'Workshop: Advanced React Patterns',
    content: 'Hosting a workshop next week on advanced React patterns including compound components, render props, and custom hooks. Anyone interested?',
    timestamp: '1 day ago',
    reactions: 67,
    comments: 23
  },
  {
    id: '4',
    author: { name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    title: 'Need advice on scaling infrastructure',
    content: 'Our app has grown from 1k to 50k users in 3 months. Looking for recommendations on scaling our infrastructure efficiently.',
    timestamp: '2 days ago',
    reactions: 31,
    comments: 19
  }
];

interface DiscussionsTabProps {
  communityId: string;
}

export function DiscussionsTab({ communityId }: DiscussionsTabProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const colors = ['bg-purple-400', 'bg-teal-400', 'bg-indigo-400', 'bg-pink-400', 'bg-blue-400'];

  return (
    <div className="space-y-4">
      {mockPosts.map((post, index) => (
        <div 
          key={post.id}
          className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#38C4DA] hover:shadow-lg transition-all duration-200 cursor-pointer group"
        >
          <div className="flex gap-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
              ) : (
                <div className={`w-11 h-11 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white text-sm`}>
                  {getInitials(post.author.name)}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-900 text-sm">{post.author.name}</span>
                <span className="text-gray-400 text-xs">•</span>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Clock size={12} />
                  <span>{post.timestamp}</span>
                </div>
              </div>

              <h3 className="text-gray-900 mb-2 group-hover:text-[#38C4DA] transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.content}
              </p>

              {/* Reactions */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors text-sm">
                  <Heart size={16} />
                  <span>{post.reactions}</span>
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#38C4DA] transition-colors text-sm">
                  <MessageCircle size={16} />
                  <span>{post.comments}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Empty State Placeholder */}
      {mockPosts.length === 0 && (
        <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <MessageCircle size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No discussions yet</h3>
          <p className="text-gray-600 text-sm">Be the first to start a conversation!</p>
        </div>
      )}
    </div>
  );
}
