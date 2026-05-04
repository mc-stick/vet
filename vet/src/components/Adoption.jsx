// src/components/Adoption.jsx
import { useEffect, useState } from "react"
// import { fetchSupabaseData } from "../lib/supabase"

export default function Adoption() {
  const [pets, setPets] = useState([])
  const [filter, setFilter] = useState("all")
  const [loading, setLoading] = useState(false)

  const mockPets = [
    {
      id: 1,
      name: "Max",
      type: "perro",
      age: 3,
      size: "mediano",
      personality: "Juguetón y amigable",
      health: "Vacunado y desparasitado",
      disponible: true,
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
    },
    {
      id: 2,
      name: "Luna",
      type: "gato",
      age: 2,
      size: "pequeño",
      personality: "Tranquila y cariñosa",
      health: "Esterilizada",
      disponible: true,
      image: "https://images.unsplash.com/photo-1595433562696-9b2c3d7f4f74"
    },
    {
      id: 3,
      name: "Rocky",
      type: "perro",
      age: 4,
      size: "grande",
      personality: "Protector y leal",
      health: "Salud excelente",
      disponible: true,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1"
    }
  ]

  useEffect(() => {
    const loadPets = async () => {
      setLoading(true)
      try {
        // TODO: Descomentar cuando Supabase esté configurado
        // const data = await fetchSupabaseData('pets', { filter: 'disponible', value: true })
        // if (data.length > 0) {
        //   setPets(data)
        // } else {
        //   setPets(mockPets)
        // }
        
        // Por ahora: usar mock como fallback
        setPets(mockPets.filter(p => p.disponible === true))
      } catch (error) {
        console.error('Error cargando mascotas:', error)
        setPets(mockPets)
      } finally {
        setLoading(false)
      }
    }

    loadPets()
  }, [])

  const filtered = filter === "all" ? pets : pets.filter(p => p.type === filter)

  return (
    <section 
      id="adopcion"
      className="p-12 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h2 
            className="text-4xl font-extrabold mb-4 tracking-tight transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            Nuestros Amigos
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Filtros Elegantes */}
        <div className="flex justify-center gap-4 mb-10">
          {["all", "perro", "gato"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 border ${
                filter === type 
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105" 
                  : "opacity-70 hover:opacity-100"
              }`}
              style={{ 
                backgroundColor: filter === type ? "var(--accent)" : "var(--card)",
                borderColor: "var(--border)",
                color: filter === type ? "#fff" : "var(--text-primary)"
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}

        {/* Grid de Cards Premium */}
        {!loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map(p => (
              <div 
                key={p.id}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  backgroundColor: "var(--card)", 
                  boxShadow: "var(--shadow)",
                  border: "1px solid var(--border)"
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white uppercase tracking-widest border border-white/30">
                    {p.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 
                      className="font-bold text-2xl transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {p.name}
                    </h3>
                    <span className="text-sm font-medium px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      {p.age} años
                    </span>
                  </div>
                  
                  <p 
                    className="text-sm leading-relaxed mb-6 h-10 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {p.personality}
                  </p>

                  <button 
                    className="w-full py-3 rounded-2xl font-bold tracking-wide transition-all duration-300 transform group-hover:shadow-lg active:scale-95"
                    style={{ 
                      backgroundColor: "var(--accent)",
                      color: "#ffffff"
                    }}
                  >
                    Conocer a {p.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}