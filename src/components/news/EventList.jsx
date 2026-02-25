import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Annual Sports Day 2024',
    date: 'May 15, 2024',
    time: '8:00 AM - 4:00 PM',
    location: 'School Playground',
    description: 'A day of athletic competition, team sports, and fun activities for all students.',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Sports',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Parent-Teacher Conference',
    date: 'May 20, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'School Hall',
    description: 'Meet with teachers to discuss student progress and academic goals for the term.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Academic',
    color: 'accent',
  },
  {
    id: 3,
    title: 'Science Fair Exhibition',
    date: 'May 25, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'Science Lab',
    description: 'Students showcase their science projects and experiments. Parents and guests welcome.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Academic',
    color: 'warm',
  },
  {
    id: 4,
    title: 'Music & Drama Festival',
    date: 'June 2, 2024',
    time: '1:00 PM - 5:00 PM',
    location: 'School Auditorium',
    description: 'Annual performing arts festival featuring choir, drama, and traditional dance.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Arts',
    color: 'primary',
  },
  {
    id: 5,
    title: 'Open Day & Admissions Tour',
    date: 'June 10, 2024',
    time: '9:00 AM - 12:00 PM',
    location: 'School Campus',
    description: 'Prospective parents and students are invited to tour the campus and meet staff.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Admissions',
    color: 'accent',
  },
  {
    id: 6,
    title: 'Graduation Ceremony (P7)',
    date: 'June 18, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'School Hall',
    description: 'Celebrating our Primary 7 graduates as they move on to secondary education.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Ceremony',
    color: 'warm',
  },
];

const categories = ['All', 'Sports', 'Academic', 'Arts', 'Admissions', 'Ceremony'];

export default function EventList() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
            Upcoming Events
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            School Calendar
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join us for these exciting events and activities
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-neutral-600 hover:bg-primary-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 right-4 px-3 py-1 bg-${event.color}-600 text-white text-xs font-bold rounded-full`}>
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date & Time */}
                <div className="flex items-center gap-4 mb-3 text-sm text-neutral-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                  {event.title}
                </h3>

                {/* Location */}
                <p className="text-neutral-600 text-sm mb-3 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </p>

                {/* Description */}
                <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Button */}
                <Link 
                  to={`/events/${event.id}`}
                  className={`inline-flex items-center gap-1 text-${event.color}-600 font-semibold text-sm hover:gap-2 transition-all`}
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Calendar Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/calendar" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Full Calendar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}