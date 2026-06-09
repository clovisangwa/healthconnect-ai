'use client';

import { motion } from 'framer-motion';

export default function HealthArticlesPage() {
  const articles = [
    {
      id: '1',
      title: '10 Tips for a Healthy Heart',
      category: 'Cardiology',
      excerpt: 'Learn essential tips to maintain cardiovascular health and prevent heart disease.',
      image: '❤️',
    },
    {
      id: '2',
      title: 'Nutrition Guide for Beginners',
      category: 'Nutrition',
      excerpt: 'Understanding balanced diet and nutrition fundamentals.',
      image: '🥗',
    },
    {
      id: '3',
      title: 'Mental Health Awareness',
      category: 'Mental Health',
      excerpt: 'Breaking stigma and promoting mental wellness.',
      image: '🧠',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Health Education
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              className="glass bg-white dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-40 bg-gradient-hero flex items-center justify-center text-6xl">
                {article.image}
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-600 font-semibold">{article.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{article.excerpt}</p>
                <button className="text-primary-600 hover:text-primary-700 font-semibold">Read More →</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
