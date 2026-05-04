// src/components/Reviews.jsx
import { useEffect, useState } from "react"

export default function Reviews() {
  const [reviews, setReviews] = useState([])

  const mockReviews = [
    {
      id: 1,
      name: "María López",
      rating: 5,
      date: "Hace 2 días",
      comment: "Excelente atención, trataron a mi perro con mucho cariño. ¡Max salió feliz de su consulta! 🐶"
    },
    {
      id: 2,
      name: "Carlos Pérez",
      rating: 4,
      date: "Hace 1 semana",
      comment: "Muy buen servicio y precios accesibles. El personal es muy atento y las instalaciones están impecables."
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      rating: 5,
      date: "Hace 2 semanas",
      comment: "La mejor veterinaria de la zona, súper profesionales. Se nota que aman lo que hacen. ❤️"
    }
  ]

  useEffect(() => {
    setReviews(mockReviews)
  }, [])

  return (
    <section 
      className="py-20 px-6 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-extrabold mb-4 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Lo que dicen <span className="text-blue-500">nuestros clientes</span>
          </h2>
          <div className="flex justify-center gap-1 text-2xl text-yellow-500">
            {"★★★★★"}
          </div>
          <p className="mt-2 text-sm font-medium opacity-60" style={{ color: "var(--text-secondary)" }}>
            Basado en más de 500 opiniones reales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div 
              key={r.id} 
              className="relative p-8 rounded-[2.5rem] border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ 
                backgroundColor: "var(--card)", 
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)"
              }}
            >
              {/* Comillas decorativas */}
              <div className="absolute top-6 right-8 text-6xl opacity-10 select-none" style={{ color: "var(--accent)" }}>
                ”
              </div>

              <div className="flex items-center gap-4 mb-6">
                {/* Avatar Circular */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-inner"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold leading-none" style={{ color: "var(--text-primary)" }}>
                    {r.name}
                  </h4>
                  <span className="text-xs opacity-50" style={{ color: "var(--text-secondary)" }}>
                    {r.date}
                  </span>
                </div>
              </div>

              <div className="mb-4 flex gap-0.5 text-sm text-yellow-500">
                {"★".repeat(r.rating)}
                <span className="opacity-30">{"★".repeat(5 - r.rating)}</span>
              </div>

              <p 
                className="italic leading-relaxed opacity-90"
                style={{ color: "var(--text-secondary)" }}
              >
                "{r.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}