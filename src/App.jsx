import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import AdmissionsPage from './pages/AdmissionsPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import FaqsPage from './pages/FaqsPage'
import HowToApply from './components/admissions/HowToApply';
import GalleriePage from './pages/GalleriePage';
import StaffPage from './pages/StaffPage';
import GeneralabtsPage from './pages/GeneralabtsPage';
import HowtoapplyPage from './pages/HowtoapplyPage';
import RequirementsPage from './pages/RequirementsPage';
import CircularPage from './pages/CircularPage';

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
        <Route path="academics" element={<AcademicsPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faqs" element={<FaqsPage />} />
        <Route path="about/gallery" element={<GalleriePage />} />
        <Route path="about/staff" element={<StaffPage />} />
        <Route path="about/general" element={<GeneralabtsPage />} />
        <Route path="admissions/how" element={<HowtoapplyPage />} />
        <Route path="admissions/reqs" element={<RequirementsPage />} />
        <Route path="admissions/circ" element={<CircularPage />} />


        <Route path="apply" element={<Placeholder name="Apply Online" />} />
        <Route path="portal" element={<Placeholder name="Parent Portal" />} />


        <Route path="/admissions/how-to-apply" element={<HowToApply />} />


      </Route>
    </Routes>
  )
}

export default App