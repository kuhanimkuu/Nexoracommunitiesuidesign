# Flash Communities - Complete UI Design System

## 🎯 Design Philosophy

**Flash Communities are temporary, high-energy spaces created for fast discussions, events, meetups, or emergencies. The design feels fun, alive, and urgent — completely different from normal Nexora communities.**

### Core Principles

1. **Hyper-energetic, playful, youthful**
   - Bold neon colors that demand attention
   - Oversized typography for impact
   - Motion-inspired layouts

2. **Temporary feeling**
   - Real-time countdown timers everywhere
   - "Disappearing soon" urgency
   - Visual indicators of limited-time nature

3. **Motion-inspired design**
   - Diagonal layouts and slashed shapes
   - Animated streaks and glows
   - Dynamic, asymmetric compositions

4. **Snapchat energy + event posters + Nexora polish**
   - Playful but not chaotic
   - High energy but still professional
   - Fun while maintaining brand consistency

---

## 🎨 Trigger-Based Color System

Flash Communities use **trigger types** to visually categorize content. Each trigger has its own color palette.

### Event (Electric Blue)

**Use case:** Formal events, launches, presentations, webinars

```css
Primary: #00D4FF    /* Electric cyan */
Secondary: #0088FF  /* Deep electric blue */
Gradient: linear-gradient(135deg, #00D4FF 0%, #0088FF 100%)
Glow: 0 0 40px rgba(0, 212, 255, 0.6)
```

**Icon:** Zap (⚡)

**Personality:** Professional energy, formal but exciting

### Meetup (Fresh Green)

**Use case:** Casual hangouts, networking, coffee chats

```css
Primary: #00FF88    /* Neon green */
Secondary: #00CC66  /* Fresh mint */
Gradient: linear-gradient(135deg, #00FF88 0%, #00CC66 100%)
Glow: 0 0 40px rgba(0, 255, 136, 0.6)
```

**Icon:** Users (👥)

**Personality:** Friendly, casual, social

### Discussion (Cyber Purple)

**Use case:** Brainstorms, debates, Q&A sessions

```css
Primary: #B84CFF    /* Hot purple */
Secondary: #8B3DFF  /* Cyber violet */
Gradient: linear-gradient(135deg, #B84CFF 0%, #8B3DFF 100%)
Glow: 0 0 40px rgba(184, 76, 255, 0.6)
```

**Icon:** MessageSquare (💬)

**Personality:** Intellectual, creative, collaborative

### Emergency (Neon Red)

**Use case:** Critical incidents, urgent situations, alerts

```css
Primary: #FF0055    /* Hot pink-red */
Secondary: #FF3366  /* Neon coral */
Gradient: linear-gradient(135deg, #FF0055 0%, #FF3366 100%)
Glow: 0 0 40px rgba(255, 0, 85, 0.6)
```

**Icon:** AlertCircle (🚨)

**Personality:** Urgent, critical, immediate action required

---

## 📐 Component Library

### 1. Flash Timer Component

**The most important component** - appears everywhere to create urgency.

#### Variants

**Circular (Primary)**
- SVG progress ring with gradient stroke
- Real-time countdown text in center
- Pulsing glow effect when < 1 hour remaining
- Sizes: sm (64px), md (96px), lg (128px), xl (160px)

```tsx
<FlashTimer 
  endsAt={Date} 
  variant="circular" 
  triggerType="event"
  size="lg"
/>
```

**Bar (Secondary)**
- Linear progress bar with gradient fill
- Shimmer animation traveling across
- Timer text overlaid in center
- Best for compact spaces

**Compact (Inline)**
- Pill-shaped badge
- Gradient background
- Pulse dot when urgent
- Text-only countdown

#### Technical Specs

- Updates every 1000ms via setInterval
- Format: 
  - `> 1 hour`: "5h 42m"
  - `> 1 minute`: "42m 15s"
  - `< 1 minute`: "15s"
- Progress calculation: `(remaining / 24hours) * 100`
- Urgent state triggers at < 60 minutes

### 2. Flash Community Card

**The main content card with multiple variants for different contexts.**

#### Default Variant (Full Card)

**Layout:**
- Asymmetric, layered design
- Left column: Large icon (6xl) + circular timer
- Right column: Trigger badge + oversized title (3xl) + description + footer
- Diagonal accent stripe in background
- Animated bottom accent bar (2px height)

**Elements:**
- **Trigger badge:** Inline-flex, rounded-lg, trigger-specific gradient background, uppercase label
- **Icon:** 6xl emoji, hover rotates 360° in 0.5s
- **Title:** text-3xl font-black leading-tight
- **Timer:** md size circular variant
- **Participants:** Avatar cluster (-space-x-3) + count
- **Action button:** Gradient background, shimmer effect, "Join Flash" text

