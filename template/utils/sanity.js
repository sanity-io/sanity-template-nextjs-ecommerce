import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'

const config = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
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
