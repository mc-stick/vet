// src/components/Footer.jsx
import { useTheme } from "../context/ThemeContext"
import { BRAND_NAME, BRAND_EMOJI, BRAND_TAGLINE, COMPANY_INFO } from "../constants/branding"

export default function Footer() {

  return (
    <footer 
      className="pt-16 pb-8 px-6 transition-colors duration-500 border-t"
      style={{ 
        backgroundColor: "var(--background)", 
        borderColor: "var(--border)" 
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna Logo */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-teal-400">
              {BRAND_EMOJI} {BRAND_NAME}
            </h3>
            <p 
              className="text-sm leading-relaxed opacity-70"
              style={{ color: "var(--text-secondary)" }}
            >
              {BRAND_TAGLINE} con la tecnología más avanzada y el corazón más grande.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Comunidad</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Blog de Mascotas</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Eventos de Adopción</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Historias de Éxito</li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Soporte</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Citas Online</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Urgencias 24/7</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Preguntas Frecuentes</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Síguenos</h4>
            <div className="flex gap-4">
              {['𝕏', '📸', '📘', '🎥'].map((icon, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-110 border"
                  style={{ 
                    backgroundColor: "var(--card)", 
                    borderColor: "var(--border)",
                    color: "var(--text-primary)"
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Línea final */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs opacity-50" style={{ color: "var(--text-secondary)" }}>
            © 2026 {BRAND_NAME}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs opacity-50" style={{ color: "var(--text-secondary)" }}>
            <span className="hover:underline cursor-pointer">Privacidad</span>
            <span className="hover:underline cursor-pointer">Términos</span>
            <span className="hover:underline cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}