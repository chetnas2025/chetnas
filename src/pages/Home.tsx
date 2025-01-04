import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
              Welcome to Chetna's
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Discover Elegant Kurtis for Every Occasion
            </p>
            <Link
              to="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                {/* Add image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Designer Kurti</h3>
                <p className="text-gray-600">
                  Elegant design with traditional touch
                </p>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                {/* Add image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Party Wear Kurti</h3>
                <p className="text-gray-600">Perfect for special occasions</p>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                {/* Add image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Casual Kurti</h3>
                <p className="text-gray-600">
                  Comfortable daily wear collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-purple-600 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Finest fabrics and craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="text-purple-600 text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-2">Wholesale Prices</h3>
              <p className="text-gray-600">Best prices for bulk orders</p>
            </div>
            <div className="text-center">
              <div className="text-purple-600 text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Latest Designs</h3>
              <p className="text-gray-600">Trendy and contemporary styles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
