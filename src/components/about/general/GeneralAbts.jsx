import { motion } from 'framer-motion';

/* ---------------- Core Values Component ---------------- */
const CoreValues = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in academics, character, and service.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'primary',
    },
    {
      title: 'Integrity',
      description: 'We uphold honesty, transparency, and strong moral principles in all we do.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'accent',
    },
    {
      title: 'Innovation',
      description: 'We embrace modern teaching methods and technology to enhance learning.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'warm',
    },
    {
      title: 'Community',
      description: 'We foster a supportive environment where every child feels valued and included.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'primary',
    },
    {
      title: 'Discipline',
      description: 'We instill self-control, respect, and responsibility in our students.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'accent',
    },
    {
      title: 'Compassion',
      description: 'We nurture empathy, kindness, and care for others in our school community.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'warm',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-warm-50 text-warm-700 text-sm font-semibold rounded-full mb-4">
            What We Stand For
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            These principles guide everything we do at St Joseph Elite Junior School
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-neutral-50 hover:bg-white hover:shadow-card transition-all duration-300 border border-transparent hover:border-neutral-100"
            >
              <div className={`w-14 h-14 bg-${value.color}-100 rounded-2xl flex items-center justify-center text-${value.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                {value.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ---------------- History Component ---------------- */
const History = () => {
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
};

/* ---------------- Vision & Mission Component ---------------- */
const VisionMission = () => {
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
};

/* ---------------- Main GeneralAbts Component ---------------- */
export default function GeneralAbts() {
  return (
    <>
      <History />
      <VisionMission />
      <CoreValues />
    </>
  );
}