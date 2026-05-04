// src/components/Contact.jsx
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.name.trim()) return { valid: false, message: "El nombre es requerido" }
    if (!emailRegex.test(formData.email)) return { valid: false, message: "Email inválido" }
    if (!formData.message.trim()) return { valid: false, message: "El mensaje no puede estar vacío" }
    return { valid: true }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validateForm()
    if (!validation.valid) {
      alert(validation.message)
      return
    }

    setLoading(true)
    try {
      // Simular envío a Supabase
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("📬 Mensaje enviado:", formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section 
      id="contacto"
      className="py-20 px-6 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div 
          className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-16 shadow-2xl border transition-all duration-500"
          style={{ 
            backgroundColor: "var(--card)", 
            borderColor: "var(--border)" 
          }}
        >
          {/* Decoración de fondo sutil */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                ¿Tienes dudas? <br />
                <span className="text-blue-500">Estamos aquí.</span>
              </h2>
              <p 
                className="text-lg mb-8 opacity-80 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Nuestro equipo de expertos está listo para atenderte a ti y a tu mascota. 
                Visítanos en nuestra clínica o escríbenos directamente.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                    📍
                  </div>
                  <span style={{ color: "var(--text-primary)" }}>Santiago, República Dominicana</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-500">
                    📞
                  </div>
                  <span style={{ color: "var(--text-primary)" }}>+1 (809) 555-0123</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-3 rounded-2xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ 
                    backgroundColor: "var(--background)", 
                    borderColor: "var(--border)",
                    color: "var(--text-primary)"
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-3 rounded-2xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ 
                    backgroundColor: "var(--background)", 
                    borderColor: "var(--border)",
                    color: "var(--text-primary)"
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-3 rounded-2xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  style={{ 
                    backgroundColor: "var(--background)", 
                    borderColor: "var(--border)",
                    color: "var(--text-primary)"
                  }}
                ></textarea>

                {submitted && (
                  <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium">
                    ✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-2xl font-bold text-xl text-white shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: "var(--accent)",
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>

              <div 
                className="p-6 rounded-3xl border transition-all"
                style={{ 
                  backgroundColor: "var(--background)", 
                  borderColor: "var(--border)" 
                }}
              >
                <h4 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>Horario de Atención</h4>
                <p className="text-sm opacity-70" style={{ color: "var(--text-secondary)" }}>
                  Lunes a Viernes: 8:00 AM - 7:00 PM <br />
                  Sábados: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}