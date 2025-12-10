import React from 'react';
import { Palette, Circle, Zap, Heart, Clock, Sparkles } from 'lucide-react';

export function DesignSystem() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Nexora Communities Design System</h1>
        <p className="text-gray-600 text-lg">
          Two distinct visual languages for permanent and temporary communities
        </p>
      </div>

      {/* NORMAL COMMUNITIES SECTION */}
      <section className="space-y-8">
        <div className="bg-gradient-to-r from-[#38C4DA] to-[#C0C4FF] rounded-3xl p-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <Heart size={32} />
            <div>
              <h2>Normal Communities Design</h2>
              <p className="text-white/90">Warm, expressive, social, and welcoming</p>
            </div>
          </div>
        </div>

        {/* Color Tokens */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Palette size={20} />
            Color Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-[#38C4DA] shadow-md" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Teal Primary</p>
                <p className="text-gray-600 font-mono text-xs">#38C4DA</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-[#C0C4FF] shadow-md" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Purple Primary</p>
                <p className="text-gray-600 font-mono text-xs">#C0C4FF</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-gradient-to-r from-[#38C4DA] to-[#C0C4FF] shadow-md" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Warm Gradient</p>
                <p className="text-gray-600 text-xs">Brand Identity</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-[#F5F7FA] border-2 border-gray-200" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Surface</p>
                <p className="text-gray-600 font-mono text-xs">#F5F7FA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Breakdown */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
          <h3 className="text-gray-900 mb-4">Component Breakdown</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#38C4DA] pl-4">
              <h4 className="text-gray-900 mb-2">Community Card</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cover image (320px height) with gradient overlay</li>
                <li>• Avatar cluster showing 4 member profile pictures</li>
                <li>• Category chip with color-coded backgrounds</li>
                <li>• Activity pulse indicator (green dot animation)</li>
                <li>• Member count with Users icon</li>
                <li>• Hover: Scale 1.01, lift 2px, gradient accent border</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#C0C4FF] pl-4">
              <h4 className="text-gray-900 mb-2">Filter Bar</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Floating sticky bar with backdrop blur</li>
                <li>• Filters: Popular, New, For You, Local, All</li>
                <li>• Active state: Gradient background, scale 1.05</li>
                <li>• Icons for visual clarity</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="text-gray-900 mb-2">Discovery Blocks</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Growing Fast: Emerald gradient icon, +247% badge</li>
                <li>• Nearby: Teal gradient icon, "Within 10 miles" badge</li>
                <li>• Recommended: Purple gradient icon, activity-based</li>
                <li>• 2-column grid on desktop, compact cards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Micro-interactions */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles size={20} />
            Micro-interactions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="font-semibold text-gray-900 mb-2">Card Hover</p>
              <p className="text-sm text-gray-600">Scale 1.01-1.02, Y-axis lift -2 to -4px, gradient accent border fade-in</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="font-semibold text-gray-900 mb-2">Activity Pulse</p>
              <p className="text-sm text-gray-600">Green dot with ping animation, indicates live activity</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="font-semibold text-gray-900 mb-2">Avatar Hover</p>
              <p className="text-sm text-gray-600">Scale 1.1 on individual avatar hover</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="font-semibold text-gray-900 mb-2">Button States</p>
              <p className="text-sm text-gray-600">Gradient for Join, solid for Joined/Pending, scale 1.05 on hover</p>
            </div>
          </div>
        </div>

        {/* Radius & Spacing */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Circle size={20} />
            Border Radius & Spacing
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#38C4DA] rounded-lg mx-auto mb-2" />
              <p className="text-sm font-semibold">12px (lg)</p>
              <p className="text-xs text-gray-600">Buttons, chips</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C0C4FF] rounded-xl mx-auto mb-2" />
              <p className="text-sm font-semibold">16px (xl)</p>
              <p className="text-xs text-gray-600">Cards, inputs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38C4DA] to-[#C0C4FF] rounded-2xl mx-auto mb-2" />
              <p className="text-sm font-semibold">20px (2xl)</p>
              <p className="text-xs text-gray-600">Main containers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-400 rounded-full mx-auto mb-2" />
              <p className="text-sm font-semibold">Full</p>
              <p className="text-xs text-gray-600">Avatars, badges</p>
            </div>
          </div>
        </div>
      </section>

      {/* FLASH COMMUNITIES SECTION */}
      <section className="space-y-8 mt-16">
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-600/20 animate-pulse" />
          <div className="relative flex items-center gap-4 mb-4">
            <Zap size={32} />
            <div>
              <h2>Flash Communities Design</h2>
              <p className="text-white/90">Hyperactive, time-sensitive, and visually electric</p>
            </div>
          </div>
        </div>

        {/* Electric Color Palette */}
        <div className="bg-white rounded-2xl p-6 border-2 border-yellow-300">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Palette size={20} />
            Electric Color Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-[#FFD700] shadow-lg shadow-yellow-400/50" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Yellow Primary</p>
                <p className="text-gray-600 font-mono text-xs">#FFD700</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-[#FF6B35] shadow-lg shadow-orange-400/50" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Orange Electric</p>
                <p className="text-gray-600 font-mono text-xs">#FF6B35</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-[#FF006E] shadow-lg shadow-pink-400/50" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Pink Neon</p>
                <p className="text-gray-600 font-mono text-xs">#FF006E</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 rounded-xl bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#FF006E] shadow-lg animate-gradient-shift" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Electric Gradient</p>
                <p className="text-gray-600 text-xs">High energy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Breakdown */}
        <div className="bg-white rounded-2xl p-6 border-2 border-yellow-300">
          <h3 className="text-gray-900 mb-4">Component Breakdown</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="text-gray-900 mb-2">Flash Card</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Large emoji icon (4rem) with circular progress ring</li>
                <li>• Real-time countdown timer with gradient background</li>
                <li>• Status badges: LIVE (pulsing red), ENDING SOON (orange), ACTIVE (green)</li>
                <li>• Avatar cluster showing live participants</li>
                <li>• Electric gradient background (10-20% opacity)</li>
                <li>• Hover: Scale 1.03, lift -4px, electric glow shadow</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-gray-900 mb-2">Countdown Progress Ring</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SVG circle with gradient stroke (yellow → orange → pink)</li>
                <li>• Updates every second via strokeDashoffset</li>
                <li>• Rotates 360° continuously for LIVE status</li>
                <li>• 4px stroke width, rounded linecap</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="text-gray-900 mb-2">Filter Chips</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All, Expiring Soon, {'<'} 1 Hour, Event, Meetup, Discussion, Emergency</li>
                <li>• Active state: Gradient background with pulse-glow animation</li>
                <li>• Each filter has unique gradient (red for Emergency, etc.)</li>
                <li>• Hover: Scale 1.05, border color change</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="text-gray-900 mb-2">Discovery Sections</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Happening Now: Red/pink gradient, pulsing glow, LIVE badge</li>
                <li>• Expiring Soon: Orange gradient, urgent copy, countdown emphasis</li>
                <li>• Electric glow effects around priority sections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Animations */}
        <div className="bg-white rounded-2xl p-6 border-2 border-yellow-300">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Clock size={20} />
            Animation System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <p className="font-semibold text-gray-900 mb-2">Pulse Glow</p>
              <p className="text-sm text-gray-600">Box shadow pulses from 20px to 30px blur, 2s infinite</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border border-orange-200">
              <p className="font-semibold text-gray-900 mb-2">Electric Pulse</p>
              <p className="text-sm text-gray-600">Opacity oscillates 0.6 to 1, 1.5s infinite</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200">
              <p className="font-semibold text-gray-900 mb-2">Gradient Shift</p>
              <p className="text-sm text-gray-600">Background position animates 0% to 100%, 3s infinite</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
              <p className="font-semibold text-gray-900 mb-2">Electric Streaks</p>
              <p className="text-sm text-gray-600">Horizontal lines travel across card, 2-2.5s infinite</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
              <p className="font-semibold text-gray-900 mb-2">Icon Wiggle (LIVE)</p>
              <p className="text-sm text-gray-600">Rotate -10° to +10°, 0.5s infinite with 2s delay</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
              <p className="font-semibold text-gray-900 mb-2">Scale Pulse</p>
              <p className="text-sm text-gray-600">Scale 1 to 1.05, 2s ease-in-out infinite</p>
            </div>
          </div>
        </div>

        {/* Typography & Tone */}
        <div className="bg-white rounded-2xl p-6 border-2 border-yellow-300">
          <h3 className="text-gray-900 mb-4">Typography & Tone</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="font-semibold text-gray-900 mb-2">Normal Communities Tone</p>
              <p className="text-sm text-gray-600">Community-driven • Expressive • Modern • Friendly • Welcoming • Organized</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-pink-50 rounded-xl border-2 border-yellow-300">
              <p className="font-semibold text-gray-900 mb-2">Flash Communities Tone</p>
              <p className="text-sm text-gray-600">URGENT • Fast • Temporary • High-energy • Event-driven • Time-sensitive • LIVE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Notes */}
      <section className="mt-16 bg-gray-900 text-white rounded-3xl p-8">
        <h2 className="mb-6">Implementation Notes</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="text-yellow-400 mb-2">Motion Library</h4>
            <p className="text-gray-300">Using Motion (motion/react) for smooth spring animations and gesture detection</p>
          </div>
          <div>
            <h4 className="text-yellow-400 mb-2">Real-time Updates</h4>
            <p className="text-gray-300">Flash countdown timers update every 1000ms via useEffect intervals</p>
          </div>
          <div>
            <h4 className="text-yellow-400 mb-2">Responsive Behavior</h4>
            <p className="text-gray-300">2-column grid on desktop (md:grid-cols-2), single column on mobile, sticky filter bar</p>
          </div>
          <div>
            <h4 className="text-yellow-400 mb-2">CSS Variables</h4>
            <p className="text-gray-300">All colors defined as CSS custom properties in globals.css for easy theming</p>
          </div>
        </div>
      </section>
    </div>
  );
}
