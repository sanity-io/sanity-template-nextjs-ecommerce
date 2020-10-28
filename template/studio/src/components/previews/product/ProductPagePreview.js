import React from 'react'
import styles from './IframePreview.css'

export default function ProductsPreview(props) {
  const { displayed } = props.document
  if (!displayed?.slug?.current) {
    return <div>The product needs a slug before it can be previewed.</div>
  }
  const url =
    process.env.NODE_ENV === 'production'
      ? `../../products/${displayed?.slug?.current}?preview`
      : `http://localhost:3000/products/${displayed?.slug?.current}?preview`

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={'0'} />
      </div>
    </div>
  )
}
