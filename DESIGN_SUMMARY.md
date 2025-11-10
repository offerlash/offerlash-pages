# Offerlash Design System - Quick Reference

## 🎨 Primary Brand Colors

### Light Mode
```
Primary:     #6B5BFF (Purple)
Background:  #F6F7FC (Light Gray-Blue)
Surface:     #FFFFFF (White)
Text:        #111827 (Dark)
Border:      #E3E6F5 (Light Gray)
```

### Dark Mode
```
Primary:     #B4A8FF (Light Purple)
Background:  #0F1116 (Deep Dark)
Surface:     #191D26 (Dark Surface)
Text:        #E4E7F1 (Light)
Border:      #2D3342 (Dark Gray)
```

## 📏 Spacing Scale (4dp Grid)
```
nano:  3dp   │ micro: 6dp   │ xs:  8dp
sm:   12dp   │ md:   16dp   │ lg: 20dp
xl:   24dp   │ xxl:  32dp
```

## 🔲 Corner Radius
```
Small:  12dp  │ Medium: 16dp  │ Large: 24dp
Pill:  999dp  │ Field:  18dp
```

## 📐 Component Heights
```
Chip:         48dp
Card Min:     64dp
Featured:    140dp
Store Hero:  216dp
```

## 🎯 Key Design Principles

1. **Material 3 Based** - Uses Google's Material Design 3
2. **Accessibility First** - 44dp min touch targets, up to 2.4× scaling
3. **Full Dark Mode** - Complete light/dark theme support
4. **RTL Support** - Arabic language optimization
5. **Semantic Colors** - Purpose-driven color naming
6. **4dp Grid** - All spacing multiples of 4

## 🌈 Statistics Colors (Light → Dark)

| Metric     | Light BG    | Light Accent | Dark BG     | Dark Accent |
|------------|-------------|--------------|-------------|-------------|
| Views      | `#E6EDFF`   | `#3B6BFF`    | `#1C2840`   | `#7EA3FF`   |
| Copies     | `#F1ECFF`   | `#6759FF`    | `#241F3F`   | `#B2A5FF`   |
| Referrals  | `#E7F7EE`   | `#16A34A`    | `#153324`   | `#4FD38F`   |
| Coupons    | `#FFF3E7`   | `#F97316`    | `#352313`   | `#FFB173`   |

## ⚠️ Semantic Colors

### Success (Green)
- Light: `#22C55E` on `#E3F7ED`
- Dark:  `#49D27D` on `#123926`

### Warning (Orange)
- Light: `#F97316` on `#FFEDD5`
- Dark:  `#FFA353` on `#3D2812`

### Danger (Red)
- Light: `#EF4444` on `#FEE2E2`
- Dark:  `#FF6868` on `#3D2022`

## 🎭 Component Tokens

### Buttons
- Padding: `20dp × 14dp`
- Min Touch: `44dp`
- Corner: `16dp` (medium)

### Cards
- Padding: `20dp`
- Corner: `24dp` (large)
- Min Height: `64dp`

### Chips
- Height: `48dp`
- Padding: `12dp × 6dp`
- Corner: `20dp`

### Fields
- Corner: `18dp`
- Spacing: `6dp`

## 📱 Screen Layout

```
┌─────────────────────────────┐
│  Screen Padding             │
│  Horizontal: 20dp           │
│  Vertical: 24dp             │
│                             │
│  ┌───────────────────────┐  │
│  │  Section (20dp pad)   │  │
│  │  ┌─────────────────┐  │  │
│  │  │ Card (20dp pad) │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

## 🔍 Alpha Values (Opacity)

```
Outline:          8%  - Subtle borders
Overlay Low:     20%  - Light overlays
Disabled Surface: 40%  - Disabled backgrounds
Progress Track:  50%  - Loading indicators
Disabled Border: 60%  - Inactive borders
Gradient:        70%  - Gradient intensity
Disabled Content: 80%  - Inactive text/icons
```

## 🎨 Accent Color Palette

### Cyan (Info/Highlight)
- Light: `#1CCAD3` on `#E1F7F9`
- Dark:  `#4ED3D9` on `#0F383C`

### Yellow (Attention)
- Light: `#FFC241` on `#FFF6E5`
- Dark:  `#FFCB5C` on `#3A2E10`

### Rose (Special)
- Light: `#FF647C` on `#FFEEF1`
- Dark:  `#FF8299` on `#3D1C24`

---

**Technology**: Kotlin Multiplatform + Jetpack Compose  
**Framework**: Material Design 3  
**Platforms**: Android, iOS, (Web planned)
