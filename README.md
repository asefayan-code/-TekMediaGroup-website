# Tek Media Group website

Marketing site for [Tek Media Group](https://tekmg.com), an electronics repair shop in Burbank, CA.
Built with [Astro](https://astro.build) as a static site and hosted on [Render](https://render.com).

Service tickets, ticket lookup, invoices, payments and customer login stay on RepairShopr;
the site links to the customer portal.

## Edit content

- **Business details** (phone, hours, address, email, portal links): `src/data/site.ts`
- **Services** (each one becomes a page under `/services/`): `src/data/services.ts`
- **Pages**: `src/pages/`
- **Styles**: `src/styles/global.css`

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy on Render

1. In Render, choose **New > Blueprint** and pick this GitHub repo. Render reads `render.yaml`.
2. Every push to `main` redeploys. Pull requests get preview URLs.
3. To go live, add `tekmg.com` and `www.tekmg.com` under the service's **Custom Domains**
   and update DNS as Render instructs.

`render.yaml` also redirects the old `.aspx` URLs to the new pages so search rankings and old links keep working.
