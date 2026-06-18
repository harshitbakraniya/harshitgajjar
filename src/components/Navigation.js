'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Work', id: 'work' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
]

function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0)

      const sections = navItems.map((item) => item.id)
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight / 2) {
            setActiveSection(sectionId)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-6 left-6 z-50 text-sm leading-tight text-white sm:text-base lg:hidden">
        Harshit
        <br />- Bakraniya
      </div>

      {/* Mobile menu button — top right */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white shadow-lg lg:hidden"
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 bg-[#111]" />
          <span className="block h-0.5 w-5 bg-[#111]" />
          <span className="block h-0.5 w-5 bg-[#111]" />
        </span>
      </button>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-[70] flex h-full w-[min(320px,85vw)] flex-col bg-[#0f0f0f] px-8 py-10 lg:hidden"
            >
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="mb-12 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>

              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.06 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-lg px-4 py-4 text-left text-2xl font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-[#ffabdf]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-8">
                <a
                  href="tel:+917698366737"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  +91 7698366737
                </a>
                <a
                  href="https://linkedin.com/in/harshit-bakraniya-034254299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop bottom nav */}
      <motion.nav
        initial={{ opacity: 0, y: 20, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed bottom-8 left-1/2 z-50 hidden lg:block"
      >
        <motion.div
          className="flex items-center gap-1 rounded-full border border-white/80 bg-white px-6 py-3 shadow-2xl transition-shadow"
          animate={{ scale: isScrolling ? 1 : 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 z-10 rounded-full bg-[#ffabdf]/20"
                  transition={{ duration: 0.3 }}
                />
              )}
              <span
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'font-semibold text-[#111]'
                    : 'text-[#111]/70 hover:text-[#111]'
                }`}
              >
                {item.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </motion.nav>
    </>
  )
}

export default Navigation
