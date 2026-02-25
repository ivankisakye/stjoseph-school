import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const departments = [
  {
    name: 'Daycare',
    ageRange: '6 months - 2 years',
    description: 'Our Daycare department provides a safe, nurturing environment where infants and toddlers receive personalized care. We focus on early stimulation, motor skills development, and establishing routines in a loving atmosphere.',
    image: 'https://kimi-web-img.moonshot.cn/img/www.justchildren.net/d3cc2c0cf44e589bb324cd4d972d8e222a582111.jpg',
    features: ['Safe environment', 'Trained caregivers', 'Early stimulation', 'Nutritious meals', 'Motor development'],
    color: 'warm',
  },
  {
    name: 'Nursery',
    ageRange: '3 - 5 years',
    description: 'The Nursery department introduces children to structured learning through play-based methods. We develop early literacy, numeracy, social skills, and creative expression in preparation for primary education.',
    image: 'https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/54b9b7b1434ffbbafef9134854c83317562efff5.jpg',
    features: ['Play-based learning', 'Phonics program', 'Social development', 'Creative arts', 'School readiness'],
    color: 'accent',
  },
  {
    name: 'Primary',
    ageRange: '6 - 12 years (P1-P7)',
    description: 'Our Primary department follows the UNEB curriculum with emphasis on academic excellence, critical thinking, and holistic development. We prepare students for the Primary Leaving Examinations (PLE) and beyond.',
    image: 'https://kimi-web-img.moonshot.cn/img/media.gettyimages.com/59fc4990b74eac717cd778000a0fd334666e738c.jpg',
    features: ['UNEB curriculum', 'ICT integration', 'Science labs', 'Sports programs', 'Leadership training'],
    color: 'primary',
  },
];

export default function Departments() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
            Our Departments
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Three Departments, One Mission
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Each department is specially designed to meet the unique developmental needs of every age group
          </p>
        </motion.div>

        <div className="space-y-12">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-card group">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${dept.color}-900/60 to-transparent`} />
                  <div className="absolute bottom-6 left-6">
                    <span className={`inline-block px-4 py-1 bg-${dept.color}-500 text-white text-sm font-bold rounded-full mb-2`}>
                      {dept.ageRange}
                    </span>
                    <h3 className="text-3xl font-heading font-bold text-white">
                      {dept.name} Department
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  {dept.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {dept.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg className={`w-5 h-5 text-${dept.color}-500 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/apply"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-${dept.color}-600 text-white font-semibold rounded-xl hover:bg-${dept.color}-700 transition-colors`}
                >
                  Apply to {dept.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}