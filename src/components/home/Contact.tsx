const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Visit our store or reach out to us
          </p>
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Store Address
              </h3>
              <address className="mt-3 text-gray-500 not-italic">
                Chetna's
                <br />
                Shop no 4, Gemini apt,
                <br />
                Marve Rd, Malad West,
                <br />
                Mumbai, Maharashtra 400095
              </address>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">
                Contact Numbers
              </h3>
              <div className="mt-3 space-y-1">
                <a
                  href="tel:+919987886371"
                  className="text-rose-600 block hover:text-rose-700"
                >
                  +91 9987886371
                </a>
                <a
                  href="tel:+919930881987"
                  className="text-rose-600 block hover:text-rose-700"
                >
                  +91 9930881987
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
