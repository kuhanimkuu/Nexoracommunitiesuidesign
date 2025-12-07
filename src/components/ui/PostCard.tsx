import { motion } from 'motion/react';
import { MessageCircle, Heart, Share2, TrendingUp } from 'lucide-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface PostCardProps {
  post: {
    id: string;
    author: string;
    authorAvatar?: string;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    isHot?: boolean;
  };
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <motion.div
      className="bg-white rounded-[18px] p-6 border-2 border-gray-100 hover:border-gray-200 transition-all relative overflow-hidden group"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Activity stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${post.isHot ? 'bg-gradient-to-b from-orange-400 to-red-500' : 'bg-gradient-to-b from-[#00B686] to-[#3DD2A8]'}`} />
      
      <div className="pl-4">
        {/* Post header */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar src={post.authorAvatar} alt={post.author} size="sm" status="online" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-gray-900">{post.author}</span>
              {post.isHot && (
                <span className="inline-flex items-center gap-1 text-orange-500 text-sm">
                  <TrendingUp size={14} />
                  Hot
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">{post.timestamp}</span>
          </div>
        </div>

        {/* Post content */}
        <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

        {/* Reactions bar */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
              liked 
                ? 'bg-pink-50 text-pink-500' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={liked ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
            </motion.div>
            <span className="text-sm">{likeCount}</span>
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-gray-500 hover:bg-[#CFFFEA] hover:text-[#00B686] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <MessageCircle size={16} />
              {post.comments > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00B686] rounded-full shadow-[0_0_6px_rgba(0,182,134,0.6)]" />
              )}
            </div>
            <span className="text-sm">{post.comments}</span>
          </motion.button>

          <motion.button
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-gray-500 hover:bg-gray-50 transition-all ml-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
