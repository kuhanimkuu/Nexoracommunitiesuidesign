import { useState } from 'react';
import { CommunitiesHome } from './components/CommunitiesHome';
import { CommunityDetail } from './components/CommunityDetail';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'community'>('home');
  const [selectedCommunity, setSelectedCommunity] = useState<any>(null);

  const handleCommunitySelect = (community: any) => {
    setSelectedCommunity(community);
    setCurrentView('community');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCommunity(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {currentView === 'home' ? (
        <CommunitiesHome onCommunitySelect={handleCommunitySelect} />
      ) : (
        <CommunityDetail 
          community={selectedCommunity} 
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}
