---
name: Lumina Tech
colors:
  surface: '#11131b'
  surface-dim: '#11131b'
  surface-bright: '#373942'
  surface-container-lowest: '#0c0e16'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#282a32'
  surface-container-highest: '#32343d'
  on-surface: '#e1e2ed'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e1e2ed'
  inverse-on-surface: '#2e3039'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#11131b'
  on-background: '#e1e2ed'
  surface-variant: '#32343d'
  deep-navy: '#0A0F1D'
  charcoal: '#121826'
  glass-border: rgba(255, 255, 255, 0.1)
  glow-electric: rgba(37, 99, 235, 0.4)
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-lg: 4rem
  stack-md: 2rem
  stack-sm: 1rem
---

## Brand & Style

The brand personality is **Technical, Visionary, and Precise**. This design system is crafted for a high-end software engineering portfolio, balancing the clinical exactness of code with the creative flair of modern web aesthetics. It targets technical recruiters and fellow engineers who value performance, scalability, and polished execution.

The visual style is a fusion of **Minimalism** and **Glassmorphism**. It utilizes heavy whitespace to establish a premium feel, while layers of translucent, frosted-glass surfaces provide a sense of depth and modernity. Electric accents pierce through a dark, atmospheric canvas to create a "glowing" effect that highlights key technological milestones and calls to action.

## Colors

The palette is centered on a **sophisticated dark theme**. The primary background is a custom "Deep Navy" (#0A0F1D) which provides more character than pure black, while "Charcoal" (#121826) is used for container surfaces to create subtle contrast.

**Electric Blue** (#2563EB) serves as the primary brand color, representing stability and logic. It is complemented by a vibrant **Cyan/Teal** (#06B6D4) for secondary highlights, creating a tech-centric gradient feel. Neutral tones are derived from cool grays to maintain harmony with the navy base. Accent highlights should utilize low-opacity glows to simulate a backlit interface.

## Typography

This design system uses **Geist** for headlines and labels to leverage its technical, mono-inspired spacing and clean geometric shapes. It provides a developer-centric aesthetic that feels both modern and professional. **Inter** is used for body text to ensure maximum legibility for long-form project descriptions and resumes.

The hierarchy is aggressive for headlines to create a strong visual impact on landing. Letter spacing is tightened on large headings for a more cohesive, "editorial" look, while labels and metadata utilize increased tracking and uppercase styling to denote technical specs and tags.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column layout** for mobile. A fixed maximum width of 1280px ensures the content remains readable on ultra-wide monitors.

The spacing philosophy emphasizes **high-quality whitespace**. Section-to-section transitions should use large vertical stacks (4rem+) to give the content "room to breathe," reflecting a premium, curated portfolio experience. Component spacing follows an 8px base grid, ensuring technical precision in alignment across all modules.

## Elevation & Depth

Depth is achieved through **Glassmorphism and Tonal Layering**. Instead of traditional shadows, surfaces are defined by:
- **Translucent Backgrounds:** Use 60-80% opacity on charcoal surfaces with a 12px-20px backdrop-blur.
- **Inner Borders:** A 1px solid border using `glass-border` (white at 10% opacity) defines the edges of containers.
- **Subtle Glows:** Instead of drop shadows, use a very soft, diffused outer glow of the primary color (opacity < 5%) to make active cards appear "energized."
- **Layered Stacking:** Use higher z-index elements with increased backdrop blur to denote focus states or modal overlays.

## Shapes

The shape language is **Rounded but Disciplined**. A standard radius of 0.5rem (8px) is applied to most UI components to soften the technical feel and make the interface more approachable. 

Cards and larger containers utilize "rounded-lg" (1rem) to emphasize the glass panels. Interactive elements like tags or specific CTAs may use "rounded-xl" to create a distinct silhouette against the more rigid grid structure.

## Components

- **Buttons:** Primary buttons feature a solid electric blue fill with a subtle "inner glow" border. Secondary buttons are "ghost" style with the Cyan accent border. High-emphasis CTAs should have a secondary hover state that increases the outer glow intensity.
- **Project Cards:** Built with glassmorphism—frosted backgrounds, 1px subtle borders, and a slight lift/scale effect on hover. Tech stacks inside cards should be represented as minimal text-only labels with a vertical separator.
- **Chips/Tags:** Used for technology stacks. These are small, low-contrast capsules with high letter spacing, using the `label-sm` typography style.
- **Input Fields:** Deep navy backgrounds with a 1px border that shifts to Electric Blue on focus. Use a subtle teal glow for the focus state to maintain the "lit" aesthetic.
- **Lists:** Experience and education lists should be connected by a vertical "circuit line" in gray-800, with primary-colored nodes at each entry point to emphasize the timeline.
- **Glow Accents:** Decorative "blob" elements with heavy blur (100px+) should be placed behind key sections to create an atmospheric, high-end feel without distracting from the text.