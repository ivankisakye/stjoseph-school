import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'About Us',   to: '/about' },
  { label: 'Academics',  to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact',    to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  // Add shadow when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card py-2'
          : 'bg-white py-3'
        }`}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-600 via-accent-500 to-warm-500 absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            {/* Placeholder logo circle — replace with <img> later */}
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

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
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
            ))}
          </nav>

          {/* ── CTA BUTTONS ── */}
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

          {/* ── MOBILE HAMBURGER ── */}
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

      {/* ── MOBILE MENU ── */}
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