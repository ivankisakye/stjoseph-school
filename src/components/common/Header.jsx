import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { 
    label: 'Home', 
    to: '/' 
  },
  { 
    label: 'About Us', 
    to: '/about',
    dropdown: [
      { label: 'Gallery', to: '/about/gallery' },
      { label: 'Staff', to: '/about/staff' },
      { label: 'History, Vision, Core Values', to: '/about/general' },
      { label: 'Academics', to: '/academics' },
    ]
  },
  { 
    label: 'Admissions', 
    to: '/admissions',
    dropdown: [
      { label: 'How to Apply', to: '/admissions/how-to-apply' },
      { label: 'Requirements', to: '/admissions/reqs' },
      { label: 'Circular', to: '/admissions/circ' },
      { label: 'Fees Notice', to: '/admissions/fees-notice' },
      { label: 'Admission Process', to: '/admissions/process' },
    ]
  },
  { 
    label: 'News & Events', 
    to: '/news',
    dropdown: [
      { label: 'Blog', to: '/news/blog' },
      { label: 'Events', to: '/news/events' },
      { label: 'Careers', to: '/news/careers' },
    ]
  },
  { 
    label: 'Contact', 
    to: '/contact' 
  },
  { 
    label: 'FAQs', 
    to: '/faqs' 
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  // Add shadow when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  const closeMenu = () => setMenuOpen(false)

  // Handle dropdown hover
  const handleMouseEnter = (index) => {
    setOpenDropdown(index)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* TOP ROW - Thin Black Bar (disappears on scroll) */}
      <div 
        className={`w-full bg-neutral-900 text-white transition-all duration-300 overflow-hidden
          ${scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full text-xs">
            {/* Left side - Contact */}
            <div className="flex items-center gap-4">
              <span>📞 +256 123 456 789</span>
              <span className="hidden sm:inline">✉️ info@stjosephelite.ac.ug</span>
            </div>
            {/* Right side - Quick links */}
            <div className="flex items-center gap-3">
              <span>Follow us:</span>
              <span className="hover:text-accent-300 cursor-pointer">FB</span>
              <span className="hover:text-accent-300 cursor-pointer">IG</span>
              <span className="hover:text-accent-300 cursor-pointer">TW</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW - Main Navigation (stays on scroll) */}
      <div
        className={`w-full transition-all duration-300
          ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card py-2'
            : 'bg-white py-3'
          }`}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-primary-600 via-accent-500 to-warm-500 absolute top-0 left-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500
                              flex items-center justify-center shadow-soft
                              group-hover:shadow-glow transition-shadow duration-300">
                <span className="text-white font-heading font-bold text-xl">SJ</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-heading font-bold text-neutral-800 text-base leading-tight">
                  St Joseph Elite
                </p>
                <p className="text-accent-600 text-xs font-medium tracking-wide">
                  Junior School
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className={`px-4 py-2 rounded-xl text-sm font-medium font-body transition-all duration-200 flex items-center gap-1
                          ${openDropdown === index
                            ? 'bg-primary-50 text-primary-700 font-semibold'
                            : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-600'
                          }`}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                  `block px-4 py-3 text-sm transition-colors hover:bg-primary-50 hover:text-primary-700
                                   ${isActive ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-neutral-700'}`
                                }
                                onClick={closeMenu}
                              >
                                {item.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-xl text-sm font-medium font-body transition-all duration-200
                         ${isActive
                           ? 'bg-primary-50 text-primary-700 font-semibold'
                           : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-600'
                         }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/portal"
                className="text-sm font-medium text-primary-600 border border-primary-200
                           px-4 py-2 rounded-xl hover:bg-primary-50 transition-all duration-200"
              >
                Parent Portal
              </Link>
              <Link
                to="/apply"
                className="text-sm font-semibold text-white
                           bg-gradient-to-r from-primary-600 to-primary-700
                           px-5 py-2.5 rounded-xl shadow-soft
                           hover:shadow-glow hover:-translate-y-0.5
                           transition-all duration-200"
              >
                Apply Now →
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-xl
                         hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-neutral-800 rounded origin-center transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-neutral-800 rounded"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-neutral-800 rounded origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.dropdown ? (
                    <MobileDropdown link={link} closeMenu={closeMenu} />
                  ) : (
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-sm font-medium transition-all
                         ${isActive
                           ? 'bg-primary-50 text-primary-700 font-semibold'
                           : 'text-neutral-700 hover:bg-neutral-50'
                         }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTAs */}
              <div className="mt-3 pt-3 border-t border-neutral-100 flex flex-col gap-2">
                <Link
                  to="/portal"
                  onClick={closeMenu}
                  className="text-center text-sm font-medium text-primary-600
                             border border-primary-200 px-4 py-2.5 rounded-xl
                             hover:bg-primary-50 transition-all"
                >
                  Parent Portal
                </Link>
                <Link
                  to="/apply"
                  onClick={closeMenu}
                  className="text-center text-sm font-semibold text-white
                             bg-gradient-to-r from-primary-600 to-primary-700
                             px-4 py-2.5 rounded-xl shadow-soft"
                >
                  Apply Now →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Mobile Dropdown Component
function MobileDropdown({ link, closeMenu }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-all"
      >
        {link.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-1">
              {link.dropdown.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm rounded-lg transition-colors
                     ${isActive
                       ? 'bg-primary-50 text-primary-700 font-semibold'
                       : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600'
                     }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}