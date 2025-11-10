# Offerlash Design System

Complete design system extracted from the Offerlash mobile app (Kotlin Multiplatform + Compose).

## 🎨 Color Palette

### Light Mode

#### Primary Colors
- **Primary**: `#6B5BFF` - Main brand purple
- **Primary Light**: `#E6E3FF` - Light purple container
- **Material Primary**: `#3C6090` - Blue accent
- **Primary Container**: `#D4E3FF` - Light blue container

#### Background & Surface
- **Background**: `#F6F7FC` - Light gray-blue
- **Surface**: `#FFFFFF` - Pure white
- **Border**: `#E3E6F5` - Subtle border
- **Section Border**: `#E4E6F3` - Section divider

#### Text Hierarchy
- **Text Primary**: `#111827` - Almost black
- **Text Secondary**: `#6B7280` - Medium gray
- **Text Muted**: `#8A90A6` - Light gray

#### Semantic Colors
- **Success**: `#22C55E` / Container: `#E3F7ED`
- **Warning**: `#F97316` / Container: `#FFEDD5`
- **Danger**: `#EF4444` / Container: `#FEE2E2`
- **Neutral Container**: `#F3F4F7`

#### Statistics Cards (Light)
- **Views**: Background `#E6EDFF`, Accent `#3B6BFF` (Blue)
- **Copies**: Background `#F1ECFF`, Accent `#6759FF` (Purple)
- **Referrals**: Background `#E7F7EE`, Accent `#16A34A` (Green)
- **Coupons**: Background `#FFF3E7`, Accent `#F97316` (Orange)

#### Accent Colors
- **Cyan**: `#1CCAD3` / Container: `#E1F7F9`
- **Yellow**: `#FFC241` / Container: `#FFF6E5`
- **Rose**: `#FF647C` / Container: `#FFEEF1`

#### Status Colors (Light)
- **Published**: Background `#E8F7EF`, Content `#16A34A`
- **Pending**: Background `#FFF4E5`, Content `#F97316`
- **Unpublished**: Background `#F1F2F6`, Content `#6B7280`

#### Component-Specific
- **Chip**: Background `#E9EDFF`, Content `#4F5DFF`
- **Badge Purple**: Background `#E5E2FF`, Content `#5D54FF`
- **Invite Input**: `#F3F4FE`

---

### Dark Mode

#### Primary Colors
- **Primary**: `#B4A8FF` - Light purple (inverted)
- **Primary Light**: `#2D2A52` - Dark purple container
- **Material Primary**: `#A5C8FF` - Light blue
- **Primary Container**: `#224876` - Dark blue container

#### Background & Surface
- **Background**: `#0F1116` - Deep dark blue-black
- **Surface**: `#191D26` - Slightly lighter surface
- **Border**: `#2D3342` - Subtle dark border
- **Section Border**: `#30374A` - Section divider

#### Text Hierarchy
- **Text Primary**: `#E4E7F1` - Off white
- **Text Secondary**: `#BEC3D4` - Light gray
- **Text Muted**: `#9298AD` - Medium gray

#### Semantic Colors
- **Success**: `#49D27D` / Container: `#123926`
- **Warning**: `#FFA353` / Container: `#3D2812`
- **Danger**: `#FF6868` / Container: `#3D2022`
- **Neutral Container**: `#222735`

#### Statistics Cards (Dark)
- **Views**: Background `#1C2840`, Accent `#7EA3FF` (Blue)
- **Copies**: Background `#241F3F`, Accent `#B2A5FF` (Purple)
- **Referrals**: Background `#153324`, Accent `#4FD38F` (Green)
- **Coupons**: Background `#352313`, Accent `#FFB173` (Orange)

#### Accent Colors
- **Cyan**: `#4ED3D9` / Container: `#0F383C`
- **Yellow**: `#FFCB5C` / Container: `#3A2E10`
- **Rose**: `#FF8299` / Container: `#3D1C24`

