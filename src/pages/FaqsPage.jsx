import FAQs from '../components/faqs/FAQs';

export default function FaqsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Find answers to common questions about Kampala Junior Academy
          </p>
        </div>
      </div>

      <FAQs />
    </div>
  );
}