# WOLF launch checklist

## Completed

- Obsidian Cyan design tokens, typography, spacing, borders, focus states, and reduced-motion rules.
- English default homepage, `/en/` English route, and `/ar/` Arabic RTL route.
- Reference-derived WOLF wolf-head/WOLF logo, favicon, and hero photo; separate from the founder photograph.
- Founder photograph at `public/images/founder/yousef-photo.jpg`.
- Hospital and surgical clinic real screenshot galleries.
- Accessible image lightbox with close button, Escape support, captions, and backdrop close.
- Wazzafny compact three-screenshot gallery with accurate graduation-team attribution.
- Hungry assets inventoried but withheld from public presentation pending permission.
- Contact form with server-side delivery, required-field validation, spam controls, and WhatsApp contact.
- `robots.txt`, `sitemap.xml`, canonical URLs, language alternates, Open Graph metadata, and SVG favicon.
- Asset inventory at `docs/WOLF_ASSET_GUIDE.md`.
- Exact WOLF reference verification: `Neon Wolf Digital Portfolio Homepage  refernce.png` is preserved at `public/images/brand/wolf-reference.png`; its logo and hero photo crops are in use on WOLF pages.

## Verification results

- Real supplied assets copied into the requested `public/images/` folders.
- Founder, hospital, clinic, and Wazzafny images load in the browser preview.
- Desktop and mobile layouts tested with no horizontal overflow.
- Mobile navigation opens and closes.
- WOLF header logo and reference-derived hero/About photos render at desktop and mobile widths.
- Lightbox opens, exposes alt text as a caption, and closes with Escape/backdrop.
- Contact form validates required fields, submits to `/api/contact`, and shows success only after the email provider accepts delivery.
- Contact API tests cover provider success, missing configuration, provider rejection, invalid input, and rate limiting. Live delivery still requires deployment credentials.
- Arabic route renders with `dir="rtl"` and Arabic copy.

## SEO and accessibility status

- Titles, descriptions, keywords, canonical URLs, language alternates, Open Graph metadata, sitemap, robots, favicon, semantic sections, alt text, keyboard focus, and reduced-motion support are present.
- Final production URL is still a placeholder (`wolf.digital`) and must be confirmed before launch.
- Contrast should receive a final audit in the production font-loading environment.
- Arabic copy should receive founder/native-speaker proofreading.

## Security and privacy

- No API keys or secrets are present.
- Contact submissions are sent by the server through Resend; the site does not persist form submissions.
- Supplied screenshots may contain realistic names or demo records. Confirm redaction before public launch.
- No Wazzafny API/database architecture is claimed because no repository/source evidence was supplied.

## Remaining founder decisions

- Confirm production domain and replace `wolf.digital` in `robots.txt`, `sitemap.xml`, canonical tags, and social metadata.
- Confirm founder title, education wording, and the “04 years of building” visual label.
- Confirm permission and attribution for Hungry before publishing its four screenshots.
- Confirm whether the supplied Hospital and Clinic records are safe to publish or need redaction.
- The supplied reference now informs the WOLF logo and photographic treatments. Confirm any remaining brand changes before launch.
- Provide verified GitHub, LinkedIn, research, and project URLs if they should be linked.

## Vercel deployment

- Framework: static HTML/CSS/JavaScript; no build command required.
- Build command: leave empty, or use `echo "static site"` if the provider requires one.
- Output directory: repository root (`.`).
- Environment variables required for contact delivery: `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY`.
- Contact form provider: Resend's email API. Set `CONTACT_TO_EMAIL` to the private destination address, `CONTACT_FROM_EMAIL` to a sender address verified with Resend, and `RESEND_API_KEY` to the provider API key in the deployment environment. Never put these values in frontend code or commit them.
- The contact endpoint has a honeypot, bounded inputs, same-origin checks, and an in-memory per-IP limit (5 submissions per 15 minutes). The limit is per running process and is not shared across serverless instances; use a persistent edge/WAF rate limit for stronger production abuse protection.
- Email delivery cannot be verified until valid Resend credentials and a verified sender are configured in deployment.
- Deployment steps: import the repository into Vercel, keep the root as the project directory, deploy, verify `/`, `/en/`, and `/ar/`, then update the production domain in SEO files.
- Deployment status: not deployed or claimed as deployed in this workspace.
