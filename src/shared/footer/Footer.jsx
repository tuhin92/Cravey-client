import React from 'react'
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
  ]

  return (
    <footer className="bg-gradient-to-br from-[#1a1f2b] to-[#2c3442] text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#ff6b6b] mb-2">Cravey</h2>
            <p className="text-sm leading-relaxed opacity-80 mb-4 max-w-md">
              Democratizing fitness through innovative workouts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-[#ff6b6b] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Reviews', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} 
                        className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Help Center', 'Terms', 'Privacy'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} 
                        className="text-gray-400 hover:text-[#ff6b6b] transition-colors text-xs">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">Contact</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>support@cravey.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-4 text-gray-500">&copy; {currentYear} Cravey Fitness</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer