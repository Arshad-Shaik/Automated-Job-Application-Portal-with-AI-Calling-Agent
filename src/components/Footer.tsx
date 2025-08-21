import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="SYNNECTIFY Logo"
                className="w-10 h-10 min-w-[40px]"
                onError={(e) => {
  e.currentTarget.style.display = 'none';
  const next = e.currentTarget.nextElementSibling as HTMLElement | null;
  if (next) next.style.display = 'flex';
}}
              />
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg items-center justify-center relative hidden">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center relative">
                  <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-2xl font-bold whitespace-nowrap">SYNNECTIFY</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Leading IT solutions provider specializing in digital transformation, web development, and innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/synnectify/?igsh=aHZmY3Z6dG5icWlz#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
  ['UI/UX Design', 'ui-ux'],
  ['Web Development', 'web-development'],
  ['Mobile Applications', 'mobile-apps'],
  ['Digital Marketing', 'digital-marketing'],
  ['Branding & Graphic Design', 'branding/graphic-design'],
  ['Photography', 'Photography'],
].map(([label, anchor]) => (
  <li key={anchor}>
    <Link
      to={`/services#${anchor}`}
      className="text-gray-400 hover:text-white transition-colors block"
    >
      {label}
    </Link>
  </li>
))}            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                ['About Us', '/about'],
                ['Portfolio', '/portfolio'],
                ['Contact', '/contact'],
                ['Careers', '/careers'],
                ['Blog', '/blog'],
                ['Case Studies', '/case-studies'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Telangana</p>
                  <p>Andhra Pradesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">+91 9494669228</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400 break-all">info@synnectify.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 SYNNECTIFY. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
