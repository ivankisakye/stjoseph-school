import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Motto Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 p-1 rounded-2xl">
            <div className="bg-white px-8 py-4 rounded-xl">
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Our Motto</p>
              <p className="font-heading text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Committed to Succeed
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              To be the leading center of academic excellence in Uganda, nurturing holistic, 
              innovative, and morally upright citizens who will transform their communities 
              and contribute to national development.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              To provide quality, inclusive, and holistic education that develops every child's 
              intellectual, physical, social, and moral potential through innovative teaching, 
              modern facilities, and a nurturing environment guided by Christian values.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}