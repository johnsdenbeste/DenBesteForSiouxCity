# Den Beste for Sioux City — Campaign Website

This repository contains a simple, fast one‑page site built with **React + Vite + Tailwind** that matches your campaign branding.

## Local Setup
1. Install **Node.js 18+** from https://nodejs.org
2. In a terminal:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:5173 to preview.

## Edit Content
- Main page content: `src/App.jsx`
- Colors are set to your palette:
  - Navy: `#162d53`
  - Chartreuse: `#dbe11f`
  - Off‑white: `#fffbfd`
- Replace the donation URL in `App.jsx` (`DONATE_URL`) with your live GiveButter/Stripe link.
- Replace `public/logo.png` if you want a different logo image.

## Deploy (Vercel – recommended)
1. Create a Vercel account at https://vercel.com and log in.
2. Create a new project and **Import from GitHub** (or use Vercel CLI).
3. When prompted, set:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Point Your Domain
After the project is deployed, add your domain:
1. In Vercel, go to **Project → Settings → Domains → Add** and enter `DenBesteForSiouxCity.com` (and any subdomains).
2. Vercel will show the DNS records:
   - Apex/root (`DenBesteForSiouxCity.com`): `A 76.76.21.21`
   - `www` subdomain: `CNAME cname.vercel-dns.com`
3. In your domain registrar (GoDaddy/Namecheap/Google Domains):
   - Create/Update the **A** record for the root to `76.76.21.21`
   - Create/Update the **CNAME** record for **www** to `cname.vercel-dns.com`
4. Wait for DNS to propagate; Vercel will confirm when active.

## Email on Your Domain
- Set up email (e.g., Google Workspace) for `contact@DenBesteForSiouxCity.com`.
- Add the required **MX** and **SPF/DKIM** records your email provider gives you.

## Meta (Facebook/Instagram) Domain Verification
1. Open **Meta Business Settings → Brand Safety → Domains**.
2. Click **Add**, enter `DenBesteForSiouxCity.com`.
3. Choose **DNS verification** and copy the **TXT** record they provide.
4. In your domain DNS, add the TXT record at the root.
5. Click **Verify** in Meta once DNS propagates.

## Political Ad Disclaimer Setup
1. Go to https://www.facebook.com/id/ads/political and complete identity verification.
2. Create a disclaimer with the exact text:
   **Paid for by Den Beste for Sioux City**
3. Use your campaign email `contact@DenBesteForSiouxCity.com` when prompted.
4. Link the approved disclaimer to your Facebook Page in **Page Settings → Ad Settings → Disclaimer**.
5. Boost a test post — you should see the disclaimer appear automatically.

---

### Netlify (alternative host)
- Build: `npm run build`
- Deploy: connect repo in Netlify → set `build` and `dist` → deploy.
- Domain: point DNS per Netlify instructions (CNAME to Netlify).

### Accessibility & Legal
- Keep the **Paid for by Den Beste for Sioux City** disclaimer visible in the footer and hero.
- Ensure contact email and donate link are correct before running ads.
