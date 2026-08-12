# Unfckwithable. — Deploy Guide (free, no terminal)

This is your whole website as plain files. Four pages (Home, About, The Program, Wins), all styling, and the SEO/GEO files. Nothing here costs money. GitHub is free and your Vercel Hobby plan is free.

You'll do this once. After that, every future edit is a drag-and-drop that deploys itself in about a minute.

---

## What's in this folder

- `index.html` — homepage
- `about.html` — About Ali
- `authority-accelerator.html` — The Program
- `wins.html` — Client wins (the fixed video page: 13 case studies, real thumbnails)
- `styles.css`, `script.js` — shared design + behavior for all pages
- `vercel.json` — makes your URLs clean (/about, not /about.html)
- `robots.txt`, `sitemap.xml`, `llms.txt` — SEO + AI-search (GEO) files
- `photos/` — your images (see `PHOTOS-TO-ADD.txt` for the few to drop in)

---

## Step 1 — (Optional) Add your photos

Open `PHOTOS-TO-ADD.txt` and drop in the five brand photos it lists. The site works without them (it shows warm gradient tiles), so you can also do this later. Skip to Step 2 if you want to go live now.

## Step 2 — Put the site on GitHub (free)

1. Go to github.com and sign in (or create a free account — no card needed).
2. Click the **+** in the top-right, then **New repository**.
3. Name it `unfckwithable-site`. Leave it **Public** (or Private, either works with Vercel). Click **Create repository**.
4. On the new empty repo page, click the link **"uploading an existing file"**.
5. Open this folder on your Mac, select **everything inside it** (all the files and the `photos` folder), and drag them into the GitHub upload box. Wait for them to finish uploading.
6. Click **Commit changes**.

That's your site, on GitHub.

## Step 3 — Connect GitHub to Vercel

1. Go to vercel.com and sign in with the same account your `unfckwithable` project is on.
2. Click **Add New… → Project**.
3. Find `unfckwithable-site` in the list and click **Import**. (If GitHub isn't connected yet, Vercel will ask permission once — click through it.)
4. Leave every setting at its default (Framework Preset: **Other**; no build command needed — it's static).
5. Click **Deploy**. In about a minute it's live at a `...vercel.app` URL. Open it and check the pages.

## Step 4 — Point unfckwithable.co at the new project

Right now your domain points at the old project. Move it to the new one:

1. In Vercel, open your **old** `unfckwithable` project → **Settings → Domains**. Remove `unfckwithable.co` and `www.unfckwithable.co` there.
2. Open the **new** `unfckwithable-site` project → **Settings → Domains** → add both `unfckwithable.co` and `www.unfckwithable.co`.
3. **Important (this is the SEO fix):** make `unfckwithable.co` (no www) the **Primary Domain**, and set `www.unfckwithable.co` to **Redirect** to it. Vercel has a simple toggle for this. This is what stops Google from splitting your About page across two addresses.
4. Vercel handles the rest. Within a few minutes, unfckwithable.co serves the new site.

(Moving a domain between two of your own Vercel projects is free and doesn't change your DNS registrar — nothing to buy.)

## Step 5 — How you update the site from now on

Any time you want to change wording or a photo:

1. Edit the file (or add the photo) in your GitHub repo — you can do it right in the browser: open the file, click the pencil ✏️, make the change, **Commit**.
2. Vercel sees the change and redeploys automatically in about a minute. Done.

No terminal. No source folder to keep track of. No subscriptions.

---

## Notes

- **The video thumbnails on /wins** pull straight from the custom thumbnails you set on each Vimeo video, so they always match what you uploaded.
- **Camila** is intentionally left off the site (the legal block). Her card is gone from /wins, and the small-audience example in the Program FAQ was swapped to Jennah.
- **Search Console:** once you export your last-3-months Performance report (Queries + Pages) and send it over, I'll tune the page titles, headings, and copy around your real top queries and any high-impression / low-click pages. The SEO/GEO foundation here is already strong; that step makes it sharper.
