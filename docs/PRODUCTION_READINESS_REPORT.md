# Production Readiness Report

**Review date:** 2026-11-24
**Overall status:** **Not ready for production email delivery.** The static build and local route checks pass, but production environment variables and a live Vercel deployment have not been verified.

## 1. Project architecture

- One repository and one site contain both experiences: Yousef Eldeeb's personal portfolio and WOLF.
- The frontend is a vanilla HTML/CSS/JavaScript single-page application. `script.js` selects pages from `window.location.pathname` and renders page content client-side; `index.html` is the primary shell.
- The root, `en/`, and `ar/` directories contain HTML shells. Vercel rewrites application deep links to the root shell, and the client sets the page language and text direction.
- `server.js` is the local Node.js static preview server and also exposes the contact handler during local development. It is not the production backend.
- `api/contact.js` is the Vercel Function entry point. It delegates to `contact-handler.js`, which validates submissions and uses Resend's HTTP API.
- Static website assets include `public/images/`, `cover_photos/`, and the three research screenshot folders. Other project evidence, screenshots, and documentation remain in the repository but are excluded from the production artifact.
- There is no database, user authentication, file upload, or separate backend service.

## 2. Technology stack

- Node.js, CommonJS, vanilla JavaScript, HTML, and CSS; `package.json` requires Node.js 18 or newer.
- No frontend framework, bundler, runtime package dependencies, lockfile, lint script, or type-check script.
- Google Fonts are requested remotely; system font fallbacks are defined.
- Vercel is the recommended host because the site is static and the same project has a Node.js contact function under `api/`. No separate backend host is required.

## 3. Build and test results

| Check | Result |
|---|---|
| `npm run build` | **Passed.** Copies only runtime files and required assets into `dist/`. |
| `npm test` | **Passed:** 4 tests, 0 failures. Covers provider acceptance/rejection, missing configuration, input validation, and rate limiting. |
| `node --check` on `scripts/build.js`, `script.js`, `server.js`, and `contact-handler.js` | **Passed.** |
| Vercel configuration and sitemap JSON/XML parsing | **Passed.** The sitemap contains 58 unique URLs on the existing `www.yousefeldeeb.com` hostname. |
| Lint, type check, dependency audit | **Unavailable/not run.** There are no corresponding project scripts or third-party dependencies/lockfile to audit. |
| Vercel platform build and production deployment | **Not run.** No project was deployed or changed. |

The generated `dist/` output contains the three HTML shells, CSS/JavaScript, `images/`, project covers, research screenshots, `robots.txt`, and `sitemap.xml`. The build intentionally excludes documentation, tests, and source-only project folders.

## 4. Routes verified

The local site was opened directly at every route represented in the sitemap: **58 routes total**, with **58 distinct runtime titles**. The checks found no missing main heading, broken image, wrong document language/direction, horizontal overflow, invalid local route link, or missing in-page fragment.

- **Personal portfolio, English and Arabic:** home, about, projects, contact, research, three software project details, and three research project details per language.
- **WOLF, English and Arabic:** home, about, services, work, contact, seven service details, and six project details per language.
- **Internal navigation:** 626 local route-link occurrences across the rendered pages were checked against the route set.
- Arabic runtime pages set `lang="ar"` and `dir="rtl"`. Shared contact forms render Arabic labels and status messages.
- The mobile menu opens and updates `aria-expanded`; the language switch is now visible at the narrowest CSS breakpoint.
- The personal project and WOLF project experiences remain separate route families under the same site.

These are local browser checks, not a verification of the deployed Vercel URL.

## 5. Issues discovered and fixed

