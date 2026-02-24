import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const programs = [
  {
    level: 'Daycare',
    age: '6 months - 2 years',
    description: 'Safe, nurturing environment with early stimulation activities, motor skills development, and caring professional staff.',
    image: 'https://kimi-web-img.moonshot.cn/img/www.justchildren.net/d3cc2c0cf44e589bb324cd4d972d8e222a582111.jpg',
    color: 'warm',
    features: ['Safe environment', 'Early stimulation', 'Motor development', 'Professional care'],
  },
  {
    level: 'Nursery',
    age: '3 - 5 years',
    description: 'Play-based learning foundation focusing on social skills, early literacy, numeracy, and creative expression.',
    image: 'https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/54b9b7b1434ffbbafef9134854c83317562efff5.jpg',
    color: 'accent',
    features: ['Play-based learning', 'Early literacy', 'Social skills', 'Creative arts'],
  },
  {
    level: 'Primary',
    age: '6 - 12 years',
    description: 'UNEB curriculum with emphasis on academic excellence, critical thinking, technology integration, and holistic development.',
    image: 'https://kimi-web-img.moonshot.cn/img/media.gettyimages.com/59fc4990b74eac717cd778000a0fd334666e738c.jpg',
    color: 'primary',
    features: ['UNEB Curriculum', 'ICT Integration', 'Sports & Arts', 'Leadership skills'],
  },
];

export default function AcademicsOverview() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Academic Excellence at Every Level
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From daycare through primary school, we provide age-appropriate education that nurtures growth, 
            creativity, and a lifelong love of learning.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.level} students`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${program.color}-900/80 via-${program.color}-900/20 to-transparent`} />
                
                {/* Level Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-block px-3 py-1 bg-${program.color}-500 text-white text-xs font-bold rounded-full mb-2`}>
                    {program.age}
                  </span>
                  <h3 className={`text-2xl font-heading font-bold text-white`}>
                    {program.level}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-700">
                      <svg className={`w-4 h-4 text-${program.color}-500 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/academics"
                  className={`inline-flex items-center gap-2 text-${program.color}-600 font-semibold hover:text-${program.color}-700 transition-colors group/link`}
                >
                  Learn more
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our Academic Community?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Applications are now open for the 2026 academic year. Secure your child's place at St Joseph Elite Junior School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-soft"
            >
              Apply Now
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-2xl border-2 border-primary-400 hover:bg-primary-400 transition-all duration-300"
            >
              View Curriculum
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}