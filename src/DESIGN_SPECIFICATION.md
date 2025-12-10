# Nexora Communities Design Specification

## Executive Summary

This document provides complete design specifications for Nexora's dual-community system: **Normal Communities** (permanent, warm, social) and **Flash Communities** (temporary, urgent, electric). Both designs maintain Nexora's brand identity while creating distinctly different user experiences.

---

## 1. NORMAL COMMUNITIES DESIGN

### Design Philosophy
**Tone:** Community-driven, expressive, modern, friendly, welcoming, organized  
**Goal:** Create a warm, social environment that encourages long-term connections and engagement

### Color System

#### Primary Colors
```css
--normal-teal-primary: #38C4DA      /* Main brand teal */
--normal-teal-light: #5DD5E8        /* Hover states, highlights */
--normal-teal-dark: #2FB3C9         /* Active states */
--normal-purple-primary: #C0C4FF    /* Secondary brand color */
--normal-purple-light: #D4D7FF      /* Backgrounds */
--normal-purple-dark: #A8ACFF       /* Accents */
```

#### Gradients
```css
--normal-gradient-warm: linear-gradient(135deg, #38C4DA 0%, #C0C4FF 100%)
--normal-gradient-soft: linear-gradient(135deg, rgba(56, 196, 218, 0.1) 0%, rgba(192, 196, 255, 0.1) 100%)
```

#### Category-Specific Colors
- **Technology:** `bg-blue-100 text-blue-700 border-blue-200`
- **Design:** `bg-purple-100 text-purple-700 border-purple-200`
- **Product:** `bg-teal-100 text-teal-700 border-teal-200`
- **Marketing:** `bg-orange-100 text-orange-700 border-orange-200`
- **Entrepreneurship:** `bg-emerald-100 text-emerald-700 border-emerald-200`

### Component Breakdown

#### 1. Communities List Screen

**Header Section**
- Title: "Discover Communities"
- Subtitle: "Join communities that match your interests and connect with like-minded people"
- Typography: Space Grotesk, h2 size, text-gray-900

