
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiTrendingUp,
  FiCheckCircle,
  FiLightbulb,
  FiUsers,
  FiShield,
  FiGlobe
} from 'react-icons/fi';
import { MdLightbulbOutline } from 'react-icons/md';
export default function CoreValues() {
  // Data for the 6 cards
  const values = [
    {
      title: 'Entrepreneurial Mindset',
      icon: <FiTrendingUp className="text-3xl text-indigo-600 mb-4" />,
      description:
        'Entrepreneurial mindset encompasses initiative, agility, and optimism, encouraging all individuals to think and act like entrepreneurs through proactive problem-solving, calculated risk-taking, and a drive for continuous improvement.'
    },
    {
      title: 'Quality',
      icon: <FiCheckCircle className="text-3xl text-indigo-600 mb-4" />,
      description:
        'Quality represents a dedication to reliability and excellence in all company operations, products, and services. It involves consistently exceeding customer expectations and regulatory standards through continuous improvement and attention to detail.'
    },
    {
      title: 'Innovation',
      icon: <MdLightbulbOutline className="text-3xl text-indigo-600 mb-4" />,
      description:
        'Innovation at every step of the value chain keeps an organization competitive and successful...',
    },
    {
      title: 'Teamwork',
      icon: <FiUsers className="text-3xl text-indigo-600 mb-4" />,
      description:
        'Teamwork emphasizes collaboration, communication, and collective effort towards shared goals. It fosters strength and cohesion through accountability and partnership, ensuring organizational unity and inclusivity.'
    },
    {
      title: 'Integrity',
      icon: <FiShield className="text-3xl text-indigo-600 mb-4" />,
      description:
        'Integrity involves adhering to moral and ethical principles. It entails being honest, transparent, consistent, and committed to doing what is right in behavior and transactions, even in challenging situations.'
    },
    // Extra value from our side
    {
      title: 'Sustainability',
      icon: <FiGlobe className="text-3xl text-indigo-600 mb-4" />,
      description:
        'Sustainability ensures a responsible and future-oriented approach. It focuses on minimizing environmental impact, optimizing resources, and creating long-term value for communities, employees, and stakeholders.'
    }
  ];

  return (
    <section className="py-20  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
