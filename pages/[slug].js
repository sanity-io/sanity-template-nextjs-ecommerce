import Error from 'next/error'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import LandingPage from '../components/LandingPage'
import { getClient, usePreviewSubscription } from '../utils/sanity'

const query = groq`*[_type == "route" && slug.current == $slug][0]{
  page->
}`

function ProductPageContainer({ pageData, preview }) {
  const router = useRouter()
  if (!router.isFallback && !pageData?.slug?.current) {
    return <Error statusCode={404} />
  }

  const { data: page = {} } = usePreviewSubscription(query, {
    params: { slug: pageData?.slug?.current },
    initialData: pageData,
    enabled: preview || router.query.preview !== null
  })

  return <LandingPage page={page} />
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { page: pageData } = await getClient(preview).fetch(query, {
    slug: params.slug
  })

  return {
    props: { preview, pageData }
  }
}

export async function getStaticPaths() {
  const routes = await getClient()
    .fetch(`*[_type == "route" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`)
  return {
    paths: routes || null,
    fallback: true
  }
}

export default ProductPageContainer
