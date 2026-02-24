import History from '../components/about/History';
import VisionMission from '../components/about/VisionMission';
import CoreValues from '../components/about/CoreValues';
//import StaffDirectory from '../components/about/StaffDirectory';
//import Gallery from '../components/about/Gallery';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About St Joseph Elite
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover our history, mission, and the dedicated team shaping future leaders
          </p>
        </div>
      </div>

      <History />
      <VisionMission /> 
      <CoreValues />
       
      {/*         
      
      <StaffDirectory />
      <Gallery />              */}
    </div>
  );
}