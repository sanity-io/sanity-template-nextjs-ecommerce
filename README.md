# Sanity.io and Next.js Ecommerce Starter

This is an e-commerce *starter* that features a studio with a simple Next.js frontend.

Features:

* Live previews, including website preview for products
* Custom diff components for Google Maps and Watson (require API TOKENS)
* Frontend with product pages styled using Tailwind.css
* Content types for products, ads, pages, routes, popup shops, social media

## Installation and enabling live preview

You need to set a token in your environment variables with read access to give the serverless side access to draft data.

1. Go to your project settings on [manage.sanity.io](https://manage.sanity.io) => Settings => API
2. Create a new token with read permissions
3. Add to your project’s environment variables on [vercel.com](https://vercel.com/docs/build-step#environment-variables)
4. Use the key `SANITY_API_TOKEN=<your token>`

Now you can addend `?preview` to the product pages and the products overview to enable preview mode when you are logged into your Sanity project.

## Credits

The e-commerce frontend is built with Tailwind components by [khatabwedaa](https://tailwindcomponents.com/u/khatabwedaa).