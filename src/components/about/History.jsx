import { motion } from 'framer-motion';

export default function History() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://kimi-web-img.moonshot.cn/img/projecthavehope.org/d27fd15da53d59d2c82d7953454009bf9eb17080.jpg"
                alt="School History"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              
              {/* Year Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <p className="text-3xl font-bold text-primary-600">2009</p>
                <p className="text-sm text-neutral-600">Founded</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-accent-100 rounded-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              A Legacy of Excellence in Education
            </h2>
            
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                St Joseph Elite Junior School was established in 2009 with a vision to provide 
                quality education to the Bweyogerere community. What started as a small nursery 
                school has grown into a comprehensive institution serving Daycare, Nursery, and 
                Primary levels.
              </p>
              <p>
                Over the past 15 years, we have remained committed to our motto "Committed to Succeed," 
                consistently producing top-performing students in UNEB examinations. Our alumni have 
                gone on to excel in prestigious secondary schools across Uganda.
              </p>
              <p>
                Today, we stand as a beacon of educational excellence in Wakiso District, equipped with 
                modern facilities including two swimming pools, a fully networked computer lab, and 
                state-of-the-art classrooms, while maintaining our founding values of integrity, 
                discipline, and academic excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-neutral-200">
              <div>
                <p className="text-3xl font-bold text-primary-600">15+</p>
                <p className="text-sm text-neutral-600">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-600">2000+</p>
                <p className="text-sm text-neutral-600">Alumni Graduates</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-warm-600">50+</p>
                <p className="text-sm text-neutral-600">Dedicated Staff</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}