import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AcademicsOverview from '../components/home/AcademicsOverview';
import FacilitiesSection from '../components/home/FacilitiesSection';
import NewsPreview from '../components/home/NewsPreview';
import NewsletterSubscription from '../components/home/NewsletterSubscription';
import GoogleMapPreview from '../components/home/GoogleMapPreview';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <AcademicsOverview />
      <FacilitiesSection />
      <NewsPreview />
      <NewsletterSubscription />
      <GoogleMapPreview />
      {/* More sections coming next... */}
    </div>
  );
}