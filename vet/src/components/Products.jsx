// src/components/Products.jsx
import { useEffect, useState } from "react"
import { BRAND_NAME } from "../constants/branding"
// import { fetchSupabaseData } from "../lib/supabase"

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const mockProducts = [
    {
      id: 1,
      name: "Alimento Premium",
      description: "Nutrición completa para perros adultos, mejora la salud y energía.",
      price: 25.00,
      category: "Nutrición",
      stock: 50,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
    },
    {
      id: 2,
      name: "Arena Crystal",
      description: "Alta absorción y control de olores para tu gato.",
      price: 12.50,
      category: "Higiene",
      stock: 30,
      image: "https://images.unsplash.com/photo-1598137260536-3b8a4d3f9c89"
    },
    {
      id: 3,
      name: "Mordedor Rubber",
      description: "Juguete resistente para mantener a tu mascota activa y feliz.",
      price: 8.99,
      category: "Juguetes",
      stock: 75,
      image: "https://images.unsplash.com/photo-1601758123927-196c1d0f5b6b"
    }
  ]

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      try {
        // TODO: Descomentar cuando Supabase esté configurado
        // const data = await fetchSupabaseData('products', { filter: 'stock', value: { _gt: 0 } })
        // if (data.length > 0) {
        //   setProducts(data.filter(p => p.stock > 0))
        // } else {
        //   setProducts(mockProducts)
        // }
        
        // Por ahora: usar mock como fallback
        setProducts(mockProducts.filter(p => p.stock > 0))
      } catch (error) {
        console.error('Error cargando productos:', error)
        setProducts(mockProducts)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <section 
      id="productos"
      className="py-20 px-6 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 
              className="text-4xl font-extrabold tracking-tight mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Tienda <span className="text-blue-500">{BRAND_NAME}</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>Lo mejor para el bienestar de tu compañero.</p>
          </div>
          <button 
            className="text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            Ver catálogo completo →
          </button>
        </header>

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

        {!loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map(p => (
              <div 
                key={p.id}
                className="group relative rounded-[2rem] transition-all duration-500 hover:-translate-y-2 border"
                style={{ 
                  backgroundColor: "var(--card)", 
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow)" 
                }}
              >
                {/* Contenedor de Imagen */}
                <div className="relative p-3">
                  <div className="overflow-hidden rounded-[1.5rem] h-56 relative">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Badge de Precio */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full shadow-lg font-bold text-sm">
                      <p style={{ color: "var(--text-secondary)" }}>${p.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                {/* Información del Producto */}
                <div className="p-6 pt-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500 mb-1 block">
                    {p.category}
                  </span>
                  <h3 
                    className="font-bold text-xl mb-2 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {p.name}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed mb-6 opacity-70 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {p.description}
                  </p>

                  <button 
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300 bg-gray-100 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:hover:bg-blue-600"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>🛒</span> Añadir al carrito
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