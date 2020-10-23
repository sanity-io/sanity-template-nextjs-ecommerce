import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'

import {api} from '../studio/sanity.json'

const config = {
  ...api,
  useCdn: process.env.NODE_ENV === 'production',
}
export const urlFor = source => createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const sanityClient = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  withCredentials: true
  // token: process.env.SANITY_API_TOKEN,
})

export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)
export const useCurrentUser = createCurrentUserHook(config)
