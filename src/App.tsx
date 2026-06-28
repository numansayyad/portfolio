import { useState, useEffect, useLayoutEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    try {
      const savedTheme = window.localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme === 'dark'
      }
    } catch (error) {
      // LocalStorage may be unavailable on some mobile browsers
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const applyTheme = (nextMode: boolean) => {
    if (typeof document === 'undefined') {
      return
    }

    const root = document.documentElement
    root.classList.toggle('dark', nextMode)
    root.style.colorScheme = nextMode ? 'dark' : 'light'
  }

  useLayoutEffect(() => {
    applyTheme(isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    try {
      window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    } catch (error) {
      // Ignore storage errors on restricted mobile browsers
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev
      applyTheme(nextMode)
      return nextMode
    })
  }

  return (
    <div className="App min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 ease-out dark:bg-slate-950 dark:text-slate-100">
      <Header
        isScrolled={isScrolled}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />
      <div className="h-20 md:h-24" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
