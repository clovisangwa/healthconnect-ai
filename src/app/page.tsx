'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaStethoscope, FaCalendar, FaPhone, FaBook, FaShieldAlt } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold gradient-text">HealthConnect AI</div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-primary-600 hover:text-primary-700">Login</button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="py-20 px-6 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
          {...fadeInUp}
        >
          24/7 AI Health Assistant
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Get instant health guidance, connect with verified doctors, and manage your wellness journey
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          variants={fadeInUp}
        >
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold">
            Start Consultation
          </button>
          <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 font-semibold">
            Find a Doctor
          </button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-6 bg-white dark:bg-slate-800 max-w-7xl mx-auto w-full"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
      >
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FaRobot,
              title: 'AI Symptom Checker',
              desc: 'Get instant analysis of your symptoms with AI-powered guidance',
            },
            {
              icon: FaBook,
              title: 'Health Education',
              desc: 'Learn about diseases, medications, and healthy lifestyle',
            },
            {
              icon: FaStethoscope,
              title: 'Verified Doctors',
              desc: 'Connect with qualified healthcare professionals',
            },
            {
              icon: FaPhone,
              title: 'Audio Consultations',
              desc: 'Talk to doctors via secure audio calls',
            },
            {
              icon: FaCalendar,
              title: 'Appointment Booking',
              desc: 'Schedule appointments at your convenience',
            },
            {
              icon: FaShieldAlt,
              title: 'Emergency Alerts',
              desc: 'Get warned about serious symptoms requiring urgent care',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gradient-card glass rounded-2xl hover:shadow-lg transition"
              variants={fadeInUp}
            >
              <feature.icon className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-hero text-white max-w-7xl mx-auto w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-xl">Verified Doctors</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">50K+</div>
            <div className="text-xl">Happy Patients</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">100K+</div>
            <div className="text-xl">Consultations</div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">HealthConnect AI</h4>
            <p className="text-gray-400">Your trusted healthcare partner</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@healthconnect.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HealthConnect AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
