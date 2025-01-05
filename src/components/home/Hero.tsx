import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="relative">
                <span className="block text-sm font-semibold uppercase tracking-wide text-brand-accent sm:text-base lg:text-sm xl:text-base">
                  Welcome to
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-brand-secondary">
                    Discover Elegance at
                  </span>
                  <span className="block font-serif italic">Chetna's</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-brand-secondary/80 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Experience the finest collection of designer kurtis at wholesale
                prices. Our pieces blend traditional aesthetics with
                contemporary designs, perfect for the modern woman.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <p className="text-base font-medium text-brand-secondary/90">
                  Exclusive wholesale collection for retailers and bulk buyers.
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                <Link
                  to="/collection"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-secondary bg-brand-accent hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View Collection
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-accent text-base font-medium rounded-md text-brand-secondary bg-transparent hover:bg-brand-gray-dark/50 transform hover:scale-105 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative block w-full rounded-lg overflow-hidden">
                  <div className="w-full h-96 bg-brand-gray-dark/50 backdrop-blur-sm flex items-center justify-center">
                    <img
                      src="/src/assets/Chetnas.jpg"
                      alt="Chetna's Logo"
                      className="w-full h-full object-cover"
                    />
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
