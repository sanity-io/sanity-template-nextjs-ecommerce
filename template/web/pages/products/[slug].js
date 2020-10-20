import Error from 'next/error'
import ProductPage from '../../components/ProductPage'
import { client } from '../../utils/client'

const query = `//groq
  *[_type == "product" && slug.current == $slug][0]
`

function ProductPageContainer(props) {
  const { productData, errorCode } = props
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  const {
    _id,
    title,
    mainImage,
    blurb,
    body,
    tags,
    vendor,
    categories,
    slug
  } = productData
  return (
    <ProductPage
      id={_id}
      title={title}
      mainImage={mainImage}
      blurb={blurb}
      body={body}
      tags={tags}
      vendor={vendor}
      categories={categories}
      slug={slug?.current}
    />
  )
}

export async function getStaticPaths() {
  const products = await client.fetch(`*[_type == "product" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`)
  return {
    paths: products,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const productData = await client.fetch(query, { slug })

  return {
    props: { productData, errorCode: !productData && 404 } // will be passed to the page component as props
  }
}

export default ProductPageContainer