#### Status Colors (Dark)
- **Published**: Background `#153524`, Content `#4BD58B`
- **Pending**: Background `#3D2713`, Content `#FFA353`
- **Unpublished**: Background `#222735`, Content `#9EA5BA`

#### Component-Specific
- **Chip**: Background `#2A3150`, Content `#9EA8FF`
- **Badge Purple**: Background `#2B2456`, Content `#CCC2FF`
- **Invite Input**: `#1F2537`

---

## 📏 Spacing System

### Base Spacing Scale
- **None**: `0dp`
- **Nano**: `3dp` - Micro adjustments
- **XXS**: `4dp` - Tiny spacing
- **Micro**: `6dp` - Very small
- **XS**: `8dp` - Extra small
- **XS Emphasis**: `10dp` - Small with emphasis
- **SM**: `12dp` - Small
- **MD**: `16dp` - Medium (base)
- **MD Emphasis**: `18dp` - Medium with emphasis
- **LG**: `20dp` - Large
- **XL**: `24dp` - Extra large
- **XXL**: `32dp` - Double extra large

### Screen-Level Spacing
- **Screen Horizontal**: `20dp`
- **Screen Vertical**: `24dp`

### Component Padding Presets
- **Screen**: `20dp` horizontal, `24dp` vertical
- **Section**: `20dp` horizontal, `20dp` vertical
- **Card**: `20dp` all sides
- **List Item**: `20dp` horizontal, `16dp` vertical

### Responsive Scaling
- **Default Scale**: `1.0`
- **Medium Scale**: `1.2` (larger text settings)
- **Expanded Scale**: `1.4` (accessibility)
- **Max Scale**: `2.4` (maximum accessibility)

---

## 🔲 Dimensions & Sizing

### Border Widths
- **Thin**: `1dp` - Standard border

### Corner Radius
- **Small**: `12dp`
- **Soft**: `14dp`
- **Medium**: `16dp`
- **Field**: `18dp` - Input fields
- **Large**: `24dp`
- **Extra Large**: `28dp`
- **Pill**: `999dp` - Fully rounded

### Icon Sizes
- **XS**: `14dp`
- **SM**: `16dp`
- **SM Emphasis**: `18dp`
- **MD**: `20dp`
- **LG**: `24dp`

### Avatar Sizes
- **Small**: `40dp`
- **Medium**: `48dp`
- **Large**: `56dp`
- **Hero**: `58dp`
- **Spotlight**: `68dp`

### Component Heights
- **Chip**: `48dp`
- **Card Min**: `64dp`
- **Featured Card**: `140dp`
- **Store Hero**: `216dp`
- **Featured Card Min**: `240dp`

### Component Widths
- **Featured Card**: `300dp`
- **Dialog Min**: `320dp`
- **Dialog Max**: `480dp`
- **Detail Panel Min**: `360dp`
- **Detail Panel Max**: `440dp`

### Component-Specific Dimensions
- **Chip Padding**: `12dp` horizontal, `6dp` vertical
- **Chip Content Spacing**: `6dp`
- **Pill Padding**: `16dp` horizontal, `8dp` vertical
- **Pill Padding Emphasis**: `16dp` horizontal, `10dp` vertical
- **Button Padding**: `20dp` horizontal, `14dp` vertical
- **Icon Button Touch Target**: `44dp` (accessibility)
- **List Item Spacing**: `14dp`
- **Badge Diameter Small**: `22dp`
- **Dot Small**: `10dp`
- **Progress Track Height**: `6dp`
- **Progress Stroke Thin**: `2dp`
- **OTP Field Width**: `56dp`
- **OTP Field Spacing**: `12dp`

---

## 🎭 Shapes & Borders

### Predefined Shapes
- **Card Large**: `24dp` rounded corners
- **Card Medium**: `16dp` rounded corners
- **Chip**: `20dp` rounded corners
- **Dialog**: `16dp` rounded corners
- **Pill**: `999dp` fully rounded (capsule)

