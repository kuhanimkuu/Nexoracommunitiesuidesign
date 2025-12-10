import React from 'react';
import { Zap, Palette, Layout, Sparkles, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function FlashDesignSystem() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* HERO HEADER */}
      <motion.div
        className="relative overflow-hidden rounded-[40px] p-12 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] via-[#B84CFF] to-[#FF0055]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="text-8xl"
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              ⚡
            </motion.div>
            <div>
              <h1 className="text-6xl font-black mb-2">Flash Communities</h1>
              <p className="text-2xl text-white/90">Complete UI Design System</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-black mb-1">Hyper-Energetic</div>
              <div className="text-sm text-white/80">Playful, youthful, alive</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-black mb-1">Temporary</div>
              <div className="text-sm text-white/80">Disappears soon</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-black mb-1">Motion-Inspired</div>
              <div className="text-sm text-white/80">Diagonals, streaks, dynamic</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* COLOR SYSTEM */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Palette size={32} className="text-[#00D4FF]" />
          <h2 className="text-4xl font-black">Trigger-Based Color System</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event - Electric Blue */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00D4FF] to-[#0088FF] blur-xl opacity-50" />
            <div className="relative bg-white rounded-3xl p-8 border-4 border-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap size={32} className="text-[#0088FF]" />
                <h3 className="text-3xl font-black">Event</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Primary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF] shadow-lg" />
                    <span className="font-mono text-sm">#00D4FF</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Secondary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#0088FF] shadow-lg" />
                    <span className="font-mono text-sm">#0088FF</span>
                  </div>
                </div>
                <div className="h-16 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#0088FF] flex items-center justify-center text-white font-black">
                  Gradient Example
                </div>
              </div>
            </div>
          </motion.div>

          {/* Meetup - Fresh Green */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00FF88] to-[#00CC66] blur-xl opacity-50" />
            <div className="relative bg-white rounded-3xl p-8 border-4 border-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={32} className="text-[#00CC66]" />
                <h3 className="text-3xl font-black">Meetup</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Primary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#00FF88] shadow-lg" />
                    <span className="font-mono text-sm">#00FF88</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Secondary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#00CC66] shadow-lg" />
                    <span className="font-mono text-sm">#00CC66</span>
                  </div>
                </div>
                <div className="h-16 rounded-2xl bg-gradient-to-r from-[#00FF88] to-[#00CC66] flex items-center justify-center text-white font-black">
                  Gradient Example
                </div>
              </div>
            </div>
          </motion.div>

          {/* Discussion - Cyber Purple */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#B84CFF] to-[#8B3DFF] blur-xl opacity-50" />
            <div className="relative bg-white rounded-3xl p-8 border-4 border-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={32} className="text-[#8B3DFF]" />
                <h3 className="text-3xl font-black">Discussion</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Primary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#B84CFF] shadow-lg" />
                    <span className="font-mono text-sm">#B84CFF</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Secondary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#8B3DFF] shadow-lg" />
                    <span className="font-mono text-sm">#8B3DFF</span>
                  </div>
                </div>
                <div className="h-16 rounded-2xl bg-gradient-to-r from-[#B84CFF] to-[#8B3DFF] flex items-center justify-center text-white font-black">
                  Gradient Example
                </div>
              </div>
            </div>
          </motion.div>

          {/* Emergency - Neon Red */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF0055] to-[#FF3366] blur-xl opacity-50 animate-pulse" />
            <div className="relative bg-white rounded-3xl p-8 border-4 border-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  🚨
                </motion.div>
                <h3 className="text-3xl font-black">Emergency</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Primary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#FF0055] shadow-lg" />
                    <span className="font-mono text-sm">#FF0055</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Secondary</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#FF3366] shadow-lg" />
                    <span className="font-mono text-sm">#FF3366</span>
                  </div>
                </div>
                <div className="h-16 rounded-2xl bg-gradient-to-r from-[#FF0055] to-[#FF3366] flex items-center justify-center text-white font-black">
                  Gradient Example
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPONENT ANATOMY */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Layout size={32} className="text-[#B84CFF]" />
          <h2 className="text-4xl font-black">Component Anatomy</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Flash Card Anatomy */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
            <h3 className="text-2xl font-black mb-6">Flash Community Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-[#00D4FF]/10 to-[#0088FF]/10 rounded-xl border-2 border-[#00D4FF]">
                  <div className="font-black mb-2">1. Diagonal Accent Stripe</div>
                  <p className="text-sm text-gray-600">Skewed background element at 12° angle</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#00FF88]/10 to-[#00CC66]/10 rounded-xl border-2 border-[#00FF88]">
                  <div className="font-black mb-2">2. Trigger Badge</div>
                  <p className="text-sm text-gray-600">Gradient pill with icon, uppercase label</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#B84CFF]/10 to-[#8B3DFF]/10 rounded-xl border-2 border-[#B84CFF]">
                  <div className="font-black mb-2">3. Oversized Typography</div>
                  <p className="text-sm text-gray-600">3xl-5xl font size, black weight, tight leading</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-[#FF0055]/10 to-[#FF3366]/10 rounded-xl border-2 border-[#FF0055]">
                  <div className="font-black mb-2">4. Circular Timer</div>
                  <p className="text-sm text-gray-600">SVG progress ring with gradient stroke</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <div className="font-black mb-2">5. Glow Effects</div>
                  <p className="text-sm text-gray-600">box-shadow with color-matched blur (40px+)</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <div className="font-black mb-2">6. Asymmetric Layout</div>
                  <p className="text-sm text-gray-600">Uneven spacing, angled elements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timer Component */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
            <h3 className="text-2xl font-black mb-6">Flash Timer Component</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mb-3 text-sm font-bold text-gray-500">CIRCULAR</div>
                <div className="flex justify-center mb-3">
                  <div className="relative w-24 h-24">
                    <svg className="absolute -rotate-90" width="96" height="96" viewBox="0 0 96 96">
                      <circle cx="48" cy="48" r="42" fill="none" stroke="#E5E7EB" strokeWidth="6" />
                      <circle cx="48" cy="48" r="42" fill="none" stroke="url(#grad1)" strokeWidth="6" strokeDasharray="264" strokeDashoffset="66" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00D4FF" />
                          <stop offset="100%" stopColor="#0088FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-black">2h 15m</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Progress ring with gradient</p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-sm font-bold text-gray-500">BAR</div>
                <div className="flex items-center justify-center mb-3 h-24">
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#00FF88] to-[#00CC66]" />
                  </div>
                </div>
                <p className="text-xs text-gray-600">Linear progress bar</p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-sm font-bold text-gray-500">COMPACT</div>
                <div className="flex justify-center items-center mb-3 h-24">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#B84CFF] to-[#8B3DFF] text-white text-sm font-black">
                    45m 12s
                  </div>
                </div>
                <p className="text-xs text-gray-600">Inline badge style</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Clock size={32} className="text-[#FF0055]" />
          <h2 className="text-4xl font-black">Motion & Animation</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg text-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-3xl mb-2">📍</div>
            <div className="font-black mb-1">Scale Pulse</div>
            <div className="text-xs text-gray-600">1.0 → 1.05 → 1.0</div>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg text-center"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-black mb-1">Wiggle</div>
            <div className="text-xs text-gray-600">-10° → +10°</div>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg text-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-3xl mb-2">✨</div>
            <div className="font-black mb-1">Bounce</div>
            <div className="text-xs text-gray-600">Y-axis translation</div>
          </motion.div>

          <div className="p-6 bg-gradient-to-r from-[#00D4FF] to-[#0088FF] rounded-2xl shadow-lg text-center text-white">
            <div className="text-3xl mb-2 animate-neon-pulse">💫</div>
            <div className="font-black mb-1">Neon Pulse</div>
            <div className="text-xs text-white/80">Brightness + glow</div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
            <div className="relative">
              <div className="text-3xl mb-2">🌟</div>
              <div className="font-black mb-1">Shimmer</div>
              <div className="text-xs text-gray-600">Traveling highlight</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <motion.div
              className="text-3xl mb-2"
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.div>
            <div className="font-black mb-1">Diagonal Streak</div>
            <div className="text-xs text-gray-600">Traveling accent</div>
          </div>
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="bg-gray-900 text-white rounded-[40px] p-12">
        <h2 className="text-4xl font-black mb-8">Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-black mb-3 text-[#00D4FF]">Visual Identity</h3>
            <ul className="space-y-2 text-white/90">
              <li>• Hyper-energetic, playful, youthful</li>
              <li>• Feels temporary and urgent</li>
              <li>• Motion-inspired: diagonals, streaks, dynamics</li>
              <li>• Bold neon accents throughout</li>
              <li>• Oversized typography for impact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-3 text-[#00FF88]">Technical Specs</h3>
            <ul className="space-y-2 text-white/90">
              <li>• Border radius: 16-32px (rounded-2xl to rounded-[32px])</li>
              <li>• Glow shadows: 40-60px blur with color</li>
              <li>• Font weights: Bold (700) and Black (900)</li>
              <li>• Gradients: 45° and 135° angles</li>
              <li>• Real-time countdown updates (1s interval)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
