import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

// Placeholder pages — we'll build each one properly next
const Placeholder = ({ name }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <h1 className="text-3xl font-heading font-bold text-primary-700">{name} — Coming Soon</h1>
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="academics" element={<Placeholder name="Academics" />} />
        <Route path="admissions" element={<Placeholder name="Admissions" />} />
        <Route path="news" element={<Placeholder name="News & Events" />} />
        <Route path="contact" element={<Placeholder name="Contact" />} />
        <Route path="apply" element={<Placeholder name="Apply Online" />} />
        <Route path="portal" element={<Placeholder name="Parent Portal" />} />
      </Route>
    </Routes>
  )
}

export default App