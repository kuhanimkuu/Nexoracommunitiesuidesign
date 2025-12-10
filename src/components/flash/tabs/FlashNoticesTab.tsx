import React from 'react';
import { Zap, AlertTriangle, TrendingUp, PartyPopper } from 'lucide-react';

interface FlashNotice {
  id: string;
  type: 'urgent' | 'update' | 'milestone' | 'celebration';
  title: string;
  content: string;
  timestamp: string;
}

const mockNotices: FlashNotice[] = [
  {
    id: '1',
    type: 'urgent',
    title: 'Event ending in 30 minutes!',
    content: 'Make sure to submit your final entries and connect with participants before the event closes.',
    timestamp: '2m ago'
  },
  {
    id: '2',
    type: 'milestone',
    title: '200 participants milestone reached!',
    content: "We've just hit 200 live participants! Thank you for making this event amazing.",
    timestamp: '15m ago'
  },
  {
    id: '3',
    type: 'update',
    title: 'Next session starts soon',
    content: 'The Q&A session with industry experts begins in 10 minutes. Get your questions ready!',
    timestamp: '45m ago'
  },
  {
    id: '4',
    type: 'celebration',
    title: 'First successful launch of the day!',
    content: 'Congratulations to @alex for launching their MVP and getting their first customers! 🎉',
    timestamp: '1h ago'
  }
];

interface FlashNoticesTabProps {
  flashId: string;
  gradient: string;
}

export function FlashNoticesTab({ flashId, gradient }: FlashNoticesTabProps) {
  const getNoticeConfig = (type: FlashNotice['type']) => {
    switch (type) {
      case 'urgent':
        return {
          icon: <AlertTriangle size={22} />,
          gradient: 'from-red-500 to-orange-500',
          bgGradient: 'from-red-50 to-orange-50',
          borderColor: 'border-red-300',
          glowColor: 'shadow-red-200'
        };
      case 'milestone':
        return {
          icon: <TrendingUp size={22} />,
          gradient: 'from-purple-500 to-pink-500',
          bgGradient: 'from-purple-50 to-pink-50',
          borderColor: 'border-purple-300',
          glowColor: 'shadow-purple-200'
        };
      case 'celebration':
        return {
          icon: <PartyPopper size={22} />,
          gradient: 'from-yellow-500 to-orange-500',
          bgGradient: 'from-yellow-50 to-orange-50',
          borderColor: 'border-yellow-300',
          glowColor: 'shadow-yellow-200'
        };
      default:
        return {
          icon: <Zap size={22} />,
          gradient: 'from-blue-500 to-cyan-500',
          bgGradient: 'from-blue-50 to-cyan-50',
          borderColor: 'border-blue-300',
          glowColor: 'shadow-blue-200'
        };
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4 px-1">
        📢 Real-time event updates and announcements
      </div>

      {mockNotices.map((notice) => {
        const config = getNoticeConfig(notice.type);
        
        return (
          <div
            key={notice.id}
            className={`relative bg-gradient-to-br ${config.bgGradient} border-2 ${config.borderColor} rounded-2xl p-5 shadow-lg ${config.glowColor} hover:shadow-xl transition-all`}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${config.gradient} opacity-20 blur-sm rounded-2xl -z-10`} />
            
            <div className="flex gap-4">
              {/* Icon */}
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${config.gradient} text-white flex items-center justify-center shadow-md`}>
                {config.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">{notice.title}</h4>
                </div>
                
                <p className="text-gray-700 text-sm mb-2">
                  {notice.content}
                </p>
                
                <div className="text-xs text-gray-500">
                  {notice.timestamp}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Empty State */}
      {mockNotices.length === 0 && (
        <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <Zap size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No notices yet</h3>
          <p className="text-gray-600 text-sm">Event updates will appear here</p>
        </div>
      )}
    </div>
  );
}