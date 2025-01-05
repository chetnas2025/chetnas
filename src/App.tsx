import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Contact from "./components/home/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <div className="fixed inset-0 -z-10 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
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
