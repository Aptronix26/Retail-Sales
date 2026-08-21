# Retail Operations OS — Daily Morning / MTD

Standalone daily retail execution dashboard for target-versus-achievement tracking, hierarchy drill-down, store outlook, daily missions, and operating actions.

## Run

Open `index.html` directly, or serve the folder with any static web server.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload this folder.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, then choose `main` and `/ (root)`.

## Validation

Run `npm test` with Node.js 18 or later.

## Important security note

This is a static prototype. Its browser-side login and role controls are presentation controls, not production authentication. Do not publish confidential employee, target, achievement, or credential data. Connect a server-side identity and data service before production use.

## Refinements in this release

- Fixed missing-field crashes when scope data is applied.
- Added repository documentation and automated static validation.
- Centralized the reporting-period configuration and standardized core metric helpers.
- Added formula-contract tests and a metric dictionary for auditability.
- Added clear deployment and security guidance.
- Preserved the existing calculations, embedded data, navigation, and Excel workflow.
