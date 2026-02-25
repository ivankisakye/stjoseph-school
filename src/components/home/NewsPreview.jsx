import { motion } from 'framer-motion';

// Example static data — replace later with JSON or backend
const news = [
  {
    title: "Summer Camp 2026",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
    date: "Feb 15, 2026",
    excerpt: "Join our exciting summer camp filled with sports, arts, and learning activities!"
  },
  {
    title: "New Science Lab Inaugurated",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
    date: "Jan 10, 2026",
    excerpt: "Our fully equipped science laboratory is now ready for students to explore STEM."
  },
  {
    title: "Annual Sports Day",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=600&q=80",
    date: "Mar 5, 2026",
    excerpt: "Get ready for a day full of sports, competitions, and team spirit!"
  },
];

export default function NewsPreview() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-12 text-center"
        >
          Latest News & Events
        </motion.h2>

        {/* News Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary-600 mb-2">{item.date}</p>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}