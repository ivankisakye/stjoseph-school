import { motion } from 'framer-motion'

const homeworkFiles = [
  {
    class: 'Primary 1',
    subject: 'Mathematics',
    term: 'Term 1',
    type: 'PDF',
    size: '245 KB',
    file: '/downloads/p1-math-term1.pdf',
  },
  {
    class: 'Primary 2',
    subject: 'English',
    term: 'Term 1',
    type: 'PDF',
    size: '310 KB',
    file: '/downloads/p2-english-term1.pdf',
  },
  {
    class: 'Primary 3',
    subject: 'Integrated Science',
    term: 'Term 1',
    type: 'DOC',
    size: '190 KB',
    file: '/downloads/p3-science-term1.doc',
  },
]

export default function HomeworkDownloads() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Homework Resources
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Download Weekly Assignments
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Access homework materials for each class. Updated weekly by our academic team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeworkFiles.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-card transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-primary-600">
                  {file.class}
                </span>
                <span className="text-xs bg-neutral-100 px-2 py-1 rounded-full">
                  {file.type}
                </span>
              </div>

              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                {file.subject}
              </h3>

              <p className="text-sm text-neutral-500 mb-4">
                {file.term} • {file.size}
              </p>

              <a
                href={file.file}
                download
                className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-xl transition-colors"
              >
                Download
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}