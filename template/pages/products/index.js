import Error from 'next/error'
import ProductsPage from '../../components/ProductsPage'
import {getClient, usePreviewSubscription} from '../../utils/sanity'

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`

function ProductsPageContainer(props) {
  const {data: productsData} = usePreviewSubscription(query, {
    initialData: props?.productsData,
    enabled: true
  })
  if (props?.errorCode) {
    return <Error statusCode={errorCode} />
  }
  return (<ProductsPage products={productsData} />)
}

export async function getStaticProps({params = {}}) {
  const { preview } = params
  const productsData = await getClient(preview).fetch(query)

  return {
    props: { productsData, errorCode: !productsData && 404 } // will be passed to the page component as props
  }
}

export default ProductsPageContainer
