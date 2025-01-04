import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-800 mb-6">
              About Chetna's
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted destination for premium wholesale Kurtis in Mumbai.
              We bring you the finest collection of traditional and contemporary
              designs at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Established with a vision to provide high-quality Kurtis to
                retailers and businesses, Chetna's has grown to become a trusted
                name in the wholesale Kurti market.
              </p>
              <p className="text-gray-600 mb-4">
                We take pride in our carefully curated collection that combines
                traditional aesthetics with modern fashion trends, ensuring our
                customers always have access to the latest styles.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Add store image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-purple-600 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4">Quality Design</h3>
              <p className="text-gray-600">
                We focus on creating designs that blend traditional aesthetics
                with contemporary fashion
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-purple-600 text-4xl mb-4">👗</div>
              <h3 className="text-xl font-semibold mb-4">Premium Fabric</h3>
              <p className="text-gray-600">
                We use only the highest quality fabrics to ensure comfort and
                durability
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-purple-600 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-4">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                We prioritize our customers' satisfaction with competitive
                pricing and reliable service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-600 rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Wholesale Shopping?
            </h2>
            <p className="text-purple-100 mb-8">
              Contact us today to explore our latest collection and wholesale
              prices
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