**Hover Effects:**
- Y-axis lift: -4px
- Shadow elevation: shadow-xl → shadow-2xl
- Outer glow opacity increase (for live status)

**Live Status Indicator:**
- Floating badge: top-6 right-6
- "LIVE" text with pulsing white dot
- Scale animation: [1, 1.2, 1]
- Red-pink gradient background

#### Diagonal Variant (Event Board)

**Layout:**
- Angled top accent stripe (2px, -skew-x-12)
- Diagonal background accent (skew-x-12, translate-x-8)
- Compact content with emphasis on visual impact

**Hover:**
- Scale: 1.03
- Rotate: 1°
- Outer glow opacity: 30% → 50%

**Best for:** 2-column grids, "Happening Now" sections

#### Emergency Variant (Alert)

**Layout:**
- Compact inline design
- White/10 background with backdrop blur
- Border: 2px white/30
- Horizontal layout: icon + title/description + timer

**Hover:**
- Background: rgba(255,255,255,0.15)
- Scale: 1.02

**Best for:** Emergency banner sections

#### Ended Variant (Faded)

**Layout:**
- Minimal, desaturated
- Gray tones throughout
- No timer, no action buttons
- "Flash ended" status text

**Opacity:** 50-60% on entire card

### 3. Flash Communities List Screen

**An interactive event board with oversized hero and dynamic sections.**

#### Hero Header

- **Massive title:** text-6xl font-black
- **Animated emoji:** 7xl with rotation animation
- **Live count badge:** Gradient pill with pulsing dot, "X LIVE NOW"
- **Background glows:** Two large blur circles (96x96) positioned diagonally

#### Search Bar

