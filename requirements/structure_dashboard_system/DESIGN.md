---
name: Structure Dashboard System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-sm:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 32px
  gutter: 20px
---

## Brand & Style

This design system is built for high-utility SaaS environments where clarity, speed of interaction, and data density must coexist. The brand personality is professional, reliable, and invisible—prioritizing the user's data over decorative elements.

The visual style follows a **Modern Corporate** approach with a heavy emphasis on **Minimalism**. It utilizes a systematic "Surface-on-Surface" logic to create hierarchy, replacing heavy shadows with crisp borders and subtle tonal shifts. The interface should feel utilitarian yet premium, evoking a sense of calm control for administrators managing complex user sets.

## Colors

The palette is anchored in a neutral Slate scale to maintain a professional, low-fatigue environment. 

- **Primary (Indigo):** Used exclusively for primary actions (Create User, Save), active states, and focus rings.
- **Secondary (Slate/Gray):** Reserved for secondary actions, iconography, and supporting text.
- **Surface Colors:** Use `Slate-50` for the main background and `White` for cards and containers to create a distinct lifting effect.
- **Semantic Colors:** Emerald (Success), Rose (Destructive), and Amber (Warning) are used sparingly for status badges and critical feedback loops.
- **Borders:** Use a consistent `Slate-200` for light mode to define structure without adding visual noise.

## Typography

The system uses **Inter** for all UI elements to ensure maximum legibility across different pixel densities. 

- **Hierarchy:** Use `display-lg` only for main dashboard overviews. CRUD modals and page headers should utilize `headline-md`.
- **Labels:** `label-sm` (uppercase) is specifically designed for table headers and section overtitles.
- **Monospace:** Use JetBrains Mono for User IDs, API keys, or technical metadata within the management console.
- **Scale:** On mobile devices, `display-lg` should scale down to `headline-md` (24px) to maintain screen real estate.

## Layout & Spacing

This design system operates on a strict **8px grid**. All margins, paddings, and component heights must be multiples of 8.

- **Grid Model:** Use a 12-column fluid grid for desktop with a maximum container width of 1440px. 
- **Modals:** User creation and editing should occur in centered modals (width: 560px) or right-aligned slide-overs.
- **Density:** Maintain generous white space (24px - 32px) between major logical sections, but use compact spacing (8px) within form groups and related controls.
- **Breakpoints:**
  - Desktop: 1024px+ (12 columns, 32px margins)
  - Tablet: 768px - 1023px (8 columns, 24px margins)
  - Mobile: <767px (4 columns, 16px margins)

## Elevation & Depth

Visual hierarchy is achieved through a combination of **Tonal Layers** and **Subtle Shadows**.

1.  **Level 0 (Background):** `Slate-50`. The canvas.
2.  **Level 1 (Cards/Tables):** `White` background with a 1px `Slate-200` border.
3.  **Level 2 (Dropdowns/Modals/Hover States):** `White` background with a soft, diffused shadow: `0px 10px 15px -3px rgba(0, 0, 0, 0.05)`.
4.  **Interaction:** Use a 2px Primary Indigo ring for focused inputs and buttons to ensure accessibility compliance.

## Shapes

The shape language is consistently "Rounded" to soften the professional aesthetic and make the UI feel approachable.

- **Standard Components:** Buttons, inputs, and chips use 0.5rem (8px).
- **Containers:** Main content cards and data tables use 1rem (16px) for the outer container.
- **Interactive States:** On hover, maintain the same radius but increase border contrast or apply a subtle background tint.

## Components

### Buttons
- **Primary:** Solid Indigo background, white text. Transitions to Darker Indigo on hover.
- **Secondary:** White background, Slate-200 border, Slate-700 text.
- **Ghost/Tertiary:** No border or background. Indigo text. Used for "Cancel" or "View Details."

### Data Tables (The Core CRUD Component)
- **Header:** `label-sm` text with a subtle `Slate-50` background.
- **Rows:** Minimum height 56px. Hover state triggers a `Slate-50` background tint.
- **Actions:** Use an "Ellipsis" vertical icon menu for row-level actions (Edit, Suspend, Delete).

### Input Fields
- **Default:** White background, 1px Slate-200 border. 
- **Focus:** 1px Indigo border with a 3px Indigo-50 outer glow/ring.
- **Error:** 1px Rose-500 border with Rose-500 helper text.

### Status Chips
- **Layout:** Small height (24px), semi-bold text, 8px radius.
- **Colors:** Use "Soft" variants (e.g., Active = Light Emerald background with Dark Emerald text).

### Modals
- **Header:** Clear title with a close "X" in the top right.
- **Footer:** Right-aligned actions. Secondary action (Cancel) on the left, Primary (Submit) on the right.