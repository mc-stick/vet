/**
 * AdminLogin Component
 * Página de autenticación para administradores
 * Utiliza Glassmorphism y variables de tema
 */

import { useState } from 'react'
import { BRAND_NAME, BRAND_EMOJI } from '../constants/branding'

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return "El correo es requerido"
    if (!emailRegex.test(email)) return "Email inválido"
    if (!password || password.length < 6) return "Contraseña mínimo 6 caracteres"
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError('')

    try {
      // TODO: Conectar con Supabase Authentication
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password
      // })
      
      // Simulación de autenticación
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Demo: Cualquier email/password válido accede
      localStorage.setItem('admin_auth', 'true')
      localStorage.setItem('admin_email', email)
      
      onLoginSuccess()
    } catch (err) {
      setError('Error en la autenticación. Intenta nuevamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Glassmorphism Card */}
        <div 
          className="rounded-3xl backdrop-blur-xl p-8 border shadow-2xl transition-all duration-300"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)"
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4 inline-block">{BRAND_EMOJI}</div>
            <h1 
              className="text-3xl font-extrabold tracking-tight mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {BRAND_NAME} Admin
            </h1>
            <p style={{ color: "var(--text-secondary)" }} className="text-sm">
              Acceso reservado para administradores
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div 
              className="mb-6 p-4 rounded-2xl text-sm font-medium border"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                borderColor: "rgba(239, 68, 68, 0.3)",
                color: "#ef4444"
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vetcare.com"
                className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)"
                }}
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)"
                }}
                disabled={loading}
              />
              <p className="text-xs mt-2 opacity-60" style={{ color: "var(--text-secondary)" }}>
                Demo: Usa cualquier email y contraseña válidos
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 active:scale-95 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2 mt-6"
              style={{ 
                backgroundColor: "var(--accent)"
              }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Ingresando...
                </>
              ) : (
                '🔐 Ingresar'
              )}
            </button>
          </form>

          {/* Info Box */}
          <div 
            className="mt-6 p-4 rounded-xl text-xs text-center"
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.2)",
              color: "var(--text-secondary)"
            }}
          >
            Este es un acceso de demostración. Los datos se guardan localmente.
          </div>
        </div>

        {/* Background Blur */}
        <div className="mt-8 text-center text-xs opacity-50" style={{ color: "var(--text-secondary)" }}>
          ¿Necesitas ayuda? Contacta al equipo de {BRAND_NAME}
        </div>
      </div>
    </div>
  )
}
