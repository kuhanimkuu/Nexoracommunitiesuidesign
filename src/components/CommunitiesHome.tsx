import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { SearchBar } from './ui/SearchBar';
import { FilterChip } from './ui/FilterChip';
import { CommunityCard } from './ui/CommunityCard';

interface CommunitiesHomeProps {
  onCommunitySelect: (community: any) => void;
}

const mockCommunities = [
  {
    id: '1',
    name: 'Design Systems',
    description: 'Share and discuss modern design systems, component libraries, and UI patterns for scalable products.',
    memberCount: 12847,
    avatar: undefined,
    isNew: true,
    category: 'design'
  },
  {
    id: '2',
    name: 'React Developers',
    description: 'A vibrant community for React enthusiasts to share knowledge, best practices, and build amazing applications.',
    memberCount: 24521,
    avatar: undefined,
    category: 'tech'
  },
  {
    id: '3',
    name: 'Startup Founders',
    description: 'Connect with fellow entrepreneurs, share your journey, and learn from experienced founders building the future.',
    memberCount: 8943,
    avatar: undefined,
    category: 'business'
  },
  {
    id: '4',
    name: 'Product Management',
    description: 'Discuss product strategy, roadmaps, and customer research with PMs from leading tech companies.',
    memberCount: 15632,
    avatar: undefined,
    category: 'business'
  },
  {
    id: '5',
    name: 'AI & Machine Learning',
    description: 'Explore the latest in artificial intelligence, share models, and discuss ethical AI implementation.',
    memberCount: 19234,
    avatar: undefined,
    isNew: true,
    category: 'tech'
  },
  {
    id: '6',
    name: 'UX Research',
    description: 'A space for UX researchers to share methodologies, findings, and improve user-centered design practices.',
    memberCount: 7621,
    avatar: undefined,
    category: 'design'
  }
];

const filters = [
  { id: 'all', label: 'All', icon: <Zap size={16} /> },
  { id: 'trending', label: 'Trending', icon: <TrendingUp size={16} /> },
  { id: 'new', label: 'New', icon: <Sparkles size={16} /> },
  { id: 'popular', label: 'Popular', icon: <Users size={16} /> }
];

export function CommunitiesHome({ onCommunitySelect }: CommunitiesHomeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCommunities = mockCommunities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'new') return matchesSearch && community.isNew;
    if (activeFilter === 'popular') return matchesSearch && community.memberCount > 15000;
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-2">
            <motion.h1
              className="text-gray-900 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Communities
              {/* Accent underline with glow */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00B686] to-[#3DD2A8] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00B686] rounded-full blur-md opacity-50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2 }}
              />
            </motion.h1>

            {/* Playful mascot badge */}
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B686] to-[#3DD2A8] flex items-center justify-center shadow-lg"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="text-white" size={24} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            placeholder="Search communities..."
          />
          
          <motion.div 
            className="flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {filters.map(filter => (
              <FilterChip
                key={filter.id}
                label={filter.label}
                icon={filter.icon}
                selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              />
            ))}
          </motion.div>
        </div>

        {/* Communities Grid */}
        {filteredCommunities.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            layout
          >
            {filteredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CommunityCard 
                  community={community}
                  onClick={() => onCommunitySelect(community)}
                  onJoin={() => console.log('Joined', community.name)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div
            className="flex flex-col items-center justify-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="w-32 h-32 mb-6 rounded-[24px] bg-gradient-to-br from-[#CFFFEA] to-[#00B686]/20 flex items-center justify-center"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Users size={48} className="text-[#00B686]" />
            </motion.div>
            
            <h2 className="text-gray-900 mb-2">Discover your people</h2>
            <p className="text-gray-600 mb-6">No communities found matching your search</p>
            
            <Button onClick={() => setSearchQuery('')}>
              Explore trending communities
            </Button>
          </motion.div>
        )}
      </div>

      {/* Floating Create Button */}
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Button 
          size="lg"
          icon={<Plus size={20} />}
          className="shadow-2xl"
        >
          Create Community
        </Button>
      </motion.div>
    </div>
  );
}
