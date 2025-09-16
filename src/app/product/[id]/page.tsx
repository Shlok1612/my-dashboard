import { notFound } from 'next/navigation';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { getProductById, products } from '@/data/products';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <a href={`/${product.category}`} className="text-gray-400 hover:text-gray-500 capitalize">
                  {product.category}
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={800}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
                    -{discountPercentage}%
                  </div>
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {[product.image, product.image, product.image, product.image].map((img, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg cursor-pointer">
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-20 object-cover hover:opacity-75 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-500 capitalize mb-4">
                  {product.category} • {product.subcategory}
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Size
                </h3>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium hover:border-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Color
                </h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:border-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="px-3 py-2 text-gray-600 hover:text-gray-900">
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">1</span>
                    <button className="px-3 py-2 text-gray-600 hover:text-gray-900">
                      +
                    </button>
                  </div>
                  
                  <button className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                  
                  <button className="p-3 border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-colors">
                    <HeartOutlineIcon className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>✓ Free shipping on orders over $50</span>
                  <span>✓ 30-day returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <div key={relatedProduct.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <a href={`/product/${relatedProduct.id}`}>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          width={300}
                          height={400}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">
                            ${relatedProduct.price}
                          </span>
                          {relatedProduct.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ${relatedProduct.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
