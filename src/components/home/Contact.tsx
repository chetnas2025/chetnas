import { motion } from "framer-motion";
import { Phone, WhatsApp, LocationOn, AccessTime } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItMiAyLTRzLTItMi0yLTQgMi0yIDItNCAyLTIgMi00LTItMi0yLTQgMi0yIDItNGgtMmMwIDItMiAyLTIgNHMtMiAyLTIgNCAyIDIgMiA0LTIgMi0yIDQgMiAyIDIgNC0yIDItMiA0IDIgMiAyIDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Visit Our Store
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            Premium wholesale kurti collection in Mumbai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Location Section */}
              <div className="p-8 md:p-12">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 flex items-center justify-center">
                        <LocationOn className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Store Location
                      </h3>
                    </div>

                    <address className="text-gray-300 not-italic text-lg space-y-2">
                      <p className="text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Chetna's
                      </p>
                      <p>Shop no 4, Gemini apt,</p>
                      <p>Marve Rd, Malad West,</p>
                      <p>Mumbai, Maharashtra 400095</p>
                    </address>

                    <a
                      href="https://maps.app.goo.gl/z4fs4ba6zg6r3LXcA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                    >
                      <LocationOn className="mr-2" /> View on Google Maps
                    </a>

                    <div className="pt-6 flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 flex items-center justify-center shrink-0">
                        <AccessTime className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Business Hours
                        </h4>
                        <p className="text-gray-300">
                          Monday - Saturday
                          <br />
                          10:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="p-8 md:p-12 bg-gray-800/50">
                <div className="space-y-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 flex items-center justify-center">
                      <Phone className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Quick Contact
                    </h3>
                  </div>

                  {/* Main Contact */}
                  <div className="space-y-6">
                    <div>
                      <a
                        href="tel:+919833977850"
                        className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-colors"
                      >
                        +91 98339 77850
                      </a>
                      <p className="text-gray-400 mt-1">Main Contact</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:+919833977850"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                      >
                        <Phone className="mr-2" /> Call Now
                      </a>
                      <a
                        href="https://wa.me/919833977850"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
                      >
                        <WhatsApp className="mr-2" /> WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Alternative Contact */}
                  <div className="space-y-6 pt-6">
                    <div>
                      <a
                        href="tel:+919930881987"
                        className="text-2xl font-bold bg-gradient-to-r from-purple-400/80 to-pink-400/80 bg-clip-text text-transparent hover:from-purple-300/80 hover:to-pink-300/80 transition-colors"
                      >
                        +91 99308 81987
                      </a>
                      <p className="text-gray-400 mt-1">Alternative Number</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:+919930881987"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700/80 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-purple-500/20"
                      >
                        <Phone className="mr-2" /> Call Now
                      </a>
                      <a
                        href="https://wa.me/919930881987"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600/80 text-white rounded-lg hover:bg-green-700/80 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-green-500/20"
                      >
                        <WhatsApp className="mr-2" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
