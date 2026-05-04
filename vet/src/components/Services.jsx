// src/components/Services.jsx

export default function Services() {

  const services = [
    { name: "Consultas", icon: "🩺", desc: "Chequeos generales y preventivos." },
    { name: "Vacunación", icon: "💉", desc: "Esquemas completos para tu mascota." },
    { name: "Cirugías", icon: "🏥", desc: "Procedimientos con tecnología avanzada." },
    { name: "Emergencias", icon: "🚨", desc: "Atención crítica disponible 24/7." },
    { name: "Grooming", icon: "✂️", desc: "Estética y baño profesional." }
  ]

  return (
    <section 
      id="servicios"
      className="py-24 px-6 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Servicios <span className="text-blue-500">Especializados</span>
          </h2>
          <p 
            className="max-w-2xl mx-auto opacity-70 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Ofrecemos una gama completa de cuidados médicos y estéticos para garantizar 
            una vida larga y saludable a tus compañeros.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[2rem] border text-center transition-all duration-500 hover:scale-105 active:scale-95"
              style={{ 
                backgroundColor: "var(--card)", 
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)"
              }}
            >
              {/* Círculo decorativo de fondo en hover */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {s.icon}
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.name}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed opacity-60"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Indicador inferior sutil */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-500 rounded-t-full transition-all duration-500 group-hover:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}