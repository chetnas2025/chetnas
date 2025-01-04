import React from "react";
import { Link } from "react-router-dom";
import { Phone, LocationOn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Chetna's
            </h3>
            <p className="text-gray-400">
              Your trusted destination for premium wholesale Kurtis in Mumbai
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-purple-400 mt-1" />
                <div className="text-gray-400">
                  +91 9987886371
                  <br />
                  +91 9930881987
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <LocationOn className="text-purple-400 mt-1" />
                <div className="text-gray-400">
                  Shop no 4, Gemini apt,
                  <br />
                  Marve Rd, Malad West,
                  <br />
                  Mumbai, Maharashtra 400095
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Saturday</li>
              <li>10:00 AM - 8:00 PM</li>
              <li className="text-purple-400">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Chetna's. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
