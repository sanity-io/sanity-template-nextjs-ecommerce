# Sanity.io and Next.js Ecommerce Starter

This is an e-commerce *starter* that features a studio with a simple Next.js frontend.

This starter uses the [Next.js toolkit for Sanity.io](https://github.com/sanity-io/next-sanity).

**Features:**

* Live previews, including website preview for products
* Frontend with product pages styled using Tailwind.css
* Content types for products, ads, pages, routes, popup shops, social media

This starter comes with an intentionally sparse frontend for just products. The fun is building and tweaking it yourself?

## Installation and enabling live preview

You need to set a token in your environment variables with read access to give the serverless side access to draft data.

1. Go to your project settings on [manage.sanity.io](https://manage.sanity.io) => Settings => API
2. Create a new token with read permissions
3. Add the token to your project’s environment variables on [vercel.com](https://vercel.com/docs/build-step#environment-variables) using the key `SANITY_API_TOKEN=<your token>`
5. You also need to set the URL for the production frontend you want to use to the environment variable `SANITY_STUDIO_WEBSITE_URL` (do not include the `https://`).

Now you can append `?preview` to the product pages and the products overview to enable preview mode when you are logged into your Sanity project. For example:

`https://<your-project>.vercel.app/products/roji?preview`

You can find the code for the in-studio preview over in `/studio/src/components/product`


## Credits

The e-commerce frontend is built with Tailwind components by [khatabwedaa](https://tailwindcomponents.com/u/khatabwedaa).