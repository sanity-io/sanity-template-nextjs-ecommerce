import React from 'react'
import IframePreview from '../iframe/IframePreview'

export default function ProductsOverviewPreview(props) {
  const {displayed} = props
  return (
    <IframePreview
      {...props}
      previewURL={
        process.env.NODE_ENV === 'production'
          ? `https://sanity-template-nextjs-ecommerce.sanity-io.vercel.app/products`
          : `http://localhost:3000/products/`
      }
    />
  )
}
