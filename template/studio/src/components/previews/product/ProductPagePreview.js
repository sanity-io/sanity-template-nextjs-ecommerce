import React from 'react'
import IframePreview from '../iframe/IframePreview'
const url = process.env.SANITY_STUDIO_WEBSITE_URL

export default function ProductsPreview(props) {
  const {displayed} = props.document
  if (!url) {
    return <div>You need to add SANITY_STUDIO_WEBSITE_URL to your <a href="https://www.sanity.io/docs/studio-environment-variables">environment variables</a>.</div>
  }
  return (
    <IframePreview
      {...props}
      previewURL={
        process.env.NODE_ENV === 'production'
          ? `https://${url}/products/${displayed?.slug?.current}?preview`
          : `http://localhost:3000/products/${displayed?.slug?.current}?preview`
      }
    />
  )
}
