# Sanity.io and Next.js Ecommerce Starter

This is an e-commerce *starter* that features a studio with a simple Next.js frontend.

Features:

* Live previews, including website preview for products
* Custom diff components for Google Maps and Watson (require API TOKENS)
* Frontend with product pages styled using Tailwind.css
* Content types for products, ads, pages, routes, popup shops, social media

## Enable the custom route for previews

1. Go to your project settings on [manage.sanity.io](https://manage.sanity.io) => Settings => API
2. Create a new token with read permissions

3. Add to your project’s environment variables on [vercel.com]()

Log into https://manage.sanity.io/ and choose the project you just created. Then from **Settings**, select **API**, then click **Add New Token** and create a token with the **Read** permission.

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` should be the `projectId` value from the `sanity.json` file created in step 2.
- `SANITY_API_TOKEN` should be the API token generated in the previous step.
- `SANITY_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

Your `.env.local` file should look like this:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=...
SANITY_API_TOKEN=...
SANITY_PREVIEW_SECRET=...
```

## Credits

The e-commerce frontend is built with Tailwind components by [khatabwedaa](https://tailwindcomponents.com/u/khatabwedaa).