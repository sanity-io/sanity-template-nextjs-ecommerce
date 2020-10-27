import Error from 'next/error'
import ProductPage from '../../components/ProductPage'
import {groq} from 'next-sanity'
import {getClient, usePreviewSubscription} from '../../utils/sanity'


const query = groq`*[_type == "product" && slug.current == $slug][0]`

function ProductPageContainer(props) {
  const {data: productData = {}} = usePreviewSubscription(query, {
    params: {slug: props?.productData?.slug?.current},
    initialData: props?.productData,
    enabled: props?.preview
  })
  if (props?.errorCode) {
    return <Error statusCode={errorCode} />
  }
  const {
    _id,
    title,
    defaultProductVariant,
    mainImage,
    blurb,
    body,
    tags,
    vendor,
    categories,
    slug
  } = productData
  return (<ProductPage
      id={_id}
      title={title}
      defaultProductVariant={defaultProductVariant}
      mainImage={mainImage}
      blurb={blurb}
      body={body}
      tags={tags}
      vendor={vendor}
      categories={categories}
      slug={slug?.current}
    />)
}

export async function getStaticPaths() {
  const products = await getClient().fetch(`*[_type == "product" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`)
  return {
    paths: products,
    fallback: true
  }
}

export async function getStaticProps({params = {}}) {
  const { slug, preview = null } = params
  const productData = await getClient(preview).fetch(query, { slug })

  return {
    props: { preview, productData, errorCode: !productData && 404 } // will be passed to the page component as props
  }
}

export default ProductPageContainer
