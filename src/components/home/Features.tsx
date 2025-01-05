import { useInView } from "react-intersection-observer";

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Premium Quality",
      description:
        "Hand-picked fabrics and superior craftsmanship in every piece",
      icon: "✨",
    },
    {
      title: "Wholesale Pricing",
      description: "Best prices for bulk orders with flexible payment options",
      icon: "💎",
    },
    {
      title: "Latest Designs",
      description: "Trendy and contemporary styles updated regularly",
      icon: "🎨",
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for your specific requirements",
      icon: "✂️",
    },
  ];

  return (
    <div className="py-24 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-serif italic font-bold text-brand-secondary sm:text-5xl">
            Why Choose Chetna's?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-secondary/80">
            Experience the perfect blend of style, quality, and value
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-brand-accent/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative h-full p-8 bg-black/50 backdrop-blur-sm rounded-lg leading-none flex flex-col items-center hover:shadow-2xl transition duration-200 border border-brand-gray-light/10">
                    <span className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200">
                      {feature.icon}
                    </span>
                    <h3 className="text-xl font-bold text-brand-secondary mb-4 group-hover:text-brand-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-brand-secondary/80 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
