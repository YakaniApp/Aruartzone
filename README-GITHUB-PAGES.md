# aruArtZone – GitHub Pages Ready Version

This project is configured to deploy a **Vite + React** site to **GitHub Pages** using GitHub Actions.

## Quick steps

1. Create a new public repo on GitHub called **`aruartzone`** (or change the `base` in `vite.config.ts` if you use another name).
2. Push all these files to the `main` branch of that repo.
3. Go to **Settings → Pages** and set:
   - **Source** = "GitHub Actions"
4. After you push, GitHub Actions will run `npm install` and `npm run build` automatically and publish the **dist/** folder to Pages.

Your site will be live at:

`https://YOUR-USERNAME.github.io/aruartzone/`

If you change the repo name, make sure to also update the `base` option in `vite.config.ts`.
