# 🐾 VetCare - Sistema Refactorizado

Proyecto frontend moderno para clínica veterinaria con panel administrativo, navegación fluida y arquitectura escalable.

## ✨ Características Principales

### 1. **Centralización de Marca (Single Source of Truth)**
- ✅ Constante global `BRAND_NAME = "VetCare"` en `src/constants/branding.js`
- ✅ Cambio centralizado: Un único lugar para actualizar la marca en toda la app
- ✅ También incluye: `BRAND_EMOJI`, `BRAND_TAGLINE`, `NAVIGATION_ITEMS`, `COMPANY_INFO`

### 2. **Navegación Funcional con Scroll Suave**
Todas las secciones tienen IDs únicos y navegación funcional:
- `#inicio` → Hero
- `#servicios` → Services  
- `#productos` → Products
- `#adopcion` → Adoption
- `#contacto` → Contact

**Cómo usar**: Haz clic en los elementos del Navbar o los botones CTA para un scroll suave automático.

### 3. **Integración Supabase (Híbrida)**
- ✅ Archivo de configuración en `src/lib/supabase.js`
- ✅ Lógica comentada en `Adoption.jsx` y `Products.jsx`
- ✅ Mock data como fallback (La app funciona sin conexión a BD)
- ✅ Filtrado automático: Solo muestra items con `disponible=true` o `stock>0`

**Próximas steps:**
1. Crea un proyecto en [Supabase](https://supabase.com)
2. Copia las credenciales en `.env.local`
3. Descomenta las líneas de su código en `supabase.js` y componentes

### 4. **Sistema de Administración**

#### 🔐 **Login Admin** (`/admin/login`)
- Glassmorphism elegante
- Validación de email y contraseña
- Demo: Cualquier email/pass válido accede
- Almacenamiento en localStorage

#### 📊 **Dashboard Admin** (`/admin/dashboard`)
Solo accesible si está autenticado. Tres secciones:

**A. Gestión de Adopciones**
- ➕ Formulario para agregar mascotas
- 📋 Tabla de mascotas registradas
- Campos: Nombre, tipo, edad, personalidad, imagen

**B. Gestión de Inventario**
- ➕ Formulario para nuevos productos
- 📦 Lista de productos con precios
- Campos: Nombre, precio, categoría, descripción, imagen

**C. Buzón de Contacto**
- 📬 Tabla con mensajes recibidos
- Estado de cada mensaje (Nuevo, En revisión, Respondido)
- Información: nombre, email, fecha

### 5. **Coherencia de Diseño Premium**
- ✅ Todas las interfaces usan variables CSS de tema
- ✅ Variables clave: `--background`, `--card`, `--border`, `--accent`, `--text-primary`, `--text-secondary`
- ✅ Bordes redondeados consistentes `rounded-[2.5rem]`
- ✅ Efectos hover: `hover:scale-[1.02]`
- ✅ Transiciones suaves: `duration-500`

### 6. **Lógica de Negocio Adicional**
- ✅ Validación de formularios (email, campos requeridos)
- ✅ Loading states (Spinner de 3 puntos animados)
- ✅ Mensajes de éxito/error
- ✅ Desabilitación de botones durante carga
- ✅ Rutas protegidas: Solo admins acceden al dashboard

---

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── Adoption.jsx          # Sección adopciones (con lógica Supabase comentada)
│   ├── Contact.jsx           # Formulario de contacto con validación
│   ├── Footer.jsx            # Pie de página
│   ├── Gallery.jsx           # Galería de imágenes
│   ├── Hero.jsx              # Sección principal
│   ├── navbar.jsx            # Navegación con scroll suave
│   ├── Products.jsx          # Tienda (con lógica Supabase comentada)
│   ├── Reviews.jsx           # Reviews
│   └── Services.jsx          # Servicios
├── constants/
│   └── branding.js           # 🔑 MARCA CENTRALIZADA
├── context/
│   └── ThemeContext.jsx      # Sistema de tema (Dark/Light)
├── lib/
│   └── supabase.js           # 🔧 Configuración Supabase
├── pages/
│   ├── AdminLogin.jsx        # 🔐 Login administrativo
│   └── AdminDashboard.jsx    # 📊 Dashboard full
├── App.jsx                   # Router configuration
└── main.jsx                  # Entry point
```

---

## 🚀 Configuración Rápida

### 1. **Instalar dependencias**
```bash
npm install
```

### 2. **Iniciar desarrollo**
```bash
npm run dev
```
App disponible en `http://localhost:5173`

### 3. **Acceder al Admin**
- URL: `http://localhost:5173/admin/login`
- Email: cualquier email válido (ej: admin@vetcare.com)
- Password: cualquier contraseña > 6 caracteres

### 4. **Configurar Supabase (Opcional)**
```bash
# Copiar template
cp .env.example .env.local

# Editar .env.local con tus credenciales
VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-key
```

---

## 🔄 Cambiar la Marca

Para actualizar "VetCare" a otra marca por completo:

```javascript
// src/constants/branding.js
export const BRAND_NAME = "Mi Nueva Clínica"
export const BRAND_EMOJI = "🏥"
export const BRAND_TAGLINE = "Tu confianza, nuestro compromiso"
```

**Automáticamente se actualizará en:**
- Navbar ✓
- Hero ✓
- Footer ✓
- Gallery ✓
- Admin Panel ✓
- Productos ✓

---

## 🛠️ Stack Tecnológico

- **Framework**: React 19
- **Estilos**: Tailwind CSS 4 + CSS Custom Properties
- **Enrutamiento**: React Router v7
- **Validación**: Zod (importado, listo para usar)
- **Backend**: Supabase (configuración lista)
- **Icons**: Lucide React (disponible)

---

## 📝 TODO - Mejoras Futuras

- [ ] Integración completa con Supabase Auth
- [ ] Carrito de compras funcional
- [ ] Sistema de pagos (Stripe/PayPal)
- [ ] Reservas de citas en calendar
- [ ] Email notifications
- [ ] Galería con modal de expansión
- [ ] Blog/CMS
- [ ] Resenas verificadas

---

## 📧 Contacto

¿Dudas sobre la refactorización? Revisa los comentarios con `TODO:` en el código para próximas mejoras.

---

**Versión**: 1.0.0 Refactorizada  
**Última actualización**: Mayo 2026
