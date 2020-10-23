import { useState } from 'react'
import Layout from './Layout'

import ProductCard from './ProductCard'

function ProductsPage ({ products }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const handleCart = () => setCartOpen(!cartOpen)
  const handleOpen = () => setOpen(!open)

  return (<Layout>
        <div className="container mx-auto px-6">
          <h3 className="text-gray-700 text-2xl font-medium">Juices</h3>
          <span className="mt-3 text-sm text-gray-500">The Juicy bits.</span>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {products.map(product => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="flex rounded-md mt-8">
              <a
                href="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
              >
                <span>Previous</span>
              </a>
              <a
                href="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              >
                <span>1</span>
              </a>
              <a
                href="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              >
                <span>2</span>
              </a>
              <a
                href="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              >
                <span>3</span>
              </a>
              <a
                href="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
              >
                <span>Next</span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default ProductsPage
