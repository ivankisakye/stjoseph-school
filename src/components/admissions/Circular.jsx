import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const circulars = [
  {
    id: 1,
    title: '2026 Fee Structure - Daycare & Nursery',
    description: 'Complete fee breakdown for our Early Years departments including tuition, development fees, meals, and additional charges.',
    file: '/StJosephsElite_NurseryCircular.pdf',
    type: 'PDF',
    size: '1.2 MB',
    department: 'Early Years',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'warm',
  },
  {
    id: 2,
    title: '2026 Fee Structure - Primary (P1-P7)',
    description: 'Comprehensive fee schedule for Primary department including tuition, textbooks, ICT, sports, and all mandatory charges.',
    file: '/StJosephsElite_PrimaryCircular.pdf',
    type: 'PDF',
    size: '1.5 MB',
    department: 'Primary',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: 'primary',
  },
];

const otherCirculars = [
  {
    title: 'Uniform Guidelines',
    date: 'January 2026',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Academic Calendar 2026',
    date: 'December 2023',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Parent Handbook',
    date: 'January 2026',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function Circular() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Official Documents
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Fee Circulars & Notices
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Download official fee structures and important circulars for the 2026 academic year.
          </p>
        </motion.div>

        {/* Main Circular Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {circulars.map((circular, index) => (
            <motion.div
              key={circular.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`bg-gradient-to-br from-${circular.color}-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-${circular.color}-100 hover:border-${circular.color}-200`}>
                
                {/* Department Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className={`inline-block px-4 py-1.5 bg-${circular.color}-500 text-white text-sm font-bold rounded-full`}>
                    {circular.department}
                  </span>
                  <div className={`w-14 h-14 bg-${circular.color}-100 rounded-2xl flex items-center justify-center text-${circular.color}-600 group-hover:scale-110 transition-transform`}>
                    {circular.icon}
                  </div>
                </div>

                {/* Content */}
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                  {circular.title}
                </h2>
                <p className="text-neutral-600 mb-6">
                  {circular.description}
                </p>

                {/* File Info & Download Button */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm bg-neutral-100 px-3 py-1.5 rounded-full">
                      <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      {circular.type}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {circular.size}
                    </span>
                  </div>
                  
                  <a
                    href={circular.file}
                    download
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-${circular.color}-600 hover:bg-${circular.color}-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-md hover:shadow-lg`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </div>

                {/* Preview Badge */}
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <button className="text-sm text-neutral-500 hover:text-neutral-700 flex items-center gap-1 group">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Quick Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Circulars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-8 text-center">
            Other Important Documents
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherCirculars.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-neutral-100 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-500 mb-3">Updated: {item.date}</p>
                    <button className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center gap-1">
                      Download
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Information Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary-600 rounded-3xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold mb-1">Need a Hard Copy?</h4>
                <p className="text-primary-100">
                  Printed copies of all circulars are available at our school office.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors whitespace-nowrap"
            >
              Contact Admissions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-neutral-500 text-sm mt-8"
        >
          All fees are in Ugandan Shillings (UGX) and are valid for the 2026 academic year.
          Fees are subject to review by the Board of Governors.
        </motion.p>
      </div>
    </section>
  );
}