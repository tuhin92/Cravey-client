import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "Youtube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1a1f2b] to-[#2c3442] text-gray-200">
      {/* Newsletter Section - Improved responsive design */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <h3 className="text-xl font-bold text-white">Join Our Newsletter</h3>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">Get fitness tips, exclusive offers and more</p>
            </div>
            <div className="w-full sm:w-auto">
              <div className="flex w-full max-w-md mx-auto sm:mx-0">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 w-full bg-gray-800 text-white rounded-l-md focus:outline-none text-sm"
                />
                <button className="bg-[#ff6b6b] hover:bg-[#ff5252] transition-colors px-4 sm:px-6 py-3 text-white font-medium rounded-r-md whitespace-nowrap text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer - Better responsive grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-y-8 gap-x-4 sm:gap-x-6">
          {/* Brand Column - Full width on smallest screens */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Cravey Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Cravey</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-md">
              Your premium grocery store offering fresh, high-quality food products. Discover a wide selection of delicious ingredients to satisfy your cravings.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 bg-gray-800 rounded-full hover:bg-[#ff6b6b] transition-colors group"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Updated paths */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="text-sm font-bold mb-3 sm:mb-4 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" 
                      className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs sm:text-sm inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" 
                      className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs sm:text-sm inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" 
                      className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs sm:text-sm inline-block">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/reviews" 
                      className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs sm:text-sm inline-block">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="text-sm font-bold mb-3 sm:mb-4 text-white uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['FAQ', 'Help Center', 'Shipping', 'Returns'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} 
                        className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs sm:text-sm inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="text-sm font-bold mb-3 sm:mb-4 text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Terms', 'Privacy', 'Cookies', 'Licenses'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} 
                        className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs sm:text-sm inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-bold mb-3 sm:mb-4 text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-[#ff6b6b] flex-shrink-0" />
                <span className="text-xs sm:text-sm truncate">support@cravey.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-[#ff6b6b] flex-shrink-0" />
                <span className="text-xs sm:text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#ff6b6b] flex-shrink-0" />
                <span className="text-xs sm:text-sm">123 Fitness St, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Improved responsive */}
        <div className="mt-8 pt-6 sm:mt-12 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-0">
            &copy; {currentYear} Cravey. All rights reserved.
          </p>
          <div className="flex items-center text-xs sm:text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff6b6b] mx-1" />
            <span>by Cravey Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;