import { motion } from "framer-motion";
import { LocalMall, Palette, Diamond, Settings } from "@mui/icons-material";

const Features = () => {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Hand-picked fabrics and superior craftsmanship in every piece",
      icon: <LocalMall className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Wholesale Pricing",
      description: "Best prices for bulk orders with flexible payment options",
      icon: <Diamond className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Latest Designs",
      description: "Trendy and contemporary styles updated regularly",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for your specific requirements",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
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
              Why Choose Chetna's?
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of style, quality, and value
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-50 blur-xl group-hover:opacity-75 transition duration-500`}
              />
              <div className="relative h-full p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