- **Outer glow wrapper:** -inset-1 gradient blur
- **Large input:** py-4, text-lg, rounded-2xl
- **Icon:** 24px Search on left
- **Focus:** border-[#00D4FF]

#### Filter Chips

- **Neon style when active:**
  - Gradient background (trigger-specific)
  - White text
  - Outer glow (blur-xl, opacity-60, animate-pulse)
  - Scale: 1.05
  
- **Inactive state:**
  - White background
  - Gray-700 text
  - 2px gray-200 border
  - shadow-md

**Filters:** All Flashes, Events, Meetups, Discussions, Emergency

#### Emergency Banner (Highest Priority)

- **Intense outer glow:** -inset-2 gradient blur-2xl opacity-40 animate-pulse
- **Gradient background:** from-[#FF0055] to-[#FF3366]
- **Diagonal accent stripes:** 1px white/40 at top and bottom
- **Massive emoji:** 5xl with wiggle animation
- **Title:** text-3xl font-black white
- **Contains:** Emergency cards in inline layout

#### Happening Now Section

- **Angled header accent:** 2px vertical bar, gradient, -skew-y-2
- **Title:** text-4xl font-black
- **Layout:** 2-column grid (md:grid-cols-2)
- **Cards:** Diagonal variant with staggered entry animation

#### All Flashes Section

- **Same angled header pattern**
- **Dynamic title:** Changes based on active filter
- **Count badge:** "{count} active"
- **Layout:** Vertical list (space-y-5)
- **Cards:** Default variant

### 4. Flash Community Detail Screen

**A full-page view with hero countdown and tabs.**

#### Hero Countdown Section

**Massive, immersive header with:**
- **Outer glow:** -inset-4 gradient blur-3xl opacity-30 (pulsing for live)
- **Border:** 4px white
- **Background patterns:** Diagonal skewed accents, vertical gradient strip (2px), horizontal gradient strip (2px)
- **Diagonal streaks:** Animated lines traveling across (live/ending-soon only)

**Content layout:**
- **Left:** Giant icon (8xl) + info column
  - Trigger badge (rounded-xl, gradient)
  - Title (text-5xl font-black)
  - Description (text-lg)
  - Participant avatars (11x11, -space-x-3)
  
- **Right:** Massive circular timer (xl size)

**Status bar (below content):**
- Live: Red-pink gradient, pulsing, "LIVE RIGHT NOW"
- Ending Soon: Amber gradient, opacity pulse, "ENDING SOON - JOIN NOW!"

#### Tabs

- **Container:** White rounded-2xl, 2px border-gray-100
- **Active state:** Gradient background (trigger-specific), white text, shadow-lg
- **Tab labels:** "Posts", "Members", "Notices"
- **Icons:** MessageSquare, Users, Bell

#### Floating Join Button

- **Position:** Fixed bottom-8 right-8, z-50
- **Entry animation:** Scale from 0 with rotation
- **Gradient background** with shimmer overlay
- **Pulsing glow** (box-shadow animation)
- **Size:** px-8 py-4, text-lg font-black
- **Icons:** Sparkles (left, bouncing) + Zap (right, neon pulse)
- **Hover:** Scale 1.1, rotate 5°

---

## 🎭 Animation System

### Core Animations

#### 1. Neon Pulse
```css
@keyframes neon-pulse {
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 10px currentColor);
  }
  50% {
    filter: brightness(1.3) drop-shadow(0 0 20px currentColor);
  }
}
/* Duration: 2s, ease-in-out, infinite */
```

**Usage:** Icons, badges, accent elements

#### 2. Diagonal Streak
```css
@keyframes diagonal-streak {
  0% {
    transform: translateX(-100%) translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) translateY(100%);
    opacity: 0;
  }
}
/* Duration: 2s, ease-in-out, infinite */
```

**Usage:** Decorative accents on live cards

#### 3. Bounce Subtle
```css
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
/* Duration: 2s, ease-in-out, infinite */
```

**Usage:** Icons, CTAs, floating elements

#### 4. Shimmer
```css
@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
/* background-size: 200% 100% */
/* Duration: 3s, linear, infinite */
```

**Usage:** Progress bars, button overlays

#### 5. Rotate Glow
```css
@keyframes rotate-glow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Duration: 10s, linear, infinite */
```

**Usage:** Outer glow effects for urgent timers

### Motion Library (Motion/React)

**Spring Physics:**
```tsx
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

**Common Motions:**
- **Hover lift:** `whileHover={{ y: -4 }}`
- **Scale on hover:** `whileHover={{ scale: 1.05 }}`
- **Tap feedback:** `whileTap={{ scale: 0.95 }}`
- **Rotate wiggle:** `animate={{ rotate: [0, -10, 10, 0] }}`
- **Entry animation:** `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`

---

## 📏 Layout Guidelines

### Diagonal Elements

**Skew angles:**
- Background accents: `skew-x-12` or `skew-x-6`
- Header bars: `-skew-y-2`
- Rotated elements: `rotate-45` or `rotate-12`

**Positioning:**
- Use `transform` in combination with `translate-x` or `translate-y`
- Example: `transform skew-x-12 translate-x-1/2`

### Asymmetry

- **Avoid perfect centering** in Flash cards
- **Use uneven columns:** 60/40 splits instead of 50/50
- **Stagger elements:** Different Y-positions for adjacent items
- **Diagonal flow:** Content flows at angles, not straight down

### Glow Effects

**Layering:**
1. Base element
2. Inner glow (inset-0)
3. Outer glow (-inset-2 to -inset-4)
4. Far glow (blur-3xl, lower opacity)

**Blur levels:**
- Subtle: blur-lg (16px)
- Medium: blur-xl (24px)
- Strong: blur-2xl (40px)
- Intense: blur-3xl (64px)

**Opacity:**
- Resting: 20-30%
- Hover: 40-50%
- Active/Live: 60-80%

### Border Radius

- **Buttons/Badges:** rounded-xl (12px) to rounded-2xl (16px)
- **Cards:** rounded-2xl (16px) to rounded-3xl (24px)
- **Hero sections:** rounded-[32px] to rounded-[40px]
- **Pills:** rounded-full (9999px)

---

## 🎨 Typography

### Font Families

- **Display (Flash titles):** Space Grotesk
- **Body:** Inter

### Size Scale (Flash-specific)

```css
/* Oversized for impact */
.flash-hero-title { font-size: 3.75rem; }        /* 60px / text-6xl */
.flash-section-title { font-size: 2.25rem; }     /* 36px / text-4xl */
.flash-card-title { font-size: 1.875rem; }       /* 30px / text-3xl */
.flash-detail-title { font-size: 3rem; }         /* 48px / text-5xl */
.flash-mega-icon { font-size: 6rem; }            /* 96px / text-8xl */
```

### Weights

- **Black (900):** Titles, headings, CTAs, labels
- **Bold (700):** Subheadings, important text
- **Medium (500):** Body text (sparingly)

### Letter Spacing

- **Uppercase labels:** `tracking-wider` (0.05em) or `tracking-widest` (0.1em)
- **Titles:** `tracking-tight` (-0.025em)

### Leading

- **Tight leading:** `leading-tight` for multi-line titles
- **None:** `leading-none` for single-line impact text

---

## 🔧 Implementation Notes

### Real-time Updates

**Timer updates:**
```tsx
useEffect(() => {
  const updateTimer = () => {
    const now = new Date().getTime();
    const end = endsAt.getTime();
    const distance = end - now;
    
    // Update logic here
  };

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
  return () => clearInterval(interval);
}, [endsAt]);
```

**Progress calculation:**
```tsx
const maxDuration = 24 * 60 * 60 * 1000; // 24 hours
const progress = Math.max(0, Math.min(100, (distance / maxDuration) * 100));
```

### SVG Progress Rings

**Structure:**
```tsx
<svg className="absolute -rotate-90" width={96} height={96}>
  {/* Background circle */}
  <circle cx="48" cy="48" r="42" fill="none" stroke="#E5E7EB" strokeWidth="6" />
  
  {/* Progress circle */}
  <circle 
    cx="48" 
    cy="48" 
    r="42" 
    fill="none" 
    stroke="url(#gradient)" 
    strokeWidth="6"
    strokeDasharray={`${2 * Math.PI * 42}`}
    strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
    strokeLinecap="round"
  />
  
  {/* Gradient definition */}
  <defs>
    <linearGradient id="gradient">
      <stop offset="0%" stopColor="#00D4FF" />
      <stop offset="100%" stopColor="#0088FF" />
    </linearGradient>
  </defs>
</svg>
```

### Responsive Behavior

- **Desktop (md+):** 2-column grids, full card variants
- **Mobile:** Single column, compact variants
- **Tablet:** 2-column for diagonal cards, single for default

**Breakpoints:**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

---

## 📦 File Structure

```
/components
  /flash
    FlashTimer.tsx              # Reusable timer component
    FlashCommunitiesList.tsx    # Main list screen
    FlashCommunityCard.tsx      # Card with all variants
    FlashCommunityDetail.tsx    # Detail view with hero
    /tabs
      FlashDiscussionsTab.tsx
      FlashMembersTab.tsx
      FlashNoticesTab.tsx
      FlashSubcommunitiesTab.tsx
  FlashCommunities.tsx          # Main component with data
  FlashDesignSystem.tsx         # Documentation UI

/styles
  globals.css                   # All CSS variables and keyframes
```

---

## 🎯 Usage Examples

### Creating a new Flash Community

```tsx
const newFlash: FlashCommunity = {
  id: '7',
  name: 'Launch Party',
  description: 'Celebrate our new product release',
  category: 'Event',
  participantCount: 156,
  icon: '🎉',
  status: 'live',
  endsAt: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours
  gradient: 'from-pink-500 via-purple-500 to-indigo-500',
  joined: false,
  triggerType: 'event',
  coverImage: 'https://...'
};
```

### Rendering cards

```tsx
{/* Default full card */}
<FlashCommunityCard 
  flash={flashData} 
  onClick={handleClick} 
  variant="default" 
/>

{/* Diagonal for event boards */}
<FlashCommunityCard 
  flash={flashData} 
  onClick={handleClick} 
  variant="diagonal" 
/>

{/* Emergency inline */}
<FlashCommunityCard 
  flash={flashData} 
  onClick={handleClick} 
  variant="emergency" 
/>
```

### Timer placement

```tsx
{/* Hero countdown */}
<FlashTimer 
  endsAt={flash.endsAt} 
  variant="circular" 
  triggerType={flash.triggerType}
  size="xl"
/>

{/* Card timer */}
<FlashTimer 
  endsAt={flash.endsAt} 
  variant="circular" 
  triggerType={flash.triggerType}
  size="md"
/>

{/* Inline badge */}
<FlashTimer 
  endsAt={flash.endsAt} 
  variant="compact" 
  triggerType={flash.triggerType}
/>
```

---

## 🎨 Design Inspiration References

The Flash Communities design draws inspiration from:

1. **Snapchat Streaks** - Urgency, temporary nature, playful energy
2. **Twitch Stream Overlays** - Neon colors, live indicators, high energy
3. **Event Posters** - Bold typography, diagonal layouts, visual impact
4. **Spotify Wrapped** - Gradient backgrounds, data visualization, celebration
5. **Cyber-pop Aesthetics** - Neon glows, electric colors, futuristic feel
6. **Concert Tickets** - Countdown timers, limited availability, FOMO

---

## ✅ Design Checklist

When creating new Flash components, ensure:

- [ ] Trigger-specific colors are used consistently
- [ ] Real-time countdown timer is prominently displayed
- [ ] Typography is oversized (3xl-6xl for titles)
- [ ] At least one diagonal or angled element
- [ ] Glow effect on hover/active states
- [ ] Motion animation on at least one element
- [ ] Border radius is 16px minimum
- [ ] Font weight is Bold (700) or Black (900)
- [ ] Gradient uses 135° or 45° angle
- [ ] Emergency variant has pulsing animation
- [ ] Live status has ping dot indicator
- [ ] Asymmetric layout (not perfectly centered)

---

**End of Flash Communities Design Guide**

*For Normal Communities design system, see DESIGN_SPECIFICATION.md*
