import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';

export default function MenPage() {
  const menProducts = getProductsByCategory('men');

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Men's Clothing
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our collection of stylish and comfortable men's clothing. 
              From casual wear to formal attire, we have everything you need.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Category:</label>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option value="">All Categories</option>
                  <option value="tops">Tops</option>
                  <option value="bottoms">Bottoms</option>
                  <option value="outerwear">Outerwear</option>
                  <option value="shoes">Shoes</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Price:</label>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option value="">All Prices</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100+">$100+</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Showing {menProducts.length} products
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
