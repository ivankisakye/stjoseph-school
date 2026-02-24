import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AcademicsOverview from '../components/home/AcademicsOverview';
import FacilitiesSection from '../components/home/FacilitiesSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <AcademicsOverview />
      <FacilitiesSection />
      {/* More sections coming next... */}
    </div>
  );
}