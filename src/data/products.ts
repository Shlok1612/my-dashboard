export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women';
  subcategory: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  // Men's Clothing
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'tops',
    description: 'Premium cotton t-shirt with a comfortable fit. Perfect for everyday wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'outerwear',
    description: 'Classic denim jacket with vintage wash. Timeless style meets modern comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Chino Pants',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'bottoms',
    description: 'Versatile chino pants perfect for both casual and semi-formal occasions.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: '4',
    name: 'Hoodie',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'tops',
    description: 'Comfortable hoodie with soft fleece lining. Perfect for layering.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy', 'Green'],
    rating: 4.5,
    reviews: 203,
    inStock: true,
  },
  {
    id: '5',
    name: 'Dress Shirt',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'tops',
    description: 'Professional dress shirt with wrinkle-resistant fabric.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink'],
    rating: 4.9,
    reviews: 78,
    inStock: true,
  },
  {
    id: '6',
    name: 'Sneakers',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
    category: 'men',
    subcategory: 'shoes',
    description: 'Comfortable sneakers with modern design and superior cushioning.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Navy'],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    featured: true,
  },

  // Women's Clothing
  {
    id: '7',
    name: 'Floral Summer Dress',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'dresses',
    description: 'Beautiful floral dress perfect for summer occasions. Light and breezy fabric.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Navy Floral', 'Pink Floral'],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: true,
  },
  {
    id: '8',
    name: 'High-Waist Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'bottoms',
    description: 'Stylish high-waist jeans with a flattering fit. Made from premium denim.',
    sizes: ['24', '26', '28', '30', '32', '34'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    rating: 4.6,
    reviews: 267,
    inStock: true,
    featured: true,
  },
  {
    id: '9',
    name: 'Blouse',
    price: 45.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'tops',
    description: 'Elegant blouse with delicate details. Perfect for office or casual wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Pink'],
    rating: 4.8,
    reviews: 145,
    inStock: true,
  },
  {
    id: '10',
    name: 'Cardigan',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'tops',
    description: 'Cozy cardigan perfect for layering. Soft knit material.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Navy', 'Pink'],
    rating: 4.5,
    reviews: 98,
    inStock: true,
  },
  {
    id: '11',
    name: 'Midi Skirt',
    price: 55.99,
    originalPrice: 75.99,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'bottoms',
    description: 'Versatile midi skirt that can be dressed up or down.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Pink'],
    rating: 4.7,
    reviews: 123,
    inStock: true,
  },
  {
    id: '12',
    name: 'Ankle Boots',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop',
    category: 'women',
    subcategory: 'shoes',
    description: 'Stylish ankle boots with comfortable heel. Perfect for any season.',
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    featured: true,
  },
];

export const categories = [
  { id: 'men', name: 'Men', subcategories: ['tops', 'bottoms', 'outerwear', 'shoes'] },
  { id: 'women', name: 'Women', subcategories: ['tops', 'bottoms', 'dresses', 'shoes'] },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};