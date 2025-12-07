import { motion } from 'motion/react';
import { Users, Sparkles } from 'lucide-react';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Badge } from './Badge';

interface CommunityCardProps {
  community: {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar?: string;
    isNew?: boolean;
    category?: string;
  };
  onJoin?: () => void;
  onClick?: () => void;
}

export function CommunityCard({ community, onJoin, onClick }: CommunityCardProps) {
  return (
    <motion.div
      className="relative bg-white rounded-[20px] p-6 cursor-pointer border-2 border-gray-100 overflow-hidden group"
      whileHover={{ 
        y: -6, 
        boxShadow: '0 20px 40px rgba(0, 182, 134, 0.15)'
      }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Subtle gradient streak */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B686] via-[#3DD2A8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CFFFEA]/0 to-[#CFFFEA]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <div className="relative flex items-start gap-4">
        {/* Oversized avatar for personality */}
        <div className="flex-shrink-0">
          <Avatar src={community.avatar} alt={community.name} size="lg" glow />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-gray-900 tracking-tight">{community.name}</h3>
            {community.isNew && (
              <Badge variant="success" icon={<Sparkles size={12} />} pulse>
                New
              </Badge>
            )}
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{community.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Users size={16} />
              </motion.div>
              <span className="text-sm">{community.memberCount.toLocaleString()} members</span>
            </div>
            
            <Button 
              size="sm" 
              onClick={(e) => {
                e.stopPropagation();
                onJoin?.();
              }}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
