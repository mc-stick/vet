// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

// Páginas Públicas
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Adoption from './components/Adoption'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/navbar'

// Páginas de Administración
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

function PublicLayout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Adoption />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  const [isAdminAuth, setIsAdminAuth] = useState(() => {
    return localStorage.getItem('admin_auth') === 'true'
  })

  const handleAdminLogout = () => {
    localStorage.removeItem('admin_auth')
    setIsAdminAuth(false)
  }

  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<PublicLayout />} />
        
        {/* Rutas de Administración */}
        <Route 
          path="/admin/login" 
          element={!isAdminAuth ? <AdminLogin onLoginSuccess={() => setIsAdminAuth(true)} /> : <Navigate to="/admin/dashboard" />} 
        />
        <Route 
          path="/admin/dashboard" 
          element={isAdminAuth ? <AdminDashboard onLogout={handleAdminLogout} /> : <Navigate to="/admin/login" />} 
        />
        
        {/* Redirecciones por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}