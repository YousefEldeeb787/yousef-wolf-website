# Obsidian Cyan design system

## Direction

Obsidian Cyan is a premium digital engineering system for Yousef Eldeeb and WOLF. It pairs deep architectural navy with restrained cyan signals, editorial typography, and evidence-led project presentation.

## Tokens

- Background: `#06131A`
- Secondary surface: `#0B2029`
- Elevated surface: `#102D38`
- Primary accent: `#00E5E8`
- Secondary accent: `#087E9B`
- Primary text: `#E0FAFF`
- Secondary text: `#A8BBC2`
- Typography: Inter for English, IBM Plex Sans Arabic for Arabic, DM Mono for metadata
- Typography scale: responsive display, page, section, and card sizes using `clamp()`, with body copy kept to readable line lengths
- Spacing: 8 / 16 / 24 / 40 / 64 / 96px

## Components

- **Navigation:** translucent navy header, thin borders, keyboard-visible cyan focus, Personal/WOLF mode control.
- **Buttons:** solid cyan primary action; transparent outlined secondary action.
- **Cards:** cyan hairline borders and soft shadows only where hierarchy benefits from separation.
- **Project presentation:** large cover first, then verified screenshot galleries and metadata tags.
- **Brand visual:** personal mode uses the supplied founder photograph; WOLF uses restrained geometric visuals and the supplied homepage reference as a design guide, not as embedded page artwork.
- **WOLF About:** explain the studio, the BUILD / ANALYZE / AUTOMATE method, mission, vision, project approach, and founder-led model without implying unverified team or client claims.

## Responsive behavior and accessibility

Layouts adapt at 900px and stack at 650px, preserve readable line lengths, expose a touch-friendly menu, use meaningful image alternative text, and honor `prefers-reduced-motion`. All interactive elements have visible keyboard focus states.
