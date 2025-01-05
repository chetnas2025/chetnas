import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  LocationOn,
  Instagram,
  Facebook,
  WhatsApp,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Chetna's
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted destination for premium wholesale Kurtis in Mumbai
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://wa.me/919987886371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsApp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Phone className="text-purple-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-400 hover:text-white transition-colors duration-300">
                  <a
                    href="tel:+919987886371"
                    className="block hover:text-purple-400"
                  >
                    +91 9987886371
                  </a>
                  <a
                    href="tel:+919930881987"
                    className="block hover:text-purple-400"
                  >
                    +91 9930881987
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <LocationOn className="text-purple-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <address className="text-gray-400 not-italic hover:text-white transition-colors duration-300">
                  Shop no 4, Gemini apt,
                  <br />
                  Marve Rd, Malad West,
                  <br />
                  Mumbai, Maharashtra 400095
                </address>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Business Hours
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="font-medium text-white">
                  Monday - Saturday
                </span>
                <br />
                10:00 AM - 8:00 PM
              </li>
              <li className="text-purple-400 font-medium">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Chetna's. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
