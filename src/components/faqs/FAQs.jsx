import { motion } from 'framer-motion';
import { useState } from 'react';

const faqCategories = [
  {
    id: 'general',
    name: 'General Questions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    id: 'admissions',
    name: 'Admissions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'accent',
  },
  {
    id: 'academics',
    name: 'Academics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'warm',
  },
  {
    id: 'fees',
    name: 'Fees & Payments',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    id: 'facilities',
    name: 'Facilities',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'accent',
  },
  {
    id: 'transport',
    name: 'Transport',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: 'warm',
  },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'What are the school hours?',
    answer: 'School hours are from 8:00 AM to 4:00 PM, Monday through Friday. Daycare and nursery have slightly adjusted hours from 8:00 AM to 3:30 PM. Early drop-off is available from 7:00 AM and aftercare until 5:30 PM at an additional cost.',
    helpful: 45,
  },
  {
    id: 2,
    category: 'general',
    question: 'Do you provide meals?',
    answer: 'Yes, we provide nutritious breakfast, lunch, and two snacks daily. Our menu is designed by a nutritionist and includes a variety of local and international dishes. Special dietary requirements can be accommodated with prior notice.',
    helpful: 38,
  },
  {
    id: 3,
    category: 'general',
    question: 'What is the teacher-to-student ratio?',
    answer: 'Our teacher-to-student ratios are: Daycare 1:8, Nursery 1:12, and Primary 1:25. We believe in personalized attention to ensure every child receives the support they need.',
    helpful: 52,
  },
  {
    id: 4,
    category: 'admissions',
    question: 'When should I apply?',
    answer: 'We accept applications throughout the year, but we recommend applying at least 3-6 months before your intended start date. For popular classes, early application is strongly advised. The main admission intake is at the beginning of each term (January, May, September).',
    helpful: 67,
  },
  {
    id: 5,
    category: 'admissions',
    question: 'What is the admission process?',
    answer: 'Our admission process includes: 1) School tour and inquiry, 2) Application submission with required documents, 3) Entrance assessment for the child, 4) Family interview with admissions team, 5) Admission decision, and 6) Enrollment and orientation.',
    helpful: 41,
  },
  {
    id: 6,
    category: 'admissions',
    question: 'What documents are required?',
    answer: 'You\'ll need: certified birth certificate, immunization record, 4 passport photos, previous 2 years\' school reports (if applicable), transfer letter from previous school, and completed medical form from your pediatrician.',
    helpful: 33,
  },
  {
    id: 7,
    category: 'academics',
    question: 'What curriculum do you follow?',
    answer: 'We follow the Uganda National Examinations Board (UNEB) curriculum for Primary, enhanced with modern teaching methodologies. Our Nursery uses a play-based approach following the Early Childhood Development framework.',
    helpful: 56,
  },
  {
    id: 8,
    category: 'academics',
    question: 'Do you offer extra-curricular activities?',
    answer: 'Yes! We offer a wide range of activities including football, basketball, swimming, music, drama, traditional dance, art club, chess, debate, and environmental club. These are integrated into the school week.',
    helpful: 49,
  },
  {
    id: 9,
    category: 'academics',
    question: 'How do you support students with learning difficulties?',
    answer: 'We have a dedicated learning support team that provides individualized assistance. We conduct regular assessments to identify needs and work with parents to create tailored support plans.',
    helpful: 28,
  },
  {
    id: 10,
    category: 'fees',
    question: 'What are the school fees?',
    answer: 'Fees vary by department. Daycare: UGX 1,150,000 per term, Nursery: UGX 1,450,000 per term, Primary: UGX 2,080,000 per term. This includes tuition, meals, materials, and medical insurance. Download our fee structure for a detailed breakdown.',
    helpful: 73,
  },
  {
    id: 11,
    category: 'fees',
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans. You can pay termly, or opt for our annual payment plan which includes a 5% discount. We also accept monthly installments with a formal agreement.',
    helpful: 42,
  },
  {
    id: 12,
    category: 'fees',
    question: 'Are there any scholarships?',
    answer: 'We offer merit-based scholarships for outstanding students entering P1 and P4. We also have need-based financial aid. Applications for scholarships open in September each year.',
    helpful: 64,
  },
  {
    id: 13,
    category: 'facilities',
    question: 'Do you have a library?',
    answer: 'Yes, we have a well-stocked library with over 5,000 books, computers for research, and a cozy reading area. Students have scheduled library time each week.',
    helpful: 31,
  },
  {
    id: 14,
    category: 'facilities',
    question: 'What sports facilities are available?',
    answer: 'Our campus includes a football pitch, basketball court, swimming pool, playground equipment, and a multi-purpose hall for indoor sports. We also have a dedicated PE field.',
    helpful: 47,
  },
  {
    id: 15,
    category: 'facilities',
    question: 'Is there a computer lab?',
    answer: 'Yes, we have a modern ICT lab with 30 computers, high-speed internet, and interactive smart boards. Students receive computer lessons from P1 onwards.',
    helpful: 39,
  },
  {
    id: 16,
    category: 'transport',
    question: 'Do you provide school transport?',
    answer: 'Yes, we have a fleet of school buses covering major routes in Kampala. Transport fees are separate and depend on your location. Contact our transport office for route availability.',
    helpful: 44,
  },
  {
    id: 17,
    category: 'transport',
    question: 'What are the safety measures on the buses?',
    answer: 'All buses have seatbelts, speed governors, GPS tracking, and a trained bus attendant. Drivers are licensed and undergo regular safety training. We also have a live tracking app for parents.',
    helpful: 52,
  },
  {
    id: 18,
    category: 'transport',
    question: 'What time are pick-ups and drop-offs?',
    answer: 'Pick-up times vary by route, typically between 6:30 AM and 7:30 AM. Afternoon drop-offs are between 3:30 PM and 4:30 PM. You\'ll receive a schedule upon enrollment.',
    helpful: 27,
  },
];

