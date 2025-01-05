const Contact = () => {
  return (
    <div className="bg-black/40 backdrop-blur-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif italic font-bold text-brand-secondary sm:text-4xl">
            Visit Our Store
          </h2>
          <p className="mt-4 text-lg text-brand-secondary/80">
            Premium wholesale kurti collection in Mumbai
          </p>
        </div>
        <div className="mt-12 bg-black/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-brand-gray-light/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium text-brand-secondary flex items-center">
                  <span className="text-2xl mr-2">📍</span> Store Location
                </h3>
                <address className="mt-4 text-brand-secondary/80 not-italic text-lg">
                  <span className="text-brand-accent font-medium">
                    Chetna's
                  </span>
                  <br />
                  Shop no 4, Gemini apt,
                  <br />
                  Marve Rd, Malad West,
                  <br />
                  Mumbai, Maharashtra 400095
                </address>
              </div>
              <div className="mt-6">
                <p className="text-brand-secondary/80">
                  <span className="text-brand-secondary">Business Hours:</span>
                  <br />
                  Monday - Saturday
                  <br />
                  10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
            <div className="p-8 bg-black/30 backdrop-blur-sm flex flex-col">
              <h3 className="text-xl font-medium text-brand-secondary flex items-center">
                <span className="text-2xl mr-2">📞</span> Quick Contact
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-brand-secondary/80 mb-2">
                    Call or WhatsApp:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919833977850"
                      className="flex items-center text-3xl font-medium text-brand-accent hover:text-brand-accent/80 transition-colors"
                    >
                      +91 98339 77850
                    </a>
                    <p className="text-brand-secondary/60 text-sm">
                      Main Contact
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="tel:+919833977850"
                    className="flex-1 flex items-center justify-center px-6 py-4 text-lg bg-brand-accent text-brand-secondary rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    <span className="mr-2">📞</span> Call Now
                  </a>
                  <a
                    href="https://wa.me/919833977850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-6 py-4 text-lg bg-[#25D366] text-brand-secondary rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    <span className="mr-2">💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
