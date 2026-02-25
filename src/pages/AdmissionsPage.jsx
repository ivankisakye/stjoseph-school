import HowToApply from '../components/admissions/HowToApply'
import Requirements from '../components/admissions/Requirements'
import AdmissionProcess from '../components/admissions/AdmissionProcess'
import FeesNotice from '../components/admissions/FeesNotice'
import Circular from '../components/admissions/Circular'

export default function AdmissionsPage() {
  return (
    <div className="bg-white">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Admissions
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Join our community of excellence. Start your child’s journey with us today.
          </p>
        </div>
      </div>

      <HowToApply />
      <Requirements />
      <AdmissionProcess />
      <FeesNotice />
      <Circular />

    </div>
  )
}