import Error from 'next/error'
import ProductsPage from '../../components/ProductsPage'
import { client } from '../../utils/client'

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`

function ProductsPageContainer(props) {
  const { productsData, errorCode } = props
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return (
    <ProductsPage products={productsData} />
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

export async function getStaticProps() {
  const productsData = await client.fetch(query)

  return {
    props: { productsData, errorCode: !productsData && 404 } // will be passed to the page component as props
  }
}

export default ProductsPageContainer
