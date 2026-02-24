import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-700">Now Enrolling for 2026</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Nurturing Young Minds for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Brighter Future
              </span>
            </h1>

            <p className="text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed">
              St Joseph Elite Junior School provides excellence in education from Daycare through Primary. 
              Committed to success with modern facilities, experienced teachers, and holistic development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                to="/academics"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-2xl border-2 border-primary-100 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
              >
                Explore Academics
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-neutral-200">
              <div>
                <p className="text-3xl font-bold text-primary-600">15+</p>
                <p className="text-sm text-neutral-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-600">500+</p>
                <p className="text-sm text-neutral-600">Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-warm-600">50+</p>
                <p className="text-sm text-neutral-600">Expert Teachers</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image placeholder - replace with actual school image later */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-3 opacity-20" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-card overflow-hidden border border-neutral-100">
                <div className="w-full h-full bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-heading text-4xl font-bold">SJ</span>
                    </div>
                    <p className="text-neutral-500 font-medium">School Image</p>
                    <p className="text-sm text-neutral-400">Replace with actual photo</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800">UNEB Certified</p>
                    <p className="text-xs text-neutral-500">Quality Education</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}