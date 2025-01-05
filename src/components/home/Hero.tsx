import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="relative">
                <span className="block text-sm font-semibold uppercase tracking-wide text-brand-accent sm:text-base lg:text-sm xl:text-base">
                  Premium Wholesale Kurtis
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-brand-secondary">
                    Contact Us at
                  </span>
                  <span className="block font-serif italic">Chetna's</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-brand-secondary/80 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Visit our store in Mumbai for the finest collection of designer
                kurtis at wholesale prices. Direct factory outlet with exclusive
                designs for retailers and bulk buyers.
              </p>
              <div className="mt-8 space-y-6">
                {/* Main Contact */}
                <div className="space-y-3">
                  <p className="text-brand-accent font-medium text-2xl">
                    Main: +91 98339 77850
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="tel:+919833977850"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-base font-medium rounded-md text-brand-secondary bg-brand-accent hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">📞</span> Call Now
                    </a>
                    <a
                      href="https://wa.me/919833977850"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-base font-medium rounded-md text-brand-secondary bg-[#25D366] hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">💬</span> WhatsApp
                    </a>
                  </div>
                </div>
                {/* Alternative Contact */}
                <div className="space-y-3">
                  <p className="text-brand-accent/80 font-medium text-xl">
                    Alternative: +91 99308 81987
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="tel:+919930881987"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-base font-medium rounded-md text-brand-secondary bg-brand-accent/80 hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">📞</span> Call Now
                    </a>
                    <a
                      href="https://wa.me/919930881987"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-base font-medium rounded-md text-brand-secondary bg-[#25D366]/80 hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span className="mr-2">💬</span> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <p className="text-brand-secondary/80 text-sm">
                    Open Monday to Saturday, 10 AM - 8 PM
                  </p>
                  <span className="text-brand-secondary/40">•</span>
                  <a
                    href="https://maps.app.goo.gl/z4fs4ba6zg6r3LXcA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4285F4] hover:text-[#4285F4]/80 text-sm flex items-center transition-colors"
                  >
                    <span className="mr-1">🗺️</span> Get Directions
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative block w-full rounded-lg overflow-hidden">
                  <div className="w-full h-96 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <img
                      src="/src/assets/Chetnas.jpg"
                      alt="Chetna's Logo"
                      className="w-full h-full object-cover opacity-90"
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
