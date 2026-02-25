import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Celebrating Our PLE Results 2023',
    excerpt: 'Kampala Junior Academy celebrates another year of outstanding PLE results with 95% of our students achieving Division 1 and 2.',
    content: 'We are proud to announce that our students have once again excelled in the Primary Leaving Examinations...',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sarah Nakato',
      role: 'Head Teacher',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    date: 'January 15, 2024',
    category: 'Academic Achievements',
    readTime: '5 min read',
    featured: true,
    tags: ['PLE', 'Results', 'Academic Excellence'],
  },
  {
    id: 2,
    title: 'Annual Sports Day 2024: A Day to Remember',
    excerpt: 'Students, parents, and staff came together for our biggest sports day yet, celebrating teamwork and athleticism.',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'John Mukasa',
      role: 'Sports Director',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    date: 'February 5, 2024',
    category: 'Co-curricular',
    readTime: '4 min read',
    tags: ['Sports', 'Events', 'Community'],
  },
  {
    id: 3,
    title: 'Introducing Our New ICT Lab',
    excerpt: 'Thanks to our partnership with TechEd Africa, we\'ve launched a state-of-the-art computer lab for our students.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Grace Auma',
      role: 'ICT Coordinator',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    date: 'March 10, 2024',
    category: 'School Development',
    readTime: '3 min read',
    tags: ['ICT', 'Technology', 'Facilities'],
  },
  {
    id: 4,
    title: 'Parent-Teacher Conference: Building Stronger Partnerships',
    excerpt: 'Our first term parent-teacher conferences saw record attendance as we discussed student progress and goals.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'David Ochieng',
      role: 'Parent Liaison',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    date: 'March 25, 2024',
    category: 'Parent Engagement',
    readTime: '4 min read',
    tags: ['Parents', 'Conferences', 'Community'],
  },
  {
    id: 5,
    title: 'Environmental Club Plants 100 Trees',
    excerpt: 'Our Environmental Club, in partnership with Kampala City Council, planted 100 trees around the school compound.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Mary Kibuka',
      role: 'Club Patron',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    date: 'April 2, 2024',
    category: 'Clubs & Activities',
    readTime: '3 min read',
    tags: ['Environment', 'Clubs', 'Sustainability'],
  },
  {
    id: 6,
    title: 'Scholarship Opportunities for 2024',
    excerpt: 'We\'re pleased to announce new scholarship opportunities for outstanding students joining Primary 1.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sarah Nakato',
      role: 'Head Teacher',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    date: 'April 15, 2024',
    category: 'Admissions',
    readTime: '4 min read',
    tags: ['Scholarships', 'Admissions', 'Opportunities'],
  },
];

const categories = ['All', 'Academic Achievements', 'Co-curricular', 'School Development', 'Parent Engagement', 'Clubs & Activities', 'Admissions'];
const recentPosts = blogPosts.slice(0, 3);

export default function BlogList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            News & Updates
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Kampala Junior Academy Blog
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and events from our school community.
          </p>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((featuredPost) => (
          <motion.div
            key={featuredPost.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    Featured Story
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-primary-100 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div>
                      <p className="font-semibold">{featuredPost.author.name}</p>
                      <p className="text-sm text-primary-200">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-primary-200">{featuredPost.date}</span>
                    <span className="text-sm text-primary-200">•</span>
                    <span className="text-sm text-primary-200">{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/news/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    Read Full Story
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts Grid - Left Column (2/3) */}
          <div className="lg:col-span-2">
            
            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row gap-6 bg-neutral-50 rounded-2xl p-6 hover:bg-white hover:shadow-card transition-all duration-300">
                    
                    {/* Image */}
                    <div className="md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-primary-600">
                          {post.category}
                        </span>
                        <span className="text-xs text-neutral-400">•</span>
                        <span className="text-sm text-neutral-500">
                          {post.date}
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                        <Link to={`/news/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-neutral-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-medium text-neutral-700">
                            {post.author.name}
                          </span>
                        </div>
                        <Link 
                          to={`/news/${post.id}`}
                          className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1"
                        >
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <nav className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 hover:bg-primary-600 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-xl bg-primary-600 text-white font-semibold">1</button>
                <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 hover:bg-primary-600 hover:text-white transition-colors">2</button>
                <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 hover:bg-primary-600 hover:text-white transition-colors">3</button>
                <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 hover:bg-primary-600 hover:text-white transition-colors">...</button>
                <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 hover:bg-primary-600 hover:text-white transition-colors">8</button>
                <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 hover:bg-primary-600 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </motion.div>
          </div>

          {/* Sidebar - Right Column (1/3) */}
          <div className="lg:col-span-1">
            
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-6 mb-8"
            >
              <h3 className="font-heading text-lg font-bold text-neutral-900 mb-4">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none"
                />
                <svg className="w-5 h-5 text-neutral-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-50 rounded-2xl p-6 mb-8"
            >
              <h3 className="font-heading text-lg font-bold text-neutral-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.slice(1).map((category) => (
                  <li key={category}>
                    <button className="flex items-center justify-between w-full text-left text-neutral-600 hover:text-primary-600 transition-colors">
                      <span>{category}</span>
                      <span className="text-sm bg-white px-2 py-0.5 rounded-full">
                        {blogPosts.filter(p => p.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-50 rounded-2xl p-6 mb-8"
            >
              <h3 className="font-heading text-lg font-bold text-neutral-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/news/${post.id}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-50 rounded-2xl p-6"
            >
              <h3 className="font-heading text-lg font-bold text-neutral-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['PLE', 'Sports', 'Events', 'Admissions', 'ICT', 'Environment', 'Scholarships', 'Parents'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 bg-white text-sm text-neutral-600 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-primary-100 mb-8">
              Get the latest news, events, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}