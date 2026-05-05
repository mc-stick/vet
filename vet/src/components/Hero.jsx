// src/components/Hero.jsx
import { BRAND_EMOJI, BRAND_DESCRIPTION } from "../constants/branding"

export default function Hero() {

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section 
      id="inicio"
      className="relative overflow-hidden py-24 md:py-32 px-6 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Elementos decorativos de fondo (Luces de colores) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-500/10 blur-[120px] rounded-full"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge superior */}
        <span 
          className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide shadow-sm border"
          style={{ 
            backgroundColor: "var(--card)", 
            color: "var(--accent)",
            borderColor: "var(--border)"
          }}
        >
          🐶 CLÍNICA VETERINARIA 24/7
        </span>

        {/* Título Principal con gradiente */}
        <h2 
          className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          Cuidamos a tu <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            mejor amigo
          </span> {BRAND_EMOJI}
        </h2>

        {/* Descripción */}
        <p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          {BRAND_DESCRIPTION}
        </p>

        {/* Grupo de botones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => handleScroll('contacto')}
            className="px-8 py-4 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Agenda tu cita
          </button>
          
          <button 
            onClick={() => handleScroll('servicios')}
            className="px-8 py-4 rounded-2xl font-bold text-lg border transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full sm:w-auto"
            style={{ 
              borderColor: "var(--border)",
              color: "var(--text-primary)",
              backgroundColor: "transparent"
            }}
          >
            Nuestros Servicios
          </button>
        </div>

        {/* Stats rápidos o prueba social sutil */}
        <div className="mt-16 flex justify-center gap-8 opacity-60 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
          <div className="flex items-center gap-2">
            <span className="text-blue-500 text-xl">★</span> +10k Pacientes Felices
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500 text-xl">★</span> Expertos Certificados
          </div>
        </div>
      </div>
    </section>
  )
}