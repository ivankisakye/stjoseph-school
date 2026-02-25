import { motion } from 'framer-motion'

const timetable = [
  {
    class: 'Primary 1',
    schedule: [
      ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      ['8:00 - 9:00', 'Math', 'English', 'Math', 'Science', 'English'],
      ['9:00 - 10:00', 'English', 'Math', 'Science', 'Math', 'Creative Arts'],
      ['10:30 - 11:30', 'Science', 'Literacy', 'Math', 'English', 'ICT'],
    ],
  },
]

export default function Timetable() {
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
            Class Timetable
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Weekly Schedule
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Organized and structured learning for effective academic progress.
          </p>
        </motion.div>

        {timetable.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto bg-white rounded-2xl shadow-card"
          >
            <h3 className="text-xl font-bold p-6 text-primary-700">
              {item.class}
            </h3>

            <table className="min-w-full text-sm text-left">
              <tbody>
                {item.schedule.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-3 ${
                          rowIndex === 0
                            ? 'font-bold bg-primary-50 text-primary-700'
                            : ''
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ))}

      </div>
    </section>
  )
}