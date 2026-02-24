import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: 'https://kimi-web-img.moonshot.cn/img/resources.finalsite.net/678e744foonshot.cn/img/cunninghamrec.com/0cdcc17e54ffa9b44ff9901b629dbf4929609f52.jpg',
    category: 'Sports',
    title: 'Basketball Court',
  },
  {
    src: 'https://kimi-web-img.moonshot.cn/img/teachingenglishwithoxford.oup.com/dc77bece621fd8addb9482393167b46519e5f0ed.jpg',
    category: 'Academics',
    title: 'Classroom Learning',
  },
  {
    src: 'https://kimi-web-img.moonshot.cn/img/www.weareteachers.com/d5d27ff3b7248c8318a621491f0ea4d205ac4187.jpg',
    category: 'Events',
    title: 'Graduation Day',
  },
  {
    src: 'https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/54b9b7b1434ffbbafef9134854c83317562efff5.jpg',
    category: 'Nursery',
    title: 'Early Learning',
  },
  {
    src: 'https://kimi-web-img.moonshot.cn/img/images.adsttc.com/efbb211ca5298497df76e9f909a90ebdc44c8da6.jpg',
    category: 'Facilities',
    title: 'School Building',
  },
  {
    src: 'https://kimi-web-img.moonshot.cn/img/i0.wp.com/94e6eb7b0b84cb8ac4b6f322d60f4186647f1465.jpg',
    category: 'Academics',
    title: 'STEM Activities',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
            Our Campus
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            School Gallery
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take a visual tour of our facilities and activities
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-glow transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent-300 text-sm font-medium mb-1">{image.category}</span>
                <h3 className="text-white font-heading text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-accent-400 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-white font-heading text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-neutral-400">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}