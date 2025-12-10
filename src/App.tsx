import React, { useState } from 'react';
import { NormalCommunities } from './components/NormalCommunities';
import { FlashCommunities } from './components/FlashCommunities';
import { DesignSystem } from './components/DesignSystem';
import { FlashDesignSystem } from './components/FlashDesignSystem';
import { Users, Zap, Palette, Sparkles } from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState<'normal' | 'flash' | 'design' | 'flash-design'>('flash');

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-900 mb-1">Nexora Communities</h1>
              <p className="text-gray-600 text-sm">
                {activeModule === 'normal' 
                  ? 'Connect with permanent communities' 
                  : activeModule === 'flash'
                  ? 'Join short-term flash events'
                  : activeModule === 'design'
                  ? 'Design system documentation'
                  : 'Flash design system'}
              </p>
            </div>
            
            {/* Module Switcher */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveModule('normal')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                  activeModule === 'normal'
                    ? 'bg-white text-[#38C4DA] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users size={18} />
                <span>Communities</span>
              </button>
              <button
                onClick={() => setActiveModule('flash')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                  activeModule === 'flash'
                    ? 'bg-gradient-to-r from-[#00D4FF] to-[#FF0055] text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Zap size={18} />
                <span>Flash</span>
              </button>
              <button
                onClick={() => setActiveModule('flash-design')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                  activeModule === 'flash-design'
                    ? 'bg-gradient-to-r from-[#B84CFF] to-[#FF0055] text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sparkles size={18} />
                <span>Flash Design</span>
              </button>
              <button
                onClick={() => setActiveModule('design')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                  activeModule === 'design'
                    ? 'bg-gradient-to-r from-[#38C4DA] to-[#C0C4FF] text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Palette size={18} />
                <span>Design</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {activeModule === 'normal' ? <NormalCommunities /> : 
         activeModule === 'flash' ? <FlashCommunities /> :
         activeModule === 'flash-design' ? <FlashDesignSystem /> :
         <DesignSystem />}
      </div>
    </div>
  );
}