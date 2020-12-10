# Sanity.io and Next.js Ecommerce Starter

This is an e-commerce *starter* that features a studio with a simple Next.js frontend.

This starter uses the [Next.js toolkit for Sanity.io](https://github.com/sanity-io/next-sanity).

Note: This starter is an example of e-commerce content models and layout. It doesn't come with a full cart and fulfilmment solution. If you're interested in how to integrate Sanity with a e-commerce solution, do [join our community](https://slack.sanity.io).

**Features:**

* Live previews, including website preview for products
* Frontend with product pages styled using Tailwind.css
* Content types for products, ads, pages, routes, popup shops, social media

This starter comes with an intentionally sparse frontend for just products and super simple landing pages. The fun is building and tweaking it yourself?

## Getting started

The quickest way to get up and running is to go to https://www.sanity.io/create?template=sanity-io%2Fsanity-template-nextjs-ecommerce and create a new project by following the instructions there.

## Enabling live preview

You can append `?preview` to the landing pages, product pages and the products overview to enable preview mode when you are logged into your Sanity project. For example:

`https://<your-project>.vercel.app/products/roji?preview`

You can find the code for the in-studio preview over in `/studio/src/components/product`.

## Running Locally

To run locally, rename `.env.test` to `.env` and add your project ID from [manage.sanity.io](https://manage.sanity.io).

If you have already set up deployments on Vercel, you can also do `vercel env pull` to copy environment variables to your development environment.

NOTE: If your Vercel project is set up to use the Next.js framework preset, you'll have to go to the project settings under https://vercel.com and under Build & Develpment change the _development command_ to: `npm run dev`

To start the development server:
```bash
npm start
```
This will run the frontend at http://localhost:3000 and the Sanity Studio at http://localhost:3000/studio

## Credits

The e-commerce frontend is built with Tailwind components by [khatabwedaa](https://tailwindcomponents.com/u/khatabwedaa).
