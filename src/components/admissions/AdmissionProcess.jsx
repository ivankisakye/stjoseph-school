import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    step: 'Step 1',
    title: 'Inquiry & School Tour',
    description: 'Contact our admissions office to schedule a personalized tour of our campus. Meet our teachers, see our facilities, and get a feel for our school community.',
    duration: '1-2 days',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    step: 'Step 2',
    title: 'Application Submission',
    description: 'Complete the application form and submit all required documents. Our admissions team will review your application and contact you within 3-5 business days.',
    duration: '3-5 days',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'accent',
  },
  {
    step: 'Step 3',
    title: 'Entrance Assessment',
    description: 'Your child will participate in an age-appropriate assessment to evaluate their readiness and identify their learning needs. This helps us place them in the right class.',
    duration: '2 hours',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    color: 'warm',
  },
  {
    step: 'Step 4',
    title: 'Family Interview',
    description: 'Meet with our admissions committee for a friendly conversation about your child\'s interests, your educational goals, and how we can best support your family.',
    duration: '45-60 min',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    step: 'Step 5',
    title: 'Admission Decision',
    description: 'Receive your admission decision via email and phone call. Accepted students will receive an official acceptance letter and enrollment package.',
    duration: '5-7 days',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'accent',
  },
  {
    step: 'Step 6',
    title: 'Enrollment & Orientation',
    description: 'Complete the enrollment process by paying fees, purchasing uniforms, and attending our new parent orientation to prepare for a successful school year.',
    duration: '1-2 weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'warm',
  },
];

const keyContacts = [
  {
    name: 'Sarah Nakato',
    role: 'Admissions Director',
    email: 'admissions@kampalajunior.ac.ug',
    phone: '+256 123 456 789',
    availability: 'Mon-Fri, 8am - 4pm',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'John Mukasa',
    role: 'Enrollment Coordinator',
    email: 'enrollment@kampalajunior.ac.ug',
    phone: '+256 123 456 790',
    availability: 'Mon-Fri, 9am - 5pm',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
];

export default function AdmissionProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-warm-50 text-warm-700 text-sm font-semibold rounded-full mb-4">
            Your Journey Begins Here
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Admission Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A clear, transparent, and supportive process from your first inquiry to your child's first day.
          </p>
        </motion.div>

        {/* Timeline/Steps */}
        <div className="relative">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-warm-200" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className={`absolute -top-3 left-8 bg-${step.color}-500 text-white text-sm font-bold px-3 py-1 rounded-full z-10 shadow-lg`}>
                  {step.step}
                </div>

                {/* Card */}
                <div className="bg-neutral-50 rounded-3xl p-8 pt-10 hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-neutral-100 h-full">
                  
                  {/* Icon & Duration */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-${step.color}-100 rounded-2xl flex items-center justify-center text-${step.color}-600 group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-${step.color}-50 text-${step.color}-700 rounded-full`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${step.color}-500`} />
                      <span className="text-xs text-neutral-500">
                        {index === 0 && 'Getting Started'}
                        {index === 1 && 'Application Phase'}
                        {index === 2 && 'Assessment Phase'}
                        {index === 3 && 'Interview Phase'}
                        {index === 4 && 'Decision Phase'}
                        {index === 5 && 'Final Steps'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-primary-600 to-accent-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Key Dates for 2024 Admissions
                </h3>
                <p className="text-primary-100 mb-8">
                  Mark your calendar with these important dates. Early application is recommended.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Early Applications</p>
                      <p className="text-sm text-primary-200">Now - March 31, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Entrance Assessments</p>
                      <p className="text-sm text-primary-200">April 15 - May 30, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Enrollment Deadline</p>
                      <p className="text-sm text-primary-200">June 30, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Key Contacts */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-heading text-xl font-bold mb-6">Need Help? Contact Us</h4>
                <div className="space-y-4">
                  {keyContacts.map((contact) => (
                    <div key={contact.email} className="flex items-center gap-4">
                      <img 
                        src={contact.image} 
                        alt={contact.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                      />
                      <div>
                        <p className="font-semibold">{contact.name}</p>
                        <p className="text-sm text-primary-200">{contact.role}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {contact.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-600">
            Have questions about the process?{' '}
            <Link to="/faq" className="text-primary-600 font-semibold hover:text-primary-700 underline underline-offset-2">
              Visit our FAQ page
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}