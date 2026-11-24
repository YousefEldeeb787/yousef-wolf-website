# WOLF Interaction Inventory

This inventory covers every interactive or interaction-looking element found in the actual HTML/CSS/JavaScript. “Tested” means exercised during this inspection through the local browser runtime or verified directly from source; it does not mean every external application outcome was confirmed.

> Historical inventory: the current site uses client-rendered personal and WOLF routes. The contact-flow rows below have been updated to the current server-backed form; see [the production readiness report](PRODUCTION_READINESS_REPORT.md) for current route and deployment details.

| Element | Location / appearance | Purpose and behavior | Destination / result | Desktop/mobile | Keyboard | Tested |
|---|---|---|---|---|---|---|
| WOLF header brand | Header, W mark plus `WOLF.` | Returns to the page top | `#top` | Both | Native link; yes | DOM/source verified |
| About link | Header nav | Scrolls to founder section | `#about` | Desktop; mobile inside opened menu | Native link; yes | Source verified |
| Projects link | Header nav | Scrolls to projects | `#work` | Desktop/mobile menu | Native link; yes | Source verified |
| Capabilities link | Header nav | Scrolls to capabilities | `#capabilities` | Desktop/mobile menu | Native link; yes | Source verified |
| WOLF link | Header nav | Scrolls to WOLF banner | `#wolf` | Desktop/mobile menu | Native link; yes | Source verified |
| Contact link | Header nav | Scrolls to contact | `#contact` | Desktop/mobile menu | Native link; yes | Source verified |
| Personal mode button | Header pill, `PERSONAL` | Activates founder copy and portrait visual | DOM text/display changes | Desktop only; hidden on mobile | Native button; yes, but no `aria-pressed` | Runtime verified indirectly |
| WOLF mode button | Header pill, `WOLF` | Activates WOLF copy and supplied reference image | DOM text/display changes | Desktop only; hidden on mobile | Native button; yes, but no `aria-pressed` | Runtime verified |
| Language switch from English | Header, `العربية` | Opens Arabic route | `/ar/` | Desktop; hidden on mobile | Native link; yes when visible | Source/route verified |
| Language switch from Arabic | Header, `English` | Opens English route | `/en/` | Desktop; hidden on mobile | Native link; yes when visible | Source/route verified |
| Let’s talk CTA | Header outlined pill | Scrolls to contact | `#contact` | Desktop; hidden at mobile due header CTA CSS | Native link; yes | Source verified |
| Explore My Projects | Hero cyan button | Scrolls to featured projects | `#work` | Both | Native link; yes | DOM verified |
| Discover WOLF (hero) | Hero outlined button | Scrolls to WOLF banner | `#wolf` | Both | Native link; yes | DOM verified |
| Discover WOLF (banner) | WOLF banner outlined button | Scrolls to contact | `#contact` | Both | Native link; yes | DOM verified |
| Mobile menu button | Header hamburger | Toggles navigation visibility and `aria-expanded`; nav links close it | `.mobile-open` class | Mobile only | Native button; yes | Runtime verified |
| Founder portrait | Hero image | Informational image only | No direct destination | Both | No; plain image | Source verified |
| WOLF reference image | WOLF hero mode image | Informational brand image; no separate link | No destination | Both when mode active | No; `aria-hidden` parent and empty alt | Runtime/source verified |
| Hospital cover | Featured project cover | Opens image lightbox | Dynamic `.lightbox` | Both | No; plain image | Source verified |
| Hospital gallery images | Hospital gallery | Opens image lightbox with source image and alt caption | Dynamic lightbox | Both | No; plain images | Open tested |
| Clinic cover | Clinic feature image | Opens image lightbox | Dynamic lightbox | Both | No; plain image | Source verified |
| Clinic mini-gallery | Clinic supporting images | Opens image lightbox | Dynamic lightbox | Both | No; plain images | Source verified |
| Wazzafny cover | Compact project image | Opens image lightbox | Dynamic lightbox | Both | No; plain image | Source verified |
| Wazzafny mini-gallery | Two supporting images | Opens image lightbox | Dynamic lightbox | Both | No; plain images | Source verified |
| Lightbox close button | Dynamically added top-right `×` | Closes lightbox and restores body scrolling | Sets `hidden`, clears overflow | Both | Native button; yes | Close-button dismissal tested |
| Lightbox backdrop | Full-screen dark overlay | Closes if click target is overlay itself | Same close function | Both | No keyboard equivalent by itself | Source verified |
| Escape key | Document-level handler | Closes an open lightbox | Calls close function | Both | Yes in source | Not conclusively verified by browser automation |
| Capability row arrows | Right-side cyan `↗` | Decorative visual cue only | No result | Both | No | Source verified |
| Principle glyphs | Decorative ◇, ▥, ϟ | Visual section markers | No result | Both | No | Source verified |
| Service pills | WOLF banner tags | Categorization only | No result | Both | No | Source verified |
| Coordinate text | WOLF banner | Decorative location cue | No result | Both | No | Source verified |
| Name field | Contact form | Required sender name | JSON POST to `/api/contact` | Both | Native input; yes | Server validation covered by tests |
| Email field | Contact form | Required email with native email type | JSON POST to `/api/contact` | Both | Native input; yes | Server validation covered by tests |
| Subject field | Contact form | Optional subject | JSON POST to `/api/contact` | Both | Native input; yes | Optional behavior verified in source |
| Message field | Contact form | Required message | JSON POST to `/api/contact` | Both | Native textarea; yes | Server validation covered by tests |
| Submit button | Contact form cyan button | Sends the form to the same-origin API; disables during an in-flight request | `/api/contact` | Both | Native submit button; yes | Duplicate-click guard verified; provider delivery unverified |
| Form status | Under submit button | Reports validation, loading, success, or API failure | Text only, `role=status` | Both | Announced as status where supported | Missing-configuration behavior covered by endpoint tests |
| Footer brand | Footer | Returns to top | `#top` | Both | Native link; yes | Source verified |
| Footer copyright | Footer text | Informational only | No result | Both | No | Source verified |
| Footer “BUILT WITH INTENTION” | Footer text | Informational only | No result | Both | No | Source verified |

## Important interaction gaps

1. Project cards are `<article>` elements, not links; there are no project detail destinations.
2. Gallery images visually look clickable and receive click handlers, but they are not buttons or links and cannot be reached/activated by keyboard.
3. The mode switch has an active CSS class but no `aria-pressed` state.
4. The mobile menu has no outside-click or Escape close handler.
5. There are no phone, WhatsApp, GitHub, LinkedIn, demo, repository, or research links.
6. The language switch is hidden on mobile.
7. Email delivery requires the three server-side provider variables; the current local environment does not have them configured.

## Source references

- Markup and route links: [index.html](../index.html), [en/index.html](../en/index.html), [ar/index.html](../ar/index.html)
- Event handlers: [script.js](../script.js)
- Responsive visibility and focus styling: [style.css](../style.css)
