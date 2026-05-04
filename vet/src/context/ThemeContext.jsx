import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // 👇 IMPORTANTE: inicializar desde localStorage directamente
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false

    const saved = localStorage.getItem("theme")

    if (saved) return saved === "dark"

    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // aplicar tema global
  useEffect(() => {
    const root = document.documentElement

    if (dark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  const toggleTheme = () => setDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}