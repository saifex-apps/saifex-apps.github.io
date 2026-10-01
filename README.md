# Saifex Apps

Public developer website: https://saifex-apps.github.io/

Plain HTML, shared CSS and vanilla JavaScript, hosted by GitHub Pages. No npm,
build step, server, environment variables, analytics or custom domain is needed.
Saifex is a developer brand, not a claim of registered company status.

## Pages and Languages

- English: `index.html`, `privacy.html`, `terms.html`, `support.html`,
  `account-deletion.html` and `404.html`.
- Slovenian: matching static pages under `sl/`. Translate both versions when
  changing legal or app information. Their section IDs match for deep links.
- Shared presentation: `css/style.css`, `js/theme-init.js`, `js/main.js`.
- Public assets: `assets/apps/` and `assets/brand/`.
- Crawling: `robots.txt`, `sitemap.xml`; `.nojekyll` preserves static publishing.

## AdMob: app-ads.txt

The root file is served at https://saifex-apps.github.io/app-ads.txt and contains:

```text
google.com, pub-7833462037193919, DIRECT, f08c47fec0942fa0
```

Set the public **developer website** in Google Play and the relevant App Store
developer/marketing website field to https://saifex-apps.github.io/ so AdMob can
discover the file. A privacy-policy link alone does not replace that field.
After the store listing updates, request an app-ads.txt check in AdMob and allow
time for its crawler. Serving this file does not prove AdMob has verified it.
See [Google's setup instructions](https://support.google.com/admob/answer/9363762).
Only add seller records supplied by a real authorized advertising partner.

## Verified Content Boundaries

- Vaktija has a verified public Android listing. Its iOS release is in
  preparation; no App Store link is invented.
- Vaktija Premium is annual and removes advertisements only. Prices are shown
  by the store, not fixed on this website. Other app features remain free.
- Vaktija has manually selected cities, optional on-device Qibla location,
  local reminders, AdMob/UMP, store billing and local preferences/cache.
  It has no custom account, receipt server or Firebase/Supabase service.
- Ucimo's inspected build has local Hive progress, audio/device TTS and
  configurable AdMob/UMP. A public store URL has not been verified.
- Modelio's inspected development build uses Supabase and configurable Firebase
  Cloud Messaging, and includes a password-confirmed deletion flow. Production
  deployment and actual deletion/backup behavior remain unverified.
- Factory Boss is in development. No advertising/account/analytics package was
  found in the inspected local Unity package configuration.
- Privacy text distinguishes local app data from SDK, provider and store data.
  It does not promise no tracking, zero collection or guaranteed notification
  delivery. Review it again whenever app integrations change.

## Asset Provenance

`assets/apps/vaktija/icon.png` is the app's configured production 512px icon
(`assets/icons/app_icon_512.png`). `assets/apps/ucimo/icon.png` is the production
Android launcher icon (`mipmap-xxxhdpi/ic_launcher.png`, 192px).
Only public image assets were copied; no app source or signing files are included.
Modelio and Factory Boss keep polished fallback symbols because no verified
production icons were identified. Hero devices are labelled product illustrations,
not actual app screenshots. Saifex brand SVG sources are included, with raster
derivatives for social previews, favicon fallback and Apple touch icon.

## Owner Confirmations Before Store Submission

1. **Legal controller identity:** the privacy policy identifies Said Fetic as
   the independent developer behind Saifex, with Slovenia and
   `saifex.apps@outlook.com`, with the owner's express authorization.
   No private address is published. Obtain legal advice about additional
   contact/trader-information requirements for the actual services; these
   pages are not a guarantee of legal compliance or store approval.
2. Confirm controller/provider contracts, transfer safeguards, Modelio production
   hosting regions, backup/deletion behavior and support retention policy.
   Unverified providers' log durations are deliberately not invented.
3. Check App Store App Privacy and Play Data Safety against the shipping SDKs
   and consent configuration; this website does not change those declarations.
4. Update developer website and app-specific privacy links in both stores and
   in app configurations when intended. This task does not change app binaries.
5. Provide verified App Store/Ucimo store URLs and final Modelio/Factory icons
   before replacing their current coming-soon labels/fallbacks.
6. Account-deletion email is an instruction route, not an automated server.
   Monitor the support mailbox and confirm actual deletion handling before a
   public Modelio release. No real user account was deleted during website QA.

## Maintenance and QA

Keep all paths relative except canonical/social/crawler URLs and the 404 page's
root-relative asset/navigation paths. Never add a `CNAME` without verified DNS.
The theme uses only `saifex-theme` in localStorage, handles blocked storage, and
initializes before the stylesheet to avoid a wrong-theme flash.

Open with any local static HTTP server; no dependency installation is needed.
See `VALIDATION.md` for the recorded desktop/mobile, link and interaction checks.
Do not commit local QA screenshots, credentials, app source, certificates or keys.
