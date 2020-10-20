import sanityClient from '@sanity/client'
import {api} from '../studio/sanity.json'
const {
    projectId,
    dataset
  } = api

export const client = sanityClient({
  projectId,
  dataset,
  useCdn: false,
})
