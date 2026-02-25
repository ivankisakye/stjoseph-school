import { motion } from 'framer-motion';

const requirements = [
  {
    category: 'Age Requirements',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    items: [
      { label: 'Daycare', detail: '6 months - 2 years' },
      { label: 'Nursery', detail: '3 - 5 years' },
      { label: 'Primary', detail: '6 - 12 years (P1-P7)' },
    ],
    color: 'primary',
  },
  {
    category: 'Required Documents',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    items: [
      { label: 'Birth Certificate', detail: 'Certified copy' },
      { label: 'Immunization Card', detail: 'Complete record' },
      { label: 'Passport Photos', detail: '4 recent photos' },
      { label: 'Previous Reports', detail: 'Last 2 years (if applicable)' },
    ],
    color: 'accent',
  },
  {
    category: 'Academic Requirements',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      { label: 'Entrance Assessment', detail: 'Age-appropriate evaluation' },
      { label: 'Interview', detail: 'Student & parent interview' },
      { label: 'School Records', detail: 'Transfer letter (if applicable)' },
    ],
    color: 'warm',
  },
  {
    category: 'Health Requirements',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      { label: 'Medical Form', detail: 'Completed by pediatrician' },
      { label: 'Emergency Contacts', detail: 'At least 2 contacts' },
      { label: 'Special Needs', detail: 'Medical/learning support docs' },
    ],
    color: 'primary',
  },
  {
    category: 'Financial Requirements',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { label: 'Application Fee', detail: 'Non-refundable' },
      { label: 'Tuition Deposit', detail: 'Holds your child\'s place' },
      { label: 'Payment Plan', detail: 'Termly or annual options' },
    ],
    color: 'accent',
  },
  {
    category: 'Uniform & Supplies',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    items: [
      { label: 'School Uniform', detail: 'Full set (available at school)' },
      { label: 'PE Kit', detail: 'Sports wear and shoes' },
      { label: 'Stationery', detail: 'List provided upon admission' },
    ],
    color: 'warm',
  },
];

export default function Requirements() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
            What You'll Need
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Admission Requirements
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Everything you need to prepare for a smooth admission process at Kampala Junior Academy.
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={req.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-card transition-all duration-300 border border-neutral-100 hover:border-neutral-200"
            >
              {/* Header with Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 bg-${req.color}-100 rounded-2xl flex items-center justify-center text-${req.color}-600 flex-shrink-0`}>
                  {req.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 pt-2">
                  {req.category}
                </h3>
              </div>

              {/* Requirements List */}
              <ul className="space-y-4">
                {req.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <svg className={`w-5 h-5 text-${req.color}-500 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-neutral-900">{item.label}</p>
                      <p className="text-sm text-neutral-500">{item.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Additional Info Badge (for first card only as example) */}
              {req.category === 'Age Requirements' && (
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <p className="text-xs text-neutral-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cut-off date: December 31st for age calculation
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 border border-neutral-100">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Note 1 */}
              <div className="flex-1 flex gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-neutral-900 mb-1">Application Deadline</h4>
                  <p className="text-neutral-600">Rolling admissions throughout the year. Early application recommended for popular classes.</p>
                </div>
              </div>
              
              {/* Note 2 */}
              <div className="flex-1 flex gap-4">
                <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center text-accent-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-neutral-900 mb-1">Document Verification</h4>
                  <p className="text-neutral-600">All documents must be original or certified copies. International students require additional documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Requirements Checklist (PDF)
          </button>
        </motion.div>
      </div>
    </section>
  );
}