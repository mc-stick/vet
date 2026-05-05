/**
 * AdminDashboard Component
 * Panel de control administrativo con gestión de:
 * - Adopciones
 * - Productos
 * - Mensajes de contacto
 */

import { useState } from 'react'
import { BRAND_NAME, BRAND_EMOJI } from '../constants/branding'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard({ onLogout }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('adopciones')
  const [loading, setLoading] = useState(false)

  // ADOPCIONES STATE
  const [adoptionForm, setAdoptionForm] = useState({
    name: '',
    type: 'perro',
    age: '',
    personality: '',
    image: ''
  })
  const [adoptions, setAdoptions] = useState([
    { id: 1, name: 'Max', type: 'perro', age: 3, personality: 'Juguetón', status: '✅ Disponible' }
  ])

  // PRODUCTOS STATE
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Nutrición',
    image: ''
  })
  const [products, setProducts] = useState([
    { id: 1, name: 'Alimento Premium', price: 25, category: 'Nutrición' }
  ])

  // CONTACTOS STATE
  const [messages] = useState([
    { id: 1, name: 'Juan', email: 'juan@example.com', message: 'Consulta sobre citas', date: '2026-05-04', status: '📋 Nuevo' }
  ])

  // HANDLERS
  const handleAdoptionChange = (e) => {
    const { name, value } = e.target
    setAdoptionForm(prev => ({ ...prev, [name]: value }))
  }

  const handleProductChange = (e) => {
    const { name, value } = e.target
    setProductForm(prev => ({ ...prev, [name]: value }))
  }

  const handleAddAdoption = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      const newAdoption = {
        id: Date.now(),
        ...adoptionForm,
        age: parseInt(adoptionForm.age),
        status: '✅ Disponible'
      }
      setAdoptions([...adoptions, newAdoption])
      setAdoptionForm({ name: '', type: 'perro', age: '', personality: '', image: '' })
      alert('✅ Mascota agregada exitosamente')
    } finally {
      setLoading(false)
    }
  }

  const handleAddProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      const newProduct = {
        id: Date.now(),
        ...productForm,
        price: parseFloat(productForm.price)
      }
      setProducts([...products, newProduct])
      setProductForm({ name: '', price: '', description: '', category: 'Nutrición', image: '' })
      alert('✅ Producto agregado exitosamente')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    localStorage.removeItem('admin_email')
    onLogout()
    navigate('/admin/login')
  }

  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Header */}
      <header 
        className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{BRAND_EMOJI}</span>
            <div>
              <h1 
                className="text-2xl font-extrabold"
                style={{ color: "var(--text-primary)" }}
              >
                {BRAND_NAME} Admin
              </h1>
              <p style={{ color: "var(--text-secondary)" }} className="text-xs">
                Panel de administración
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80"
            style={{ 
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              color: "#ef4444",
              border: "1px solid rgba(239, 68, 68, 0.3)"
            }}
          >
            🚪 Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Tabs Navigation */}
        <div className="flex gap-4 mb-8 border-b" style={{ borderColor: "var(--border)" }}>
          {[
            { id: 'adopciones', label: '🐾 Adopciones' },
            { id: 'productos', label: '🛒 Productos' },
            { id: 'mensajes', label: '📬 Mensajes' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-all border-b-2 ${
                activeTab === tab.id 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              style={{ color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-primary)' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ADOPCIONES TAB */}
        {activeTab === 'adopciones' && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Formulario */}
            <div 
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Agregar Mascota
              </h2>
              <form onSubmit={handleAddAdoption} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={adoptionForm.name}
                  onChange={handleAdoptionChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                  required
                />
                <select
                  name="type"
                  value={adoptionForm.type}
                  onChange={handleAdoptionChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                >
                  <option>perro</option>
                  <option>gato</option>
                </select>
                <input
                  type="number"
                  name="age"
                  placeholder="Edad (años)"
                  value={adoptionForm.age}
                  onChange={handleAdoptionChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                  required
                />
                <textarea
                  name="personality"
                  placeholder="Personalidad"
                  value={adoptionForm.personality}
                  onChange={handleAdoptionChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                  rows="3"
                ></textarea>
                <input
                  type="url"
                  name="image"
                  placeholder="URL de imagen"
                  value={adoptionForm.image}
                  onChange={handleAdoptionChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 rounded-lg font-bold text-white transition-all disabled:opacity-50"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {loading ? 'Guardando...' : '➕ Agregar'}
                </button>
              </form>
            </div>

            {/* Listado */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Mascotas Registradas
              </h2>
              <div className="space-y-4">
                {adoptions.map(pet => (
                  <div 
                    key={pet.id}
                    className="p-4 rounded-xl border flex justify-between items-center"
                    style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                  >
                    <div>
                      <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {pet.name}
                      </h3>
                      <p className="text-sm opacity-70" style={{ color: "var(--text-secondary)" }}>
                        {pet.type} • {pet.age} años
                      </p>
                    </div>
                    <span className="text-sm font-medium">{pet.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTOS TAB */}
        {activeTab === 'productos' && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Formulario */}
            <div 
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Nuevo Producto
              </h2>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={productForm.name}
                  onChange={handleProductChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  placeholder="Precio"
                  value={productForm.price}
                  onChange={handleProductChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                  required
                />
                <select
                  name="category"
                  value={productForm.category}
                  onChange={handleProductChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                >
                  <option>Nutrición</option>
                  <option>Higiene</option>
                  <option>Juguetes</option>
                </select>
                <textarea
                  name="description"
                  placeholder="Descripción"
                  value={productForm.description}
                  onChange={handleProductChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                  rows="3"
                ></textarea>
                <input
                  type="url"
                  name="image"
                  placeholder="URL de imagen"
                  value={productForm.image}
                  onChange={handleProductChange}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 rounded-lg font-bold text-white transition-all disabled:opacity-50"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {loading ? 'Guardando...' : '➕ Agregar'}
                </button>
              </form>
            </div>

            {/* Listado */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Inventario
              </h2>
              <div className="space-y-4">
                {products.map(prod => (
                  <div 
                    key={prod.id}
                    className="p-4 rounded-xl border flex justify-between items-center"
                    style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                  >
                    <div>
                      <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {prod.name}
                      </h3>
                      <p className="text-sm opacity-70" style={{ color: "var(--text-secondary)" }}>
                        {prod.category}
                      </p>
                    </div>
                    <span className="font-bold text-blue-500">${prod.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MENSAJES TAB */}
        {activeTab === 'mensajes' && (
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Buzón de Contacto
            </h2>
            <div className="space-y-4">
              {messages.map(msg => (
                <div 
                  key={msg.id}
                  className="p-6 rounded-xl border"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                        {msg.name}
                      </h3>
                      <p className="text-sm opacity-70" style={{ color: "var(--text-secondary)" }}>
                        {msg.email} • {msg.date}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-lg text-sm font-medium" style={{ backgroundColor: "rgba(59, 130, 246, 0.1)", color: "var(--accent)" }}>
                      {msg.status}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-primary)" }}>{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
