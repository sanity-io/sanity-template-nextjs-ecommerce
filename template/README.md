# Sanity.io and Next.js Ecommerce Starter

This is an e-commerce *starter* that features a studio with a simple Next.js frontend.

This starter uses the [Next.js toolkit for Sanity.io](https://github.com/sanity-io/next-sanity).

**Features:**

* Live previews, including website preview for products
* Frontend with product pages styled using Tailwind.css
* Content types for products, ads, pages, routes, popup shops, social media

This starter comes with an intentionally sparse frontend for just products and super simple landing pages. The fun is building and tweaking it yourself?

## Running Locally

To run locally, rename `.env.test` to `.env` and add your project ID from [manage.sanity.io](https://manage.sanity.io). 

```bash
# Runs the frontend at localhost:3000
npm start

# Runs the Studio at localhost:3333
npm run start:sanity
```

## Enabling live preview

You can append `?preview` to the landing pages, product pages and the products overview to enable preview mode when you are logged into your Sanity project. For example:

`https://<your-project>.vercel.app/products/roji?preview`

You can find the code for the in-studio preview over in `/studio/src/components/product`.


## Credits

The e-commerce frontend is built with Tailwind components by [khatabwedaa](https://tailwindcomponents.com/u/khatabwedaa).