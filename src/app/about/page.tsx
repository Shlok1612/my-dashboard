import Layout from '@/components/Layout';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About FashionHub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about bringing you the latest fashion trends at affordable prices. 
              Our mission is to make quality clothing accessible to everyone.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020, FashionHub started as a small online boutique with a simple mission: 
                to provide high-quality, trendy clothing for men and women at prices that don't break the bank.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What began as a passion project has grown into a trusted destination for fashion enthusiasts 
                worldwide. We carefully curate our collections to ensure every piece meets our standards 
                for quality, style, and value.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve thousands of customers who trust us for their fashion needs, 
                from everyday essentials to special occasion wear.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quality First
                </h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every item in our collection is carefully selected 
                  and tested to ensure it meets our high standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fair Prices
                </h3>
                <p className="text-gray-600">
                  We believe great fashion shouldn't cost a fortune. Our pricing strategy ensures 
                  you get the best value for your money.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fast Shipping
                </h3>
                <p className="text-gray-600">
                  We know you're excited to receive your order. That's why we offer fast, 
                  reliable shipping with tracking on every package.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                    alt="Team Member"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  John Smith
                </h3>
                <p className="text-gray-600 mb-2">Founder & CEO</p>
                <p className="text-sm text-gray-500">
                  Fashion enthusiast with 10+ years in retail
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
                    alt="Team Member"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sarah Johnson
                </h3>
                <p className="text-gray-600 mb-2">Head of Design</p>
                <p className="text-sm text-gray-500">
                  Creative director with an eye for trends
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
                    alt="Team Member"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mike Davis
                </h3>
                <p className="text-gray-600 mb-2">Operations Manager</p>
                <p className="text-sm text-gray-500">
                  Logistics expert ensuring smooth operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