const popularQuestions = faqs.slice(0, 4);

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqs, setOpenFaqs] = useState([]);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenFaqs(prev =>
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Got Questions?
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Find answers to common questions about Kampala Junior Academy. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition shadow-lg"
            />
            <svg className="w-6 h-6 text-neutral-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              activeCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-neutral-100 text-neutral-600 hover:bg-primary-100'
            }`}
          >
            All Questions
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-${category.color}-600 text-white shadow-lg`
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <span className={`w-5 h-5 ${activeCategory === category.id ? 'text-white' : `text-${category.color}-600`}`}>
                {category.icon}
              </span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Popular Questions (shown when no search/category filter) */}
        {activeCategory === 'all' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6 text-center">
              Most Popular Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularQuestions.map((faq) => (
                <motion.button
                  key={faq.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setActiveCategory(faq.category);
                    setTimeout(() => {
                      document.getElementById(`faq-${faq.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      toggleFaq(faq.id);
                    }, 100);
                  }}
                  className="text-left p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl hover:shadow-lg transition-all border border-primary-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{faq.question}</p>
                      <p className="text-sm text-primary-600 mt-1">
                        {faq.helpful} people found this helpful
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const category = faqCategories.find(c => c.id === faq.category);
                return (
                  <motion.div
                    key={faq.id}
                    id={`faq-${faq.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-neutral-200 hover:border-primary-200 transition-all shadow-sm hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-10 h-10 bg-${category?.color}-100 rounded-xl flex items-center justify-center text-${category?.color}-600 flex-shrink-0 mt-1`}>
                          {category?.icon}
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-bold text-neutral-900 pr-8">
                            {faq.question}
                          </h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className={`text-xs font-medium px-3 py-1 bg-${category?.color}-50 text-${category?.color}-700 rounded-full`}>
                              {category?.name}
                            </span>
                            <span className="text-xs text-neutral-500 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              {faq.helpful} helpful
                            </span>
                          </div>
                        </div>
                      </div>
                      <svg
                        className={`w-6 h-6 text-neutral-400 transition-transform duration-300 ${
                          openFaqs.includes(faq.id) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {openFaqs.includes(faq.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 border-t border-neutral-100"
                      >
                        <div className="flex gap-4">
                          <div className="w-10 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-neutral-600 leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            <div className="flex items-center justify-between">
                              <button className="text-sm text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                Was this helpful?
                              </button>
                              <button className="text-sm text-neutral-500 hover:text-neutral-700 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">No questions found</h3>
              <p className="text-neutral-600 mb-6">Try adjusting your search or filter</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-400 transition-colors border border-primary-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: +256 123 456 789
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 text-sm">
            Quick links: 
            <a href="/admissions" className="text-primary-600 hover:text-primary-700 mx-2">Admissions</a> • 
            <a href="/fees" className="text-primary-600 hover:text-primary-700 mx-2">Fee Structure</a> • 
            <a href="/calendar" className="text-primary-600 hover:text-primary-700 mx-2">School Calendar</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}