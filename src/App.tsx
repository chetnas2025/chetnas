import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Contact from "./components/home/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Features />
                <Contact />
              </main>
            }
          />
          <Route
            path="/collection"
            element={
              <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                      Our Collection
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Coming Soon - We're curating a beautiful collection just
                      for you.
                    </p>
                    <div className="mt-8 text-6xl">✨</div>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
