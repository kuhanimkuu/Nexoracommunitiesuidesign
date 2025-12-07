import { motion } from 'motion/react';
import { Crown, Shield, MessageCircle } from 'lucide-react';
import { Avatar } from './Avatar';
import { Badge } from './Badge';

interface MemberRowProps {
  member: {
    id: string;
    name: string;
    avatar?: string;
    role?: 'admin' | 'moderator' | 'member';
    status?: 'online' | 'offline' | 'away';
    joinedDate?: string;
    postCount?: number;
  };
}

export function MemberRow({ member }: MemberRowProps) {
  const roleIcons = {
    admin: <Crown size={14} />,
    moderator: <Shield size={14} />,
    member: null
  };

  const roleColors = {
    admin: 'success',
    moderator: 'info',
    member: 'default'
  } as const;

  return (
    <motion.div
      className="flex items-center gap-4 p-4 rounded-[16px] hover:bg-gray-50 transition-all group"
      whileHover={{ x: 4 }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Avatar 
        src={member.avatar} 
        alt={member.name} 
        size="md" 
        status={member.status}
      />
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-900">{member.name}</span>
          {member.role && member.role !== 'member' && (
            <Badge variant={roleColors[member.role]} icon={roleIcons[member.role]}>
              {member.role}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          {member.joinedDate && <span>Joined {member.joinedDate}</span>}
          {member.postCount !== undefined && (
            <span className="flex items-center gap-1">
              <MessageCircle size={12} />
              {member.postCount} posts
            </span>
          )}
        </div>
      </div>

      <motion.button
        className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-full bg-[#CFFFEA] text-[#00B686] hover:bg-[#00B686] hover:text-white transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Message
      </motion.button>
    </motion.div>
  );
}
