# Kapilcaptures — Dynamic Website (Next.js + Sanity)

This is your photography studio website, rebuilt so the content (photos, videos, testimonials,
contact info) can be edited from a dashboard instead of by editing code. No coding required for
day-to-day updates — only this one-time setup.

You'll need two free accounts: **Sanity** (your content dashboard) and **Vercel** (hosts your live
site). You'll also need a free **GitHub** account to hold the code, which Vercel deploys
automatically every time something changes.

---

## Step 1 — Create your free Sanity project

1. Go to **sanity.io** and sign up (free, no card needed).
2. Once logged in, run this in a terminal **inside this project folder**:
   ```
   npx sanity@latest init
   ```
   - Choose **"Create new project"**.
   - Name it anything, e.g. "Kapilcaptures".
   - Use the **default dataset name: `production`**.
   - When asked to use the existing config / schema, say **yes** (this project already has the
     schema written for you in the `sanity/schemaTypes` folder).
3. This gives you a **Project ID** — copy it, you'll need it in Step 3.

> Don't have a terminal yet? See "If you've never used a terminal before" at the bottom.

## Step 2 — Put the code on GitHub

1. Create a free account at **github.com**.
2. Create a new empty repository (e.g. `kapilcaptures-website`).
3. Upload this whole project folder to it. The simplest way as a beginner:
   - Go to your new repo on GitHub → **"uploading an existing file"** → drag and drop everything
     in this folder (except the `node_modules` folder if present — it's regenerated automatically).

## Step 3 — Deploy to Vercel (this makes your site live)

1. Create a free account at **vercel.com** — sign up using your GitHub account, it's one click.
2. Click **"Add New Project"** → select your `kapilcaptures-website` repo → **Import**.
3. Before clicking Deploy, open **"Environment Variables"** and add these three (from Step 1):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET    = production
   NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
   ```
4. Click **Deploy**. In about a minute, your site is live at a `your-project.vercel.app` address.
   (You can connect your own domain name later under Vercel → Settings → Domains.)

## Step 4 — Add your content

1. Visit `your-live-site.vercel.app/studio` — this is your content dashboard, built right into
   the site. Log in with the same Sanity account from Step 1.
2. You'll see sections matching the site exactly:
   - **Home — Hero Slides** — the rotating background photos on the homepage
   - **Home — Recent Work Gallery** — the gallery on the homepage
   - **Films Page — Video Cards** — paste a YouTube video ID + title + category
   - **Weddings Page — Photos** / **Weddings Page — Films**
   - **Corporate Page — Gallery**
   - **Home — Testimonials**
   - **Site Settings** — address, email, phone, studio hours, social links
3. Add a few entries, hit **Publish** on each. Your live site updates automatically within about
   a minute (no redeploy needed) — refresh the page to see it.

**Finding a YouTube Video ID:** in a URL like `youtube.com/watch?v=3RDdoHoDIs0`, the ID is the
part after `v=`, e.g. `3RDdoHoDIs0`.

---

## What's editable vs. fixed

To keep this manageable for a first version, the **photo/video galleries, hero slides,
testimonials, and contact details** are fully editable in Sanity. Page headlines, intro
paragraphs, and the booking/contact forms stay as code for now — if you'd like those editable
too later, just ask and I can add them as additional Sanity fields.

## If you've never used a terminal before

You only need a terminal once, for Step 1 (`npx sanity@latest init`). On Windows, open
**PowerShell**; on Mac, open **Terminal** (search Spotlight for "Terminal"). You'll first need
**Node.js** installed — download the "LTS" version from **nodejs.org**, then open the terminal,
type `cd ` (with a space) and drag this project folder into the window, press Enter, then run the
`npx sanity@latest init` command above.

If this still feels like too much, let me know — I can also walk through it with you live, step
by step.