| Issue | Change |
|---|---|
| Vercel's default “Other” output selection can choose `public/` when that directory exists; the existing cached `.vercel/output/static` contained images but no app shell. | Added a deterministic `npm run build` step, set Vercel's output directory to `dist`, and copied only the files needed at runtime. |
| Asset URLs and the Vercel static output layout were not explicitly aligned. | The build copies `public/images/` to `dist/images/`; the app references `/images/...`, and the SPA rewrite excludes that static directory. The local server maps the same URLs to the source assets. |
| App routes relied on a broad fallback and home URL slash variants were inconsistent. | Added explicit home redirects and retained the deep-link SPA rewrite while excluding API and static asset paths. |
| Route titles/descriptions were generic; canonical and language alternates did not follow deep links. | Added route-specific title, description, canonical, Open Graph, `robots`, and `hreflang` updates at runtime. Invalid routes are marked `noindex`. |
| The sitemap omitted Arabic and many existing service/project detail routes. | Rebuilt it with all 58 supported route URLs. |
| The visually hidden form honeypot caused a roughly 10,000px horizontal scroll area on narrow RTL contact pages. | Replaced off-canvas positioning with a clipped, one-pixel honeypot; viewport checks show no overflow. |
| The language switch disappeared at the narrowest mobile breakpoint. | Kept it visible and verified it fits without overflow. |
| Unknown WOLF service slugs silently showed the first service. | Unknown service routes now render the app's 404 view rather than unrelated service content. |
| `.env` files were not ignored. | Added `.env`, `.env.*`, `dist/`, and `node_modules/` to `.gitignore`, while allowing the blank `.env.example`. |
| Several older WOLF reports still described a mailto-only form and included a public-looking email address. | Updated their contact-flow statements; no destination address is present in frontend code or the readiness documentation. |

The workspace has no Git metadata, so `git status` and a Git diff could not be produced. Changes were reviewed directly; unrelated project content was not removed.

## 6. Issues and deployment blockers remaining

