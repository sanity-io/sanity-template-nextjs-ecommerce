import React from 'react'
import IframePreview from '../iframe/IframePreview'

export default function ProductsOverviewPreview(props) {
  const {displayed} = props
  return (
    <IframePreview
      {...props}
      previewURL={
        process.env.NODE_ENV === 'production'
          ? `${process.env.VERCEL_URL}/${displayed?.slug?.current}`
          : `http://localhost:3000/products/`
      }
    />
  )
}
