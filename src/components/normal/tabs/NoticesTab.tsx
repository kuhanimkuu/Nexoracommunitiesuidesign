import React from 'react';
import { Bell, AlertCircle, Info, CheckCircle, Clock } from 'lucide-react';

interface Notice {
  id: string;
  type: 'urgent' | 'important' | 'info' | 'success';
  title: string;
  content: string;
  timestamp: string;
}

const mockNotices: Notice[] = [
  {
    id: '1',
    type: 'urgent',
    title: 'Community Guidelines Update',
    content: 'We\'ve updated our community guidelines to ensure a safer and more inclusive environment. Please review the new policies.',
    timestamp: '1 hour ago'
  },
  {
    id: '2',
    type: 'important',
    title: 'Upcoming Maintenance',
    content: 'Scheduled maintenance on Saturday, Dec 14th from 2-4 AM UTC. The community will be temporarily unavailable.',
    timestamp: '3 hours ago'
  },
  {
    id: '3',
    type: 'success',
    title: 'We reached 1,000 members!',
    content: 'Thank you all for being part of this amazing community. Here\'s to the next milestone!',
    timestamp: '1 day ago'
  },
  {
    id: '4',
    type: 'info',
    title: 'Weekly Community Call',
    content: 'Join us every Friday at 3 PM UTC for our weekly community call. Share updates, ask questions, and connect with other members.',
    timestamp: '2 days ago'
  }
];

interface NoticesTabProps {
  communityId: string;
}

export function NoticesTab({ communityId }: NoticesTabProps) {
  const getNoticeConfig = (type: Notice['type']) => {
    switch (type) {
      case 'urgent':
        return {
          icon: <AlertCircle size={20} />,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-700',
          iconColor: 'text-red-500'
        };
      case 'important':
        return {
          icon: <Bell size={20} />,
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          textColor: 'text-orange-700',
          iconColor: 'text-orange-500'
        };
      case 'success':
        return {
          icon: <CheckCircle size={20} />,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-700',
          iconColor: 'text-green-500'
        };
      default:
        return {
          icon: <Info size={20} />,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-700',
          iconColor: 'text-blue-500'
        };
    }
  };

  return (
    <div className="space-y-4">
      {mockNotices.map((notice) => {
        const config = getNoticeConfig(notice.type);
        
        return (
          <div
            key={notice.id}
            className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl p-5 hover:shadow-md transition-all duration-200`}
          >
            <div className="flex gap-3">
              <div className={`flex-shrink-0 ${config.iconColor}`}>
                {config.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className={`${config.textColor}`}>{notice.title}</h3>
                </div>
                
                <p className="text-gray-700 text-sm mb-3">
                  {notice.content}
                </p>
                
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <Clock size={12} />
                  <span>{notice.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Empty State */}
      {mockNotices.length === 0 && (
        <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <Bell size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No notices</h3>
          <p className="text-gray-600 text-sm">You're all caught up!</p>
        </div>
      )}
    </div>
  );
}
