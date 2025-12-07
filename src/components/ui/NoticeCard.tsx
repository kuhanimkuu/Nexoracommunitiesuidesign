import { motion } from 'motion/react';
import { Pin, ChevronDown, ChevronUp, Megaphone } from 'lucide-react';
import { useState } from 'react';

interface NoticeCardProps {
  notice: {
    id: string;
    title: string;
    content: string;
    author: string;
    timestamp: string;
    isPinned?: boolean;
    type?: 'announcement' | 'update' | 'alert';
  };
}

export function NoticeCard({ notice }: NoticeCardProps) {
  const [expanded, setExpanded] = useState(false);

  const typeStyles = {
    announcement: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
    update: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    alert: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
  };

  const type = notice.type || 'announcement';

  return (
    <motion.div
      className={`rounded-[18px] p-6 border-2 ${typeStyles[type]} relative overflow-hidden`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
    >
      {/* Pin or icon indicator */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 mt-1">
          {notice.isPinned ? (
            <Pin size={20} className="text-yellow-600" />
          ) : (
            <Megaphone size={20} className="text-blue-600" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-gray-900">{notice.title}</h3>
            {notice.isPinned && (
              <span className="px-2 py-0.5 bg-yellow-200 text-yellow-800 rounded-full text-xs">
                Pinned
              </span>
            )}
          </div>
          
          <div className="text-sm text-gray-600 mb-2">
            {notice.author} · {notice.timestamp}
          </div>

          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : '3rem' }}
            className="overflow-hidden"
          >
            <p className="text-gray-700 leading-relaxed">{notice.content}</p>
          </motion.div>

          {notice.content.length > 100 && (
            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm text-[#00B686] hover:text-[#3DD2A8] flex items-center gap-1"
              whileHover={{ x: 2 }}
            >
              {expanded ? (
                <>
                  Show less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read more <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