---

## ✨ Visual Effects

### Alpha Values (Transparency)
- **Transparent**: `0.0` - Fully transparent
- **Outline**: `0.08` - Very subtle outlines
- **Overlay Low**: `0.2` - Light overlays
- **Disabled Surface**: `0.4` - Disabled backgrounds
- **Progress Track**: `0.5` - Progress indicators
- **Disabled Border**: `0.6` - Disabled borders
- **Gradient Intensity**: `0.7` - Gradient opacity
- **Disabled Content**: `0.8` - Disabled text/icons
- **Opaque**: `1.0` - Fully opaque

### Animations
- **Enter Scale**: `0.92` - Scale down on enter
- **Exit Scale**: `1.08` - Scale up on exit

### Gradients
- **Spotlight**: End `420px × 240px`
- **New Stores**: End `360px × 220px`

---

## 📱 Typography

### Font Scale
- **Reduced**: `0.9` - Compact text mode

### Typography System
Uses Material 3 Typography with custom Arabic font support:
- Supports bidirectional text (LTR/RTL)
- Dynamic scaling based on language
- Accessibility font scaling (0.9 - 2.4×)

---

## 🎯 Design Principles

### 1. **Accessibility First**
- Minimum touch target: `44dp`
- Dynamic font scaling support (up to 2.4×)
- High contrast modes available
- Clear visual hierarchy

### 2. **Responsive Design**
- Spacing scales with font size
- Breakpoints for different screen sizes
- Adaptive layouts for tablets

### 3. **Theme Consistency**
- Full light/dark mode support
- Semantic color naming
- Consistent spacing system

### 4. **Component-Driven**
- Reusable component tokens
- Standardized padding presets
- Consistent shape language

### 5. **Performance**
- Optimized color schemes
- Efficient composition locals
- Minimal recomposition

---

## 🔧 Implementation Notes

### Material 3 Integration
- Base color scheme uses Material 3 color roles
- Extended with custom OfferLash-specific colors
- Supports high/medium contrast variants

### Platform Support
- iOS: Native iOS spacing adjustments
- Android: Standard Material spacing
- Web: Responsive breakpoints

### State Management
- Colors: `LocalOfferLashColorScheme`
- Spacing: `LocalOfferLashSpacing`
- Dimensions: `LocalOfferLashDimensions`
- Shapes: `LocalOfferLashShapes`

---

## 📊 Color Usage Guidelines

### Primary Actions
- Use `Primary` (`#6B5BFF` light / `#B4A8FF` dark)
- Buttons, links, key interactive elements

### Success/Positive
- Use `Success` green for confirmations
- Positive status indicators

### Warning/Caution
- Use `Warning` orange for alerts
- Pending states

### Danger/Error
- Use `Danger` red for errors
- Destructive actions

### Information
- Use `AccentCyan` for informational elements
- Secondary highlights

### Statistics
- Each metric has unique color pairing
- Views (Blue), Copies (Purple), Referrals (Green), Coupons (Orange)

---

## 🎨 Color Contrast Ratios

All color combinations meet WCAG 2.1 AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

Supports three contrast modes:
1. **Standard**: Default contrast
2. **Medium Contrast**: Enhanced contrast for accessibility
3. **High Contrast**: Maximum contrast for visual impairments

---

## 📐 Layout Grid

- Base unit: `4dp` (all spacing is multiple of 4)
- Column gutters: `20dp` horizontal
- Section spacing: `24dp` vertical
- Content max width: `480dp` (dialogs)

---

## 🌍 Internationalization

### RTL Support
- Full RTL layout support for Arabic
- Mirrored padding/margins
- Bidirectional text handling

### Language-Specific Adjustments
- Arabic: Custom font family
- English: System fonts
- Dynamic text scaling per locale

---

*Last Updated: 2024-11-10*
*Source: offerlash-app (Kotlin Multiplatform)*
