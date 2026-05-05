// src/components/Gallery.jsx
import { BRAND_NAME } from "../constants/branding"

export default function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006"
  ]

  return (
    <section 
      className="py-20 px-6 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            Momentos <span className="text-blue-500">{BRAND_NAME}</span>
          </h2>
          <p 
            className="max-w-xl mx-auto opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            Un vistazo a nuestra clínica y a los pacientes felices que nos visitan cada día.
          </p>
        </header>

        {/* Layout de Galería Estilizado */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="relative group break-inside-avoid overflow-hidden rounded-[2rem] border transition-all duration-500 hover:shadow-2xl"
              style={{ 
                borderColor: "var(--border)",
                backgroundColor: "var(--card)"
              }}
            >
              {/* Overlay de brillo al hacer hover */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <img 
                src={img} 
                alt={`Mascota ${i}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Botón de expansión visual (decorativo) */}
              <div className="absolute bottom-6 right-6 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div 
                  className="p-3 rounded-full backdrop-blur-md border border-white/30 text-white text-xl"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.5)" }}
                >
                  🔍
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}