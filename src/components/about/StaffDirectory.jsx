import { motion } from 'framer-motion';

const staff = [
  {
    name: 'Mr. Joseph Mukasa',
    role: 'Headteacher',
    image: 'https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/f21b0bf7496cb6e8c30c88a3ef24d94a4080e41f.jpg',
    bio: '20+ years experience in education leadership',
  },
  {
    name: 'Ms. Sarah Namazzi',
    role: 'Deputy Headteacher',
    image: 'https://kimi-web-img.moonshot.cn/img/img.freepik.com/874fb249728f65589b89835f8b844651afe7570a.jpg',
    bio: 'Specialist in curriculum development',
  },
  {
    name: 'Mr. David Okello',
    role: 'Head of Academics',
    image: 'https://kimi-web-img.moonshot.cn/img/media.gettyimages.com/e3424945c5a2f31be787a127e6df046e2d3bea11.jpg',
    bio: 'UNEB examiner and curriculum expert',
  },
  {
    name: 'Ms. Grace Auma',
    role: 'Nursery Coordinator',
    image: 'https://kimi-web-img.moonshot.cn/img/img.freepik.com/874fb249728f65589b89835f8b844651afe7570a.jpg',
    bio: 'Early childhood education specialist',
  },
];

export default function StaffDirectory() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Our Team
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Dedicated professionals committed to nurturing your child's potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-neutral-500 text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}