**Search Bar**
- Background: White
- Border: 2px solid gray-200, focus: ring-2 ring-[#38C4DA]
- Padding: py-3.5 px-4 pl-12 (for icon)
- Border radius: 20px (rounded-2xl)
- Icon: Search (lucide-react), left-4, gray-400
- Hover: shadow-md, Focus: shadow-lg

**Floating Filter Bar**
- Container: Sticky top-4, backdrop-blur-md, bg-white/80
- Border: 1px solid gray-200/50
- Padding: p-2
- Border radius: 20px
- Shadow: shadow-lg

**Filter Chips**
- Filters: Popular (TrendingUp), New (Sparkles), For You (Filter), Local (MapPin), All
- Active state:
  - Background: `bg-gradient-to-r from-[#38C4DA] to-[#C0C4FF]`
  - Text: white
  - Shadow: shadow-md
  - Scale: 1.05
- Inactive state:
  - Background: bg-gray-50
  - Text: text-gray-600
  - Hover: bg-gray-100, scale-102

**Discovery Blocks**

*Growing Fast Section*
- Header icon: 8x8 rounded-full, bg-gradient-to-br from-emerald-400 to-teal-500
- Badge: "+247% this week", bg-gray-100, text-xs text-gray-500
- Layout: 2-column grid (md:grid-cols-2), gap-4
- Cards: Compact variant with trending indicators

*Nearby Section*
- Header icon: 8x8 rounded-full, bg-gradient-to-br from-[#38C4DA] to-[#2FB3C9]
- Badge: "Within 10 miles", bg-gray-100, text-xs text-gray-500
- Cards: Compact variant with location badges

*Recommended for You*
- Header icon: 8x8 rounded-full, bg-gradient-to-br from-[#C0C4FF] to-[#A8ACFF]
- Badge: "Based on your activity", bg-gray-100, text-xs
- Cards: Compact variant

#### 2. Community Card

**Default Variant (Full Card)**

*Cover Section (160px height)*
- Image or gradient background (5 gradient variations)
- Gradient overlay: bg-gradient-to-t from-black/60 via-black/20 to-transparent
- Activity pulse indicator: Green dot (w-3 h-3) with ping animation, top-4 left-4
- Hover: Scale 1.1 on cover image (500ms transition)

*Content Section*
- Padding: p-5
- Category chip: Inline-flex, px-3 py-1.5, rounded-full, text-xs, color-coded border
- Title: h3, text-gray-900, hover:text-[#38C4DA]
- Description: text-sm, text-gray-600, line-clamp-2, mb-4

*Footer*
- Avatar cluster: 4 avatars, -space-x-3, w-8 h-8, rounded-full, border-2 border-white
- Avatar hover: scale-110
- Member count: Users icon (16px), text-sm text-gray-600
- Join button: px-5 py-2.5, rounded-xl (16px), gradient background

*Hover Effects*
- Entire card: Scale 1.01, Y-lift -2px
- Border: gray-200 → [#38C4DA]
- Shadow: shadow-sm → shadow-xl
- Gradient accent border overlay: opacity 0 → 100

**Compact Variant**

*Cover Section (128px height)*
- Same as default but reduced height
- Trending badge: top-3 right-3, bg-emerald-500, animate-pulse, "+45%"
- Location badge: top-3 right-3, bg-[#38C4DA], "2.3 mi"

*Content Section*
- Padding: p-4
- Smaller avatar cluster: w-6 h-6, -space-x-2
- Smaller button: px-3 py-1.5, text-xs

*Hover Effects*
- Scale: 1.02, Y-lift: -4px

### Border Radius System
- Buttons/Chips: 12px (rounded-lg to rounded-xl)
- Cards/Containers: 16-20px (rounded-xl to rounded-2xl)
- Avatars/Badges: 9999px (rounded-full)
- Cover images: 12px (rounded-xl)

### Shadow System
```css
--shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.06)       /* Default card */
--shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.12)      /* Card hover */
--shadow-active: 0 12px 32px rgba(0, 0, 0, 0.16)    /* Active/focus */
```

### Micro-interactions

1. **Card Hover**
   - Duration: 200-300ms
   - Easing: spring (stiffness: 300, damping: 20)
   - Scale: 1.01-1.02
   - Y-offset: -2px to -4px
   - Border color transition
   - Shadow elevation

2. **Activity Pulse**
   - Green dot: w-3 h-3, bg-emerald-400, animate-pulse
   - Outer ring: absolute inset-0, animate-ping
   - Indicates live activity

3. **Avatar Cluster**
   - Individual hover: scale-110, z-index elevation
   - Smooth transition: 200ms

4. **Button States**
   - Join: gradient from-[#38C4DA] to-[#5DD5E8], hover:shadow-lg, hover:scale-105
   - Joined: bg-white/90 border-2 border-gray-300
   - Pending: bg-orange-50 border-2 border-orange-200

5. **Filter Bar**
   - Sticky position with backdrop blur
   - Active filter: scale-105, gradient background
   - Smooth transitions: 200ms

---

## 2. FLASH COMMUNITIES DESIGN

### Design Philosophy
**Tone:** URGENT, Fast, Temporary, High-energy, Event-driven, Time-sensitive, LIVE  
**Goal:** Create electric urgency and FOMO to drive immediate engagement

### Color System

#### Primary Colors
```css
--flash-yellow-primary: #FFD700      /* Gold/electric yellow */
--flash-yellow-neon: #FFEB3B         /* Bright neon yellow */
--flash-orange-electric: #FF6B35     /* Electric orange */
--flash-pink-neon: #FF006E           /* Hot pink */
--flash-purple-electric: #8338EC     /* Electric purple */
```

#### Gradients
```css
--flash-gradient-electric: linear-gradient(135deg, #FFD700 0%, #FF6B35 50%, #FF006E 100%)
--flash-gradient-neon: linear-gradient(135deg, #FFEB3B 0%, #8338EC 100%)
```

#### Status-Specific Gradients
- **LIVE:** `from-red-500 via-pink-500 to-purple-600`
- **ENDING SOON:** `from-orange-500 via-red-500 to-pink-500`
- **ACTIVE:** `from-emerald-500 to-teal-500`
- **ENDED:** `from-gray-400 to-gray-500`

#### Glow Effects
```css
--flash-glow-yellow: 0 0 20px rgba(255, 215, 0, 0.5)
--flash-glow-pink: 0 0 20px rgba(255, 0, 110, 0.5)
shadow-[0_0_30px_rgba(255,0,110,0.5)]  /* LIVE state */
```

### Component Breakdown

#### 1. Flash Communities List Screen

**Electric Header**
- Background glows: w-20 h-20 blur-3xl, yellow-400/20 and pink-400/20, animate-pulse
- Icon container: 12x12, rounded-2xl, gradient from-yellow-400 via-orange-500 to-pink-500
- Icon animation: Wiggle rotate [0, 10, -10, 0], 0.5s, repeat with 2s delay
- Zap icon: 24px, white

**Electric Search Bar**
- Border: 2px solid yellow-300 (not gray!)
- Focus: ring-2 ring-yellow-400
- Shadow: shadow-md, hover:shadow-lg, focus:shadow-xl
- Background: white

**Hyperactive Filter Chips**
- Filters with unique gradients:
  - All: yellow-400 to orange-500
  - Expiring Soon: red-500 to pink-500
  - < 1 Hour: orange-500 to red-600
  - Event: purple-500 to indigo-500
  - Meetup: teal-500 to cyan-500
  - Discussion: blue-500 to indigo-500
  - Emergency: red-600 to rose-600

- Active state:
  - Gradient background (filter-specific)
  - Text: white
  - Shadow: shadow-lg
  - Animation: animate-pulse-glow

- Inactive state:
  - Background: white
  - Border: 2px solid gray-200, hover:yellow-300

**Happening Now Section (Ultra Priority)**
- Electric glow wrapper: -inset-2, gradient yellow-400 via-red-500 to-pink-500, blur-xl, opacity-30, animate-pulse
- Container: bg-white, rounded-2xl, border-2 border-yellow-400, shadow-2xl, p-6
- Header icon: w-10 h-10, gradient from-red-500 to-pink-600, scale animation [1, 1.2, 1]
- LIVE badge: bg-red-500, text-white, rounded-full, animate-pulse, ping dot

**Expiring Soon Section**
- Icon: w-9 h-9, gradient from-orange-500 to-red-500, wiggle animation
- Badge: "Last chance to join!", bg-orange-100, text-orange-600, border-orange-200
- 2-column grid, compact cards

**Active Events Section**
- Icon: w-9 h-9, gradient from-yellow-400 to-orange-500
- Count badge: "{count} active", bg-gray-100, text-gray-500
- List view (space-y-4), full cards

#### 2. Flash Community Card

**Default Variant (Full Card)**

*Circular Countdown Progress Ring*
- SVG viewBox: 96x96
- Background circle: r=44, stroke=#E5E7EB, strokeWidth=4
- Progress circle: r=44, gradient stroke, strokeWidth=4, rounded linecap
- Gradient: #FFD700 → #FF6B35 → #FF006E
- Updates: strokeDashoffset based on time remaining
- LIVE animation: Rotate 360°, 3s infinite

*Icon Container*
- Size: w-20 h-20, rounded-3xl
- Background: gradient from flash.gradient
- Text: 4xl emoji
- Hover: rotate 5°

*Status Badges*
- **LIVE:**
  - Gradient: red-500 to pink-600
  - Scale animation: [1, 1.1, 1], 1s infinite
  - Ping dot: w-2 h-2, white, animate-ping
  - Text: "LIVE", font-semibold

- **ENDING SOON:**
  - Gradient: orange-500 to red-500
  - Flame icon: 12px
  - Animate: pulse
  - Text: "ENDING SOON", font-semibold

- **ACTIVE:**
  - Gradient: emerald-500 to teal-500
  - Text: "ACTIVE", font-semibold

*Content*
- Title: h3, text-gray-900
- Description: text-sm, line-clamp-2, text-gray-600
- Padding: p-6

*Electric Countdown Timer*
- Container: px-4 py-2, rounded-xl, gradient background (status-specific)
- Clock icon: 18px
- Time text: font-bold, white
- Hover: scale-105

*Participant Avatar Cluster*
- 4 avatars: w-9 h-9, -space-x-3, rounded-full, border-3 border-white
- Individual hover: scale-1.2, z-index elevation
- Count: font-semibold, "live" text in gray-500

*Join Flash Button*
- Padding: px-6 py-2.5, rounded-xl
- Gradient: flash.gradient
- Text: font-semibold, white
- Icon: Zap, 16px
- Hover: shadow-xl, scale-105

*Electric Streaks (LIVE/ENDING SOON only)*
- Top streak: w-32 h-1, gradient yellow-400, animate x: [-100, 500], 2s infinite
- Bottom streak: w-40 h-1, gradient pink-400, animate x: [500, -100], 2.5s infinite

*Hover Effects*
- Scale: 1.01, Y-lift: -3px
- Border glow: status-specific shadow
- Background gradient opacity: 10% → 20%
- LIVE: Electric border pulse (yellow-400, animate-pulse)

**Compact Variant**

*Countdown Ring*
- SVG viewBox: 80x80
- Circle radius: 36
- StrokeWidth: 3
- Position: absolute -inset-1

*Icon Container*
- Size: w-16 h-16, rounded-2xl
- Text: 3xl emoji

*Status Badges*
- Same as default but smaller padding: px-3 py-1.5

*Content*
- Padding: p-5
- Title: h4
- Smaller countdown: px-3 py-1.5, text-sm
- Smaller avatars: w-6 h-6, -space-x-2

*Hover Effects*
- Scale: 1.03, Y-lift: -4px

### Animation System

#### 1. Pulse Glow
```css
@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
  }
}
/* Duration: 2s, infinite */
```

#### 2. Electric Pulse
```css
@keyframes electric-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
/* Duration: 1.5s, infinite */
```

#### 3. Gradient Shift
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
/* Background-size: 200% 200%, Duration: 3s, infinite */
```

#### 4. Scale Pulse
```css
@keyframes scale-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
/* Duration: 2s, ease-in-out, infinite */
```

#### 5. Icon Wiggle (LIVE)
```css
motion.div animate={{ rotate: [0, 10, -10, 0] }}
transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
```

#### 6. Electric Streaks
```css
/* Top streak */
motion.div animate={{ x: [-100, 500], opacity: [0, 1, 0] }}
transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}

/* Bottom streak */
motion.div animate={{ x: [500, -100], opacity: [0, 1, 0] }}
transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
```

### Timer Logic

**Countdown Update (1000ms interval)**
```javascript
const hours = Math.floor(distance / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

Display format:
- > 1 hour: "{hours}h {minutes}m"
- > 1 minute: "{minutes}m {seconds}s"
- < 1 minute: "{seconds}s"
```

**Progress Calculation**
```javascript
// Assuming 24h max duration
const maxDuration = 24 * 60 * 60 * 1000;
const progress = ((maxDuration - distance) / maxDuration) * 100;
```

---

## 3. TYPOGRAPHY SYSTEM

### Font Families
- **Headings:** Space Grotesk (h1-h4)
- **Body:** Inter (p, spans, labels)

### Font Sizes (from globals.css)
- h1: 2rem (32px), font-weight: 700, letter-spacing: -0.02em
- h2: 1.5rem (24px), font-weight: 600, letter-spacing: -0.01em
- h3: 1.25rem (20px), font-weight: 600
- h4: 1rem (16px), font-weight: 600
- Body: Default (16px), line-height: 1.6

### Usage Guidelines
- **DO NOT** use Tailwind font-size, font-weight, or line-height classes
- Rely on semantic HTML (h1, h2, h3, h4, p) for typography
- Only override when explicitly requested by user

---

## 4. SPACING & LAYOUT

### Padding Scale
- xs: p-2 (8px)
- sm: p-3 (12px)
- md: p-4 (16px)
- lg: p-5 (20px)
- xl: p-6 (24px)
- 2xl: p-8 (32px)

### Gap Scale
- Cards in grid: gap-4 (16px)
- Avatar clusters: -space-x-2 to -space-x-3
- Flex items: gap-2 to gap-4

### Max Width
- Content container: max-w-4xl to max-w-5xl
- Centered: mx-auto

---

## 5. IMPLEMENTATION NOTES

### Motion Library
- Package: `motion/react` (formerly Framer Motion)
- Import: `import { motion } from 'motion/react'`
- Spring config: stiffness: 300, damping: 20

### Real-time Updates
- Flash countdown: useEffect with 1000ms setInterval
- Cleanup: return () => clearInterval(interval)

### Responsive Behavior
- Grid: `grid-cols-1 md:grid-cols-2`
- Filter bar: `overflow-x-auto` with no-scrollbar
- Sticky elements: `sticky top-4 z-10`

### CSS Variables Location
- File: `/styles/globals.css`
- All colors, gradients, shadows, and radius tokens defined in `:root`

### State Management
- Local useState for filters, search, module switching
- No external state library needed

---

## 6. CONTRAST SUMMARY

| Aspect | Normal Communities | Flash Communities |
|--------|-------------------|-------------------|
| **Colors** | Teal #38C4DA, Purple #C0C4FF | Yellow #FFD700, Orange #FF6B35, Pink #FF006E |
| **Gradients** | Soft, warm (teal to purple) | Electric, neon (yellow to orange to pink) |
| **Animation** | Subtle (pulse, scale 1.01-1.02) | Hyperactive (glow, streaks, rotate, scale 1.03-1.05) |
| **Borders** | 2px gray-200, hover: teal | 2px yellow-300, electric glow shadows |
| **Tone** | Friendly, welcoming, calm | URGENT, fast, time-sensitive |
| **Icons** | Users, TrendingUp, Sparkles, MapPin | Zap, Flame, Clock, AlertCircle |
| **Shadows** | Soft (0-8px blur) | Strong glows (20-30px blur with color) |
| **Typography** | Standard weights, readable | Bold, uppercase for urgency (LIVE, ENDING SOON) |
| **Card Elements** | Cover image, avatar cluster, category chip | Countdown ring, emoji icon, timer, electric streaks |

---

## 7. DELIVERABLES CHECKLIST

### Files Created/Modified
- ✅ `/styles/globals.css` - Extended with design tokens and animations
- ✅ `/components/normal/CommunitiesList.tsx` - Filters + discovery blocks
- ✅ `/components/normal/CommunityCard.tsx` - Cover images + avatar clusters
- ✅ `/components/flash/FlashCommunitiesList.tsx` - Hyperactive filters + sections
- ✅ `/components/flash/FlashCommunityCard.tsx` - Countdown rings + electric effects
- ✅ `/components/DesignSystem.tsx` - Documentation component
- ✅ `/App.tsx` - Added Design tab
- ✅ `/DESIGN_SPECIFICATION.md` - This comprehensive guide

### Features Implemented
- ✅ Two distinct visual languages
- ✅ Individual component breakdowns
- ✅ Microinteraction notes
- ✅ Color, radius, and typography tokens
- ✅ Implementation-ready React components
- ✅ Motion/spring animations
- ✅ Real-time countdown timers
- ✅ SVG progress rings
- ✅ Avatar clusters
- ✅ Discovery blocks
- ✅ Filter systems
- ✅ Electric effects (glows, streaks, pulses)

---

## 8. USAGE GUIDE

### Viewing the Designs
1. Normal Communities: Click "Communities" tab
2. Flash Communities: Click "Flash" tab
3. Design System Documentation: Click "Design" tab

### Testing Interactions
- Hover over community cards to see lift and gradient effects
- Click filter chips to see active state animations
- Watch Flash countdown timers update in real-time
- Observe LIVE badges pulsing and icon wiggling
- See electric streaks on ending-soon events

### Customization
- All colors in `/styles/globals.css` as CSS variables
- Modify gradient combinations in component files
- Adjust animation durations in keyframes
- Change spring physics in Motion components

---

**End of Specification**
