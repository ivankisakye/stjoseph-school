import { motion } from 'framer-motion'

export default function FeesNotice() {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            School Fees Information
          </h2>

          <p className="text-lg text-primary-100 mb-8">
            Our fee structure is designed to provide quality education at an affordable cost.
            Please contact the school office for detailed fee breakdown and payment plans.
          </p>

          <button className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-neutral-100 transition">
            Request Fee Structure
          </button>

        </motion.div>

      </div>
    </section>
  )
}