1. **Email delivery is not ready:** the local environment has no `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, or `RESEND_API_KEY`. A fresh form submission returned HTTP 503 and displayed an error rather than success. No live Resend delivery was verified.
2. **One earlier browser run displayed a success status, inconsistent with the later 503 response.** No Resend event/log was available to corroborate it. Treat that result as unverified and check the provider activity before relying on any test submission.
3. **Vercel itself is unverified:** the project/account association, production environment variables, current deployment, and domain assignment were not inspected. The local cached output was incomplete; the new build configuration must be used for the next deployment.
4. **SPA soft 404:** the client renders a 404 view for unknown routes, but the catch-all Vercel rewrite serves the shell with HTTP 200. Search crawlers can see `noindex`, but this is not a true HTTP 404 response.
5. **Client-rendered SEO limitation:** unique metadata is set after JavaScript runs. Crawlers that do not execute JavaScript receive the generic HTML-shell metadata; route-specific social previews for those crawlers are not guaranteed without prerendering or server rendering.
6. **Rate-limit scope:** the 5-requests-per-15-minute limiter is in-memory and per warm process. Serverless instances do not share that state. Honeypot and same-origin checks are present, but there is no CAPTCHA or shared idempotency store.
7. **Arabic copy is mixed:** navigation, home/about/contact experiences and form labels include Arabic, while some project/service details remain English. Review Arabic wording before publication if full translation is required.
8. **Performance was not fully profiled:** browser checks confirmed images load and layouts do not overflow, but no Lighthouse/Core Web Vitals run or image-compression pass was performed. Founder images are large (about 1.2–1.6 MB in the source assets); assess them with production performance measurements before optimizing.
9. **Git review is blocked:** this workspace is not a Git repository, so no diff/status-based secret review is available.

## 7. Environment variables required

The blank [`.env.example`](../.env.example) documents the only provider variables:

| Variable | Required value |
|---|---|
| `CONTACT_TO_EMAIL` | Private destination inbox. Configure only in the server/Vercel environment. |
| `CONTACT_FROM_EMAIL` | Sender address verified with Resend. |
| `RESEND_API_KEY` | Resend API credential. Keep secret; never expose it to frontend code. |

No values are supplied or invented. `.env` and `.env.*` are ignored by Git, except the checked-in blank `.env.example`. The local `server.js` does not load `.env` automatically; set local variables in the shell or IDE when testing delivery. Vercel variables must be configured in the existing project's environment settings.

## 8. Contact form delivery status

- Both experiences use the same server-backed form with Name, Email, optional Subject, and Message fields.
- The browser prevents a second in-flight submit from the same form, disables the button, and presents loading/success/error states.
- The server independently validates fields and limits body size; it also checks request origin, a honeypot, and a per-process rate limit.
- The handler sends to Resend using the server-only destination and sender variables. It reports success only after Resend returns an accepted HTTP response.
- Local test result: missing environment configuration produces a failure response; a fresh browser submission showed an error and did not show success. Unit tests use a mocked provider and do not prove live email delivery.
- **Production status: blocked until all three variables are configured and a controlled preview submission is confirmed in Resend's activity/logs.**

## 9. Hosting recommendation and architecture

Use the **existing Vercel project**, if it is the intended project for this domain. Vercel is appropriate because it can serve the generated static `dist/` artifact and automatically expose `api/contact.js` as a Node.js Function. `server.js` is only for local preview and is not required in production. No second hosting platform or separate backend is needed.

The repository now sets `buildCommand: "npm run build"` and `outputDirectory: "dist"` in [`vercel.json`](../vercel.json). The API remains at `/api/contact`, outside the static SPA rewrite. This output-directory setting is important because Vercel's “Other” preset can otherwise select the existing `public/` folder and omit the root application shell. See [Vercel build output settings](https://vercel.com/docs/builds/configure-a-build) and [Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json#outputdirectory).

## 10. Exact deployment steps

1. Review the report and source changes locally. Do not create a new Vercel project for this site.
2. In the **existing** Vercel project, confirm the repository root is the project root and the framework preset is **Other**. Confirm Build Command is `npm run build` and Output Directory is `dist` (the committed `vercel.json` sets both).
3. Configure `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY` in Vercel's **Production** environment. Use a Resend-verified sender. For Preview, use a controlled test destination if desired. Do not place real values in `.env.example`, frontend variables, or commits.
4. Confirm the existing project is assigned to the intended domain (`www.yousefeldeeb.com` is the hostname already referenced by `robots.txt` and `sitemap.xml`). Do not change DNS or domain settings as part of this preparation.
5. After reviewing and approving the changes, publish through the existing project's normal Git/Preview workflow. This review did not push, deploy, or modify DNS.
6. Inspect the build output/deployment resources: the static output must include `index.html`, `en/`, `ar/`, `images/`, the project/research image folders, `robots.txt`, and `sitemap.xml`; `/api/contact` must appear as a Node.js Function.
7. On a Preview URL, submit one controlled test message and verify the corresponding accepted event in Resend. Only then promote to production.

## 11. Post-deployment verification checklist

- [ ] `/` redirects to `/en/`; `/en/`, `/ar/`, `/wolf/en/`, and `/wolf/ar/` load.
- [ ] Refresh and directly open representative project, service, research, contact, and Arabic routes.
- [ ] Verify `lang`, `dir`, title, description, canonical URL, Open Graph values, and language alternates on both site experiences.
- [ ] Confirm the favicon, founder/WOLF images, project covers, and gallery images load; inspect at 1440px, 768px, and 390px.
- [ ] Open/close each mobile menu and switch between English and Arabic on mobile.
- [ ] Submit a controlled contact message; verify loading/error/success behavior and provider acceptance in Resend logs. Confirm no success state for provider/configuration errors.
- [ ] Check `robots.txt`, all sitemap URLs, and the handling of an invalid route (noting the current HTTP-200 soft-404 limitation).
- [ ] Review Vercel function logs, rate-limit behavior, and asset caching. Run a production Lighthouse/Core Web Vitals check.
- [ ] Confirm no secrets were committed and verify domain assignment without changing DNS.

## 12. Final readiness decision and next actions

The project is **prepared for a Vercel Preview build**, not declared production-ready for email or SEO crawler behavior. The next required actions are to configure the three private Resend variables in the existing Vercel project, verify the project uses the `dist` output, publish a Preview only after your approval, and confirm a test email in Resend before production promotion. No deployment, project creation, Git push, or DNS change was performed.
