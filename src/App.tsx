import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Contact from "./components/home/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-brand-secondary">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-black opacity-95" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url('/src/assets/floral-pattern.svg')`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px",
            }}
          />
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
