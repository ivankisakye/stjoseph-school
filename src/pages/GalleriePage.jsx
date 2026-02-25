import Gallery from '../components/about/gallery/Gallery';

export default function GalleriePage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            School Gallery
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or to schedule a visit to our campus
          </p>
        </div>
      </div>

      <Gallery />
    </div>
  );
}