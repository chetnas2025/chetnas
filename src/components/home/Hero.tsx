import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-rose-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="relative">
                <span className="block text-sm font-semibold uppercase tracking-wide text-rose-600 sm:text-base lg:text-sm xl:text-base animate-fade-in">
                  Welcome to
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900 animate-slide-up">
                    Discover Elegance at
                  </span>
                  <span className="block bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent animate-slide-up-delayed">
                    Chetna's
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate-fade-in">
                Experience the finest collection of designer kurtis at wholesale
                prices. Our pieces blend traditional aesthetics with
                contemporary designs, perfect for the modern woman.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left animate-fade-in-up">
                <p className="text-base font-medium text-gray-900">
                  Exclusive wholesale collection for retailers and bulk buyers.
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4 animate-fade-in-up">
                <Link
                  to="/collection"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View Collection
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-rose-600 text-base font-medium rounded-full text-rose-600 bg-transparent hover:bg-rose-50 transform hover:scale-105 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative block w-full bg-white rounded-2xl overflow-hidden">
                  <div className="w-full h-96 bg-gradient-to-r from-rose-100 via-purple-50 to-rose-100 flex items-center justify-center animate-gradient-x">
                    <span className="text-8xl transform hover:scale-110 transition-transform duration-300 hover:rotate-12">
                      👗
                    </span>
                  </div>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
                    <h2 className="text-center text-3xl font-bold text-white drop-shadow-lg">
                      Premium Kurti Collection
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
