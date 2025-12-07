import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="border-b-2 border-gray-100">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative pb-4 transition-colors duration-200 flex items-center gap-2
              ${activeTab === tab.id ? 'text-[#00B686]' : 'text-gray-500 hover:text-gray-700'}
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
            
            {/* Animated sliding beam underline */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B686] to-[#3DD2A8]"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            
            {/* Gradient glow on active */}
            {activeTab === tab.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#CFFFEA]/20 to-transparent -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
