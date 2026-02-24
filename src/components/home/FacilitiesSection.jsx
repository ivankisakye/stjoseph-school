import { motion } from "framer-motion";

const facilities = [
  {
    title: "Two Swimming Pools",
    image:
      "https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&w=1000&q=80",
    desc: "Safe, modern pools for training and recreation.",
  },
  {
    title: "Computer Lab",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1000&q=800",
    desc: "Networked lab with modern PCs for digital literacy.",
  },
  {
    title: "CCTV Security",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1000&q=80",
    desc: "24/7 surveillance ensuring student safety.",
  },
  {
    title: "Sports Courts",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1000&q=80",
    desc: "Netball & basketball courts for physical development.",
  },
  {
    title: "Music & Co-Curricular",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
    desc: "Programs that nurture creativity and talent.",
  },
  {
    title: "Science Laboratory",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1000&q=80",
    desc: "Fully equipped laboratory for practical science learning.",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-14 text-center"
        >
          Our Facilities
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-neutral-200">
                  {facility.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}