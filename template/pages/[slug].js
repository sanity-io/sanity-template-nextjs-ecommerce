import Error from "next/error";
import { groq } from "next-sanity";
import LandingPage from '../components/LandingPage'
import { getClient, usePreviewSubscription } from "../utils/sanity";

const query = groq`*[_type == "route" && slug.current == $slug][0]{
  page->,
}`;

function ProductPageContainer(props) {
  const { data: pageData = {} } = usePreviewSubscription(query, {
    params: { slug: props?.pageData?.slug?.current },
    initialData: props?.pageData,
    enabled: props?.preview,
  });
  if (props?.errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <LandingPage page={pageData.page} />
  );
}

export async function getStaticPaths() {
  const routes = await getClient()
    .fetch(`*[_type == "route" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`);
  return {
    paths: routes,
    fallback: true,
  };
}

export async function getStaticProps({ params = {} }) {
  const { slug, preview = null } = params;
  const pageData = await getClient(preview).fetch(query, { slug });

  return {
    props: { preview, pageData, errorCode: !pageData && 404 }, // will be passed to the page component as props
  };
}

export default ProductPageContainer;
