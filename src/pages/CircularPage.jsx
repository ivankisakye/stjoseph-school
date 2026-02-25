import Circular from '../components/admissions/circ/Circular';

export default function CircularPage() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image + Primary Color Overlay */}
      <div 
        className="relative bg-cover bg-center pt-32 pb-20"
        style={{
          backgroundImage: 'url("https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/54b9b7b1434ffbbafef9134854c83317562efff5.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-primary-600/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            School Circular
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important notices
          </p>
        </div>
      </div>

      <Circular />
    </div>
  );
}