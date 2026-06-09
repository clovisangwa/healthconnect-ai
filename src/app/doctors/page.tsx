'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DoctorCard from '@/components/DoctorCard';
import { Doctor } from '@/types';

const mockDoctors: Doctor[] = [
  {
    id: '1',
    email: 'dr.smith@healthconnect.com',
    name: 'Dr. James Smith',
    avatar: '👨‍⚕️',
    role: 'doctor',
    specialty: 'General Medicine',
    yearsOfExperience: 10,
    license: 'MD12345',
    verified: true,
    rating: 4.8,
    languages: ['English', 'Spanish'],
    consultationFee: 50,
    bio: 'Experienced general practitioner with a focus on preventive care.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    email: 'dr.patel@healthconnect.com',
    name: 'Dr. Priya Patel',
    avatar: '👩‍⚕️',
    role: 'doctor',
    specialty: 'Cardiology',
    yearsOfExperience: 15,
    license: 'MD54321',
    verified: true,
    rating: 4.9,
    languages: ['English', 'Hindi'],
    consultationFee: 75,
    bio: 'Specialist in heart and cardiovascular diseases.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function DoctorDirectoryPage() {
  const [specialty, setSpecialty] = useState('');
  const [language, setLanguage] = useState('');

  const specialties = ['All', 'General Medicine', 'Cardiology', 'Dermatology', 'Mental Health', 'Pediatrics'];
  const languages = ['All', 'English', 'Spanish', 'Hindi', 'French'];

  const filteredDoctors = mockDoctors.filter((doc) => {
    if (specialty && specialty !== 'All' && doc.specialty !== specialty) return false;
    if (language && language !== 'All' && !doc.languages.includes(language)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Find a Doctor
        </motion.h1>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block font-semibold mb-2">Specialty</label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white"
            >
              {specialties.map((spec) => (
                <option key={spec} value={spec === 'All' ? '' : spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang === 'All' ? '' : lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={() => {
                // Book appointment logic
              }}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">No doctors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
