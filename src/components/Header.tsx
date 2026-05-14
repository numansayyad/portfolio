

import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'

interface HeaderProps {
  isScrolled: boolean
  isDarkMode: boolean
  onThemeToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ isScrolled, isDarkMode, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled
          ? 'bg-white/85 shadow-lg py-3 dark:bg-slate-950/90'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors no-underline"
          >
            Porfolio
          </a>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 font-medium transition-colors no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={onThemeToggle}
              className="rounded-full border border-slate-300 bg-white p-3 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-primary-400"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          <button
            className="md:hidden text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className={`fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'}`}>
          <div
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`absolute inset-y-0 right-0 top-0 z-50 h-screen w-[75vw] max-w-sm sm:w-[60vw] md:w-[40vw] bg-white/95 dark:bg-slate-950/95 shadow-2xl border-l border-slate-200/70 dark:border-slate-800/70 transform transition-transform duration-300 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } overflow-y-auto`}
          >
            <div className="flex items-center justify-between px-5 pt-6">
              <button
                onClick={onThemeToggle}
                className="rounded-full border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm transition-all duration-300 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-primary-400"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
              <button
                className="text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center gap-4 px-5 pt-10 pb-8">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="block w-full rounded-3xl px-4 py-3 text-center text-2xl text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400 font-medium transition-colors no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
