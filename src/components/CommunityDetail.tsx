import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, Bell, Users as UsersIcon, Grid3x3, Settings, Edit, Plus } from 'lucide-react';
import { Button } from './ui/Button';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';
import { TabBar } from './ui/TabBar';
import { PostCard } from './ui/PostCard';
import { NoticeCard } from './ui/NoticeCard';
import { MemberRow } from './ui/MemberRow';

interface CommunityDetailProps {
  community: any;
  onBack: () => void;
}

const mockPosts = [
  {
    id: '1',
    author: 'Sarah Chen',
    authorAvatar: undefined,
    content: 'Just shipped our new design system documentation! Would love to hear your thoughts on the component architecture and naming conventions we used. Check it out and let me know what you think! 🎨',
    timestamp: '2 hours ago',
    likes: 24,
    comments: 8,
    isHot: true
  },
  {
    id: '2',
    author: 'Marcus Rodriguez',
    authorAvatar: undefined,
    content: 'Has anyone experimented with implementing dark mode using CSS custom properties vs Tailwind classes? I\'m curious about performance implications at scale.',
    timestamp: '5 hours ago',
    likes: 12,
    comments: 15
  },
  {
    id: '3',
    author: 'Emily Watson',
    authorAvatar: undefined,
    content: 'Quick tip: When building component libraries, always include accessibility props from the start. It\'s much harder to retrofit later. ARIA labels are your friends!',
    timestamp: '1 day ago',
    likes: 45,
    comments: 6
  }
];

const mockNotices = [
  {
    id: '1',
    title: 'Weekly Design Critique - Tomorrow 2PM EST',
    content: 'Join us for our weekly design critique session where we review community member projects and provide constructive feedback. Bring your work-in-progress designs!',
    author: 'Community Team',
    timestamp: '2 days ago',
    isPinned: true,
    type: 'announcement' as const
  },
  {
    id: '2',
    title: 'New Component Library Guidelines',
    content: 'We have updated our component contribution guidelines to include better documentation standards and accessibility requirements. Please review before submitting new components.',
    author: 'Admin',
    timestamp: '1 week ago',
    type: 'update' as const
  }
];

const mockMembers = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: undefined,
    role: 'admin' as const,
    status: 'online' as const,
    joinedDate: 'Jan 2024',
    postCount: 127
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    avatar: undefined,
    role: 'moderator' as const,
    status: 'online' as const,
    joinedDate: 'Feb 2024',
    postCount: 89
  },
  {
    id: '3',
    name: 'Emily Watson',
    avatar: undefined,
    role: 'member' as const,
    status: 'away' as const,
    joinedDate: 'Mar 2024',
    postCount: 45
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: undefined,
    role: 'member' as const,
    status: 'offline' as const,
    joinedDate: 'Mar 2024',
    postCount: 23
  }
];

export function CommunityDetail({ community, onBack }: CommunityDetailProps) {
  const [activeTab, setActiveTab] = useState('discussions');
  const [isJoined, setIsJoined] = useState(false);

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: <MessageSquare size={18} /> },
    { id: 'notices', label: 'Notices', icon: <Bell size={18} /> },
    { id: 'members', label: 'Members', icon: <UsersIcon size={18} /> },
    { id: 'subcommunities', label: 'Subcommunities', icon: <Grid3x3 size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-6">
          {/* Back button */}
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#00B686] mb-6 transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={20} />
            Back to Communities
          </motion.button>

          {/* Community Header Block */}
          <div className="flex items-start gap-6 mb-8">
            {/* Big avatar with depth */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Avatar 
                src={community.avatar} 
                alt={community.name} 
                size="xl" 
                glow 
              />
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-gray-900 mb-2">{community.name}</h1>
                <p className="text-gray-600 mb-4">{community.description}</p>
                
                <div className="flex items-center gap-4">
                  <Badge variant="success" icon={<UsersIcon size={14} />}>
                    {community.memberCount.toLocaleString()} members
                  </Badge>
                  
                  {isJoined ? (
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => setIsJoined(false)}
                    >
                      Joined ✓
                    </Button>
                  ) : (
                    <Button 
                      size="sm"
                      onClick={() => setIsJoined(true)}
                    >
                      Join Community
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tab Bar */}
          <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-900">Recent Discussions</h2>
            </div>
            
            {mockPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Notices Tab */}
        {activeTab === 'notices' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-900">Community Notices</h2>
            </div>
            
            {mockNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NoticeCard notice={notice} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-900">Community Members</h2>
              <Button size="sm" variant="secondary">
                Invite Members
              </Button>
            </div>

            {/* Admins & Mods Section */}
            <div className="bg-gradient-to-br from-[#CFFFEA] to-white rounded-[20px] p-6 border-2 border-[#00B686]/20">
              <h3 className="text-gray-900 mb-4">Community Leadership</h3>
              <div className="space-y-2">
                {mockMembers.filter(m => m.role !== 'member').map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <MemberRow member={member} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Members */}
            <div className="bg-white rounded-[20px] p-6 border-2 border-gray-100">
              <h3 className="text-gray-900 mb-4">All Members</h3>
              <div className="space-y-2">
                {mockMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <MemberRow member={member} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Subcommunities Tab */}
        {activeTab === 'subcommunities' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-900">Subcommunities</h2>
              <Button size="sm" icon={<Plus size={16} />}>
                Create Subcommunity
              </Button>
            </div>
            
            <motion.div
              className="flex flex-col items-center justify-center py-20 bg-white rounded-[20px] border-2 border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Grid3x3 size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-600">No subcommunities yet</p>
            </motion.div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-gray-900">Community Settings</h2>
            
            <div className="bg-white rounded-[20px] p-6 border-2 border-gray-100 space-y-6">
              <div>
                <h3 className="text-gray-900 mb-4">General</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Community Name</label>
                    <input
                      type="text"
                      defaultValue={community.name}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00B686] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Description</label>
                    <textarea
                      defaultValue={community.description}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00B686] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-gray-100">
                <h3 className="text-gray-900 mb-4">Privacy</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded accent-[#00B686]" />
                    <span className="text-gray-700">Make community private</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded accent-[#00B686]" defaultChecked />
                    <span className="text-gray-700">Allow member invitations</span>
                  </label>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-red-100">
                <h3 className="text-red-600 mb-4">Danger Zone</h3>
                <Button variant="ghost" className="text-red-600 hover:bg-red-50 border-2 border-red-200">
                  Delete Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating New Post Button (only on discussions tab) */}
      {activeTab === 'discussions' && (
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <Button 
            size="lg"
            icon={<Edit size={20} />}
            className="shadow-2xl"
          >
            New Post
          </Button>
        </motion.div>
      )}
    </div>
  );
}
