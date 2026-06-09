'use client';

import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaEdit } from 'react-icons/fa';

export default function DashboardPage() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024',
    stats: {
      consultations: 5,
      appointments: 2,
      articles: 12,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Dashboard
        </motion.h1>

        {/* Profile Card */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="glass bg-white dark:bg-slate-800 rounded-2xl p-8 col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center text-4xl mb-4">
                  👤
                </div>
                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">Patient Member</p>
              </div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">
                <FaEdit size={20} />
              </button>
            </div>

            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-600" />
                {user.email}
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-600" />
                {user.phone}
              </div>
              <div className="flex items-center gap-3">
                <FaCalendar className="text-primary-600" />
                Joined {user.joinDate}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {[
              { label: 'Consultations', value: user.stats.consultations, icon: '💬' },
              { label: 'Appointments', value: user.stats.appointments, icon: '📅' },
              { label: 'Articles Read', value: user.stats.articles, icon: '📚' },
            ].map((stat, idx) => (
              <div key={idx} className="glass bg-white dark:bg-slate-800 rounded-xl p-4">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a
            href="/chat"
            className="glass bg-gradient-card hover:shadow-lg transition p-6 rounded-2xl"
          >
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-bold mb-2">Chat with AI</h3>
            <p className="text-gray-600 dark:text-gray-300">Get instant health guidance</p>
          </a>

          <a
            href="/doctors"
            className="glass bg-gradient-card hover:shadow-lg transition p-6 rounded-2xl"
          >
            <div className="text-4xl mb-3">👨‍⚕️</div>
            <h3 className="text-xl font-bold mb-2">Book Doctor</h3>
            <p className="text-gray-600 dark:text-gray-300">Schedule with verified doctors</p>
          </a>

          <a
            href="/symptom-checker"
            className="glass bg-gradient-card hover:shadow-lg transition p-6 rounded-2xl"
          >
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-xl font-bold mb-2">Symptom Checker</h3>
            <p className="text-gray-600 dark:text-gray-300">Analyze your symptoms</p>
          </a>

          <a
            href="/articles"
            className="glass bg-gradient-card hover:shadow-lg transition p-6 rounded-2xl"
          >
            <div className="text-4xl mb-3">📖</div>
            <h3 className="text-xl font-bold mb-2">Health Articles</h3>
            <p className="text-gray-600 dark:text-gray-300">Learn about health topics</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
