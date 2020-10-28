import Error from 'next/error'
import { useRouter } from 'next/router'
import { getClient, usePreviewSubscription } from '../utils/sanity'
import ProductsPage from '../components/ProductsPage'

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`

function IndexPage (props) {
  const { productsData, preview } = props
  const router = useRouter()
  console.log(props)
  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null
  })

  return (
    <div className="my-8">
      {/* <div className="container mx-auto px-6">
          <div
            className="h-64 rounded-md overflow-hidden bg-cover bg-center"
            style={{backgroundImage: `url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')`}}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Sport Shoes
                </h2>
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>Shop Now</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div
              className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
              style={{backgroundImage: `url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')`}}
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Back Pack
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore facere provident molestias ipsam sint voluptatum
                    pariatur.
                  </p>
                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
              style={{backgroundImage: `url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')`}}
            >
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">Games</h2>
                  <p className="mt-2 text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore facere provident molestias ipsam sint voluptatum
                    pariatur.
                  </p>
                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      <div className="mt-4">
        <ProductsPage products={products} />
      </div>
    </div>
  )
}

export async function getStaticProps ({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query)

  return {
    props: {
      preview,
      productsData
    }
  }
}

export default IndexPage
