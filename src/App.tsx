import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Contact from "./components/home/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-primary text-brand-secondary">
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.97), rgba(10, 10, 10, 0.97)), url('/src/assets/floral-pattern.svg')`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px",
            }}
          ></div>
        </div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="relative">
                <Hero />
                <Features />
                <Contact />
              </main>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
