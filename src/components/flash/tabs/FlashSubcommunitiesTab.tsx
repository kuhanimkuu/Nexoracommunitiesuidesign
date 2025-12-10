import React, { useState, useEffect } from 'react';
import { Zap, Users, Clock } from 'lucide-react';

interface SubFlash {
  id: string;
  name: string;
  description: string;
  participantCount: number;
  icon: string;
  endsAt: Date;
  gradient: string;
}

const mockSubFlash: SubFlash[] = [
  {
    id: '1',
    name: 'Design Lightning Round',
    description: '30-min rapid design feedback session',
    participantCount: 45,
    icon: '🎨',
    endsAt: new Date(Date.now() + 30 * 60 * 1000),
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    id: '2',
    name: 'Code Sprint',
    description: 'Build a feature in 1 hour challenge',
    participantCount: 67,
    icon: '⚡',
    endsAt: new Date(Date.now() + 55 * 60 * 1000),
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: '3',
    name: 'Pitch Practice',
    description: 'Perfect your elevator pitch with peers',
    participantCount: 23,
    icon: '🎯',
    endsAt: new Date(Date.now() + 20 * 60 * 1000),
    gradient: 'from-orange-500 to-red-500'
  }
];

interface FlashSubcommunitiesTabProps {
  flashId: string;
  gradient: string;
}

export function FlashSubcommunitiesTab({ flashId, gradient }: FlashSubcommunitiesTabProps) {
  const [timers, setTimers] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimers = () => {
      const newTimers: Record<string, string> = {};
      
      mockSubFlash.forEach(subflash => {
        const now = new Date().getTime();
        const end = subflash.endsAt.getTime();
        const distance = end - now;

        if (distance < 0) {
          newTimers[subflash.id] = 'Ended';
          return;
        }

        const minutes = Math.floor(distance / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        newTimers[subflash.id] = `${minutes}m ${seconds}s`;
      });

      setTimers(newTimers);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4 px-1">
        🔥 Mini flash events within this community
      </div>

      {mockSubFlash.map((subflash) => (
        <div
          key={subflash.id}
          className="relative bg-white rounded-2xl p-5 border-2 border-transparent hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer overflow-hidden group"
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${subflash.gradient} opacity-10 group-hover:opacity-15 transition-opacity`} />
          
          {/* Glowing Border Effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${subflash.gradient} opacity-30 blur-sm rounded-2xl -z-10 group-hover:opacity-50 transition-opacity`} />

          <div className="relative flex gap-4">
            {/* Icon */}
            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${subflash.gradient} flex items-center justify-center text-2xl shadow-lg`}>
              {subflash.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {subflash.name}
                </h4>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs">
                  <Zap size={10} />
                  <span>LIVE</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3">
                {subflash.description}
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                {/* Timer */}
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm bg-gradient-to-r ${subflash.gradient} text-white shadow-md`}>
                  <Clock size={14} />
                  <span>{timers[subflash.id] || '...'}</span>
                </div>

                {/* Participant Count */}
                <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                  <Users size={14} />
                  <span>{subflash.participantCount} live</span>
                </div>

                {/* Join Button */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className={`ml-auto px-4 py-1.5 rounded-lg text-sm text-white bg-gradient-to-r ${subflash.gradient} hover:shadow-lg transition-all`}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Empty State */}
      {mockSubFlash.length === 0 && (
        <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <Zap size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No sub-events</h3>
          <p className="text-gray-600 text-sm">Sub-events will appear here during the main flash</p>
        </div>
      )}
    </div>
  );
}
