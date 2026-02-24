import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden">
      {/* Top Gradient Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-green-500 via-blue-400 to-red-500" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <img
              src="/logo3.png"
              alt="St Joseph Elite Junior School"
              className="w-60 h-10 object-contain"
            />
            <p className="text-slate-300 leading-relaxed text-sm max-w-sm">
              St Joseph Elite Junior School — Committed to Succeed. 
              Providing a safe, nurturing environment for children from Daycare, Nursery, to Primary School.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {[ 
                { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                { icon: FaWhatsapp, href: "https://wa.me/256758434429", label: "WhatsApp" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group relative w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-lg"
                >
                  <s.icon className="text-slate-400 group-hover:text-white text-lg transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-6">Explore</h4>
            <ul className="space-y-3">
              {[ 
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/academics", label: "Academics" },
                { to: "/admissions", label: "Admissions" },
                { to: "/news", label: "News & Events" },
                { to: "/contact", label: "Contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-6">Programs</h4>
            <ul className="space-y-3">
              {[ 
                { to: "/academics#daycare", label: "Daycare" },
                { to: "/academics#nursery", label: "Nursery" },
                { to: "/academics#primary", label: "Primary" },
                { to: "/admissions", label: "Admissions" },
                { to: "/apply", label: "Apply Online" },
              ].map((prog, i) => (
                <li key={i}>
                  <Link
                    to={prog.to}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 group-hover:bg-green-400 transition-colors" />
                    {prog.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+256758434429" className="group flex items-start space-x-3 text-slate-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <FaPhone className="text-green-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Call Us</p>
                    <p className="text-sm font-medium">+256 758 434 429</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@sjejs.ac.ug" className="group flex items-start space-x-3 text-slate-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <FaEnvelope className="text-green-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm font-medium">info@sjejs.ac.ug</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-green-400 text-sm" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm font-medium">Plot 123, Kampala, Uganda</p>
                  <p className="text-xs text-slate-500 mt-1">East Africa</p>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6 pt-6 border-t border-blue-800">
              <p className="text-xs text-slate-400 mb-3">Subscribe for school updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-blue-800 border border-blue-700 rounded-l-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-green-400 transition-colors"
                />
                <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {currentYear} St Joseph Elite Junior School. All rights reserved.
            <span className="hidden md:inline mx-2">|</span>
            <br className="md:hidden" />
            <Link to="/privacy" className="hover:text-green-400 transition-colors ml-1">Privacy</Link>
            <span className="mx-2">·</span>
            <Link to="/terms" className="hover:text-green-400 transition-colors">Terms</Link>
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600 text-xs flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Accepting Applications
            </span>
            <button
              onClick={scrollToTop}
              className="group w-10 h-10 bg-blue-800 hover:bg-green-400 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-slate-400 group-hover:text-white text-sm transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;