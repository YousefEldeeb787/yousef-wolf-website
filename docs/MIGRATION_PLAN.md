# One-domain dual-experience migration plan

## Current state

- The root, `/en/`, and `/ar/` documents duplicate one long page.
- Personal and WOLF content is changed with a client-side mode switch instead of real pages.
- Project, research, service, and contact detail routes do not exist.
- The supplied founder portrait and `public/images/brand/wolf-reference.png` are already available.

## Target architecture

1. Keep one static entry point, one Node preview server, one deployment, and one domain.
2. Use a route registry in `script.js` to render actual page families for:
   - `/en/*` and `/ar/*` personal portfolio routes.
   - `/wolf/en/*` and `/wolf/ar/*` WOLF company routes.
3. Keep shared tokens, typography, header primitives, responsive rules, image lightbox, and contact behavior in the shared stylesheet/runtime.
4. Give each experience its own navigation, hero, page hierarchy, footer, calls to action, and visual treatment.
5. Use root-relative asset URLs so every direct route and refresh resolves correctly.
6. Make the local server serve `index.html` as the fallback for clean client-side routes, while serving assets directly.

## Content migration

- Personal: founder portrait, about, Hospital, Clinic Platform, Wazzafny, research overview, contact, and links to WOLF.
- WOLF: supplied wolf reference hero, company positioning, seven service pages grouped under Build/Analyze/Automate, Hospital and Clinic work pages, contact, and a link back to Yousef.
- Arabic routes use the same route structure and set `dir="rtl"` with Arabic navigation and content.

## Verification

- Request every required English and Arabic route directly.
- Check route-family navigation, language links, project/service links, image assets, and contact links.
- Test desktop/mobile homepage rendering and direct refresh behavior.
