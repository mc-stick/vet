import { useTheme } from "../context/ThemeContext"
import { useNavigate } from 'react-router-dom'
import { BRAND_NAME, BRAND_EMOJI, NAVIGATION_ITEMS } from "../constants/branding"

export default function Navbar() {
  const { dark, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav 
      className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-500 backdrop-blur-md border-b"
      style={{ 
        backgroundColor: "var(--nav-bg)", 
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)" 
      }}
    >
      {/* Logo con gradiente */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">{BRAND_EMOJI}</span>
        <h1 
          className="font-extrabold text-2xl tracking-tight transition-colors bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-teal-400"
        >
          {BRAND_NAME}
        </h1>
      </div>

      {/* Navegación con indicadores animados */}
      <ul className="hidden md:flex gap-8">
        {NAVIGATION_ITEMS.map((item) => (
          <li 
            key={item.id}
            className="relative font-medium transition-colors cursor-pointer hover:opacity-100 opacity-80 group"
            style={{ color: "var(--text-primary)" }}
            onClick={() => handleSmoothScroll(item.id)}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Botones de acción */}
      <div className="flex items-center gap-4">
        {/* Botón Admin */}
        <button
          onClick={() => navigate('/admin/login')}
          className="hidden sm:block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-80"
          style={{ 
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            color: "var(--text-primary)"
          }}
          title="Acceso de administrador"
        >
          ⚙️ Admin
        </button>

        {/* Botón de tema estilizado */}
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-12 h-12 rounded-2xl overflow-hidden transition-all duration-300 active:scale-90 hover:shadow-lg border"
          style={{ 
            backgroundColor: "var(--card)",
            borderColor: "var(--border)"
          }}
          aria-label="Toggle Theme"
        >
          <div className={`text-xl transition-all duration-500 transform ${dark ? "rotate-0 scale-100" : "rotate-180 scale-0 opacity-0"}`}>
            ☀️
          </div>
          <div className={`absolute text-xl transition-all duration-500 transform ${!dark ? "rotate-0 scale-100" : "-rotate-180 scale-0 opacity-0"}`}>
            🌙
          </div>
        </button>
      </div>
    </nav>
  )
}