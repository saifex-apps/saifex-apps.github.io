# Website Validation

Validated on 1 October 2026 using a local static HTTP server and the installed
Microsoft Edge (Chromium) through headless Playwright. QA scripts/screenshots
are outside this repository and are not website runtime dependencies.

## Coverage

- 12 HTML pages: home, privacy, terms, support, account deletion and 404, in
  both English and Slovenian.
- 144 viewport/theme layout checks: each page at 360x800, 390x844, 768x1024,
  1024x768, 1440x900 and 1920x1080, in light and dark themes.
- No document horizontal overflow or clipped content containers detected.
- App icons, theme/header assets and stylesheets loaded without HTTP errors.
- Every relative asset/page path and linked section ID checked against local
  files. Legacy privacy/terms anchors were preserved.
- One h1 per page, unique IDs, alt/dimension attributes on images, balanced HTML
  element nesting, valid JSON-LD parsed in the browser.
- Sitemap parsed as XML with 10 EN/SL page URLs. Both 404 pages use noindex and
  root-relative navigation/assets for arbitrary missing URL paths.
- All 13 distinct external app/help/provider links returned HTTP 200 on GET.
  Two Google Play Help links required an explicit `hl=en` query parameter.
- Mail links use `saifex.apps@outlook.com`; no fake store or placeholder `#`
  links remain. Real Google Play listing preserved; other store buttons remain
  noninteractive coming-soon labels.

## Interaction and Accessibility

- Theme toggle, persisted preference, OS light preference and blocked localStorage.
- Mobile menu toggle, aria-expanded, Escape with restored focus, outside click,
  link-close and desktop breakpoint close/focus handling.
- Language switch retains the current legal section fragment.
- Header controls measured at least 44x44px on mobile.
- Focus-visible rules, skip link and semantic heading/navigation landmarks.
- Reduced motion removes float/reveal animation. Content remains visible without
  JavaScript; legal text is never hidden behind reveal animations.
- Phone motion sampled at three times: front X stays 70px, rotation stays 5deg,
  only Y varies within the original 10px offset minus an 8px float.
- Representative palette contrast checks against dark/light atmospheric
  backgrounds: secondary/muted/link/accent text remains above 4.5:1.
  This is not a full WCAG certification or assistive-technology audit.
- Visually inspected desktop dark/light home, Slovenian mobile home/privacy,
  and desktop support screenshots. No QA screenshots committed.

## Content and Scope

- Privacy checked against local app code and configuration, not inferred from
  marketing copy. Modelio deployment/backup behavior is explicitly unverified.
- Annual Premium removes ads only; no fixed storefront price or extra gated
  features claimed. Apple/Play renewal, cancellation, restore and refund links
  are documented separately from notification permissions.
- Controller name was included with explicit owner authorization. No private
  address, signing files, tokens, certificates or app source are published.
- CSS consolidated from 38,605 to approximately 23,538 bytes (about 39% smaller),
  before Git line-ending normalization; sources remain readable.
- No app code, billing identifiers, Android/iOS configuration or GitHub secrets
  changed by this website task.

## Limits and Follow-Up

HTML was checked structurally and in a browser, not certified by the W3C validator.
Safari/Firefox, physical devices and screen-reader testing are not claimed.
See README owner confirmations for legal review, provider retention, store URLs
and actual Modelio account-deletion handling. Email delivery and AdMob crawler
verification require operator/provider confirmation; publishing a static file
does not prove those operations succeeded.
