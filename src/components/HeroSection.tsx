import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
          alt="Fashion Hero"
          fill
          className="object-cover opacity-40"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Discover Your Style
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Shop the latest trends in men's and women's fashion. 
            Quality clothing at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/men"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Men's
            </Link>
            <Link
              href="/women"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Shop Women's
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
