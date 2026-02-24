import { motion } from "framer-motion";

export default function GoogleMapPreview() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-12 text-center"
        >
          Find Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.123456!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db84e98765432%3A0x123456789abcdef!2sSt%20Joseph%20Elite%20Junior%20School!5e0!3m2!1sen!2sug!4v1678901234567!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="St Joseph Elite Junior School Map"
            ></iframe>
          </motion.div>

          {/* Contact Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Contact Information
            </h3>
            <p className="text-neutral-700 mb-2">
              <strong>Address:</strong> Plot 123, Kampala, Uganda
            </p>
            <p className="text-neutral-700 mb-2">
              <strong>Phone:</strong> +256 700 123 456
            </p>
            <p className="text-neutral-700 mb-2">
              <strong>Email:</strong> info@sjejs.ac.ug
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}