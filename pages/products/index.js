import Error from 'next/error'
import { useRouter } from 'next/router'
import { getClient, usePreviewSubscription } from '../../utils/sanity'
import ProductsPage from '../../components/ProductsPage'

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`

function ProductsPageContainer ({ productsData, preview }) {
  const router = useRouter()
  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null
  })

  return <ProductsPage products={products} />
}

export async function getStaticProps ({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query)

  return {
    props: { preview, productsData }
  }
}

export default ProductsPageContainer
