import { motion } from 'framer-motion';

const curriculumAreas = [
  {
    title: 'Languages',
    subjects: ['English', 'Literacy', 'Local Language (Luganda)'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'primary',
  },
  {
    title: 'Sciences',
    subjects: ['Integrated Science', 'Mathematics', 'Agriculture'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'accent',
  },
  {
    title: 'Social Studies',
    subjects: ['Social Studies', 'Religious Education', 'Civics'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    color: 'warm',
  },
  {
    title: 'Creative Arts',
    subjects: ['Art & Design', 'Music', 'Physical Education'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    color: 'primary',
  },
  {
    title: 'Technology',
    subjects: ['Computer Studies', 'ICT Skills', 'Digital Literacy'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'accent',
  },
  {
    title: 'Life Skills',
    subjects: ['Home Economics', 'Health Education', 'Guidance & Counseling'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'warm',
  },
];

export default function Curriculum() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            UNEB Curriculum
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Comprehensive Primary Education
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We follow the Uganda National Examinations Board (UNEB) curriculum, enhanced with modern 
            teaching methodologies and co-curricular activities for holistic development.
          </p>
        </motion.div>

        {/* Curriculum Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-neutral-50 hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-neutral-100"
            >
              <div className={`w-14 h-14 bg-${area.color}-100 rounded-2xl flex items-center justify-center text-${area.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                {area.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                {area.title}
              </h3>
              <ul className="space-y-2">
                {area.subjects.map((subject) => (
                  <li key={subject} className="flex items-center gap-2 text-neutral-600">
                    <svg className={`w-4 h-4 text-${area.color}-500 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {subject}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Assessment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">PLE</p>
              <p className="text-primary-100">Primary Leaving Examinations</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-primary-100">Transition to Secondary</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">Div 1-2</p>
              <p className="text-primary-100">Consistent Performance</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}