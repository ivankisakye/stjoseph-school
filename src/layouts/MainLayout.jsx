import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* pt-20 pushes content below the fixed header */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
    </div>
  )
}