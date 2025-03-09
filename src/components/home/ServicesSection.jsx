'use client';

import { FaStethoscope, FaSearch, FaPills } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.4,
      delayChildren: 1.2,
    }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 170 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.7 }
  },
};

export default function ServicesSection() {
  return (
    <motion.section 
      className="bg-white py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div className="text-center mb-10" variants={cardVariants}>
          <h2 className="text-3xl font-bold">Services we provide</h2>
          <p className="text-gray-600 mt-2">
            Provisional diagnosis, appointment of checkups, treatment plan and meds suggestions
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left (Black) Card — 50% width on md+ */}
          <motion.div 
            className="md:col-span-2 bg-black text-white p-8 rounded-3xl flex flex-col relative h-[27rem] shadow-lg"
            variants={cardVariants}
          >
            <FaStethoscope className="mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Track symptoms</h3>
            <p className="text-white mb-6">
              We provide daily monitoring of changes in your condition to help you
              receive timely advice and treatment recommendations.
            </p>

            {/* GIF in the bottom-right corner */}
            <img
              src="./drugs.png"
              alt="Medical GIF"
              className="absolute bottom-4 right-4 w-40 h-40 object-cover"
            />
          </motion.div>

          {/* Right Card 1 (White) — 25% width on md+ */}
          <motion.div 
            className="bg-white text-black border-black bottom-1 p-8 rounded-3xl shadow-lg relative h-[27rem]"
            variants={cardVariants}
          >
            <FaSearch className="text-gray-700 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Feel better faster</h3>
            <p className="mb-6">
              Get advice, treatment options, and prescriptions more quickly with our
              streamlined process.
            </p>

            {/* GIF in the bottom-right corner */}
            <img
              src="./book.gif"
              alt="Medical GIF"
              className="absolute bottom-4 right-4 w-40 h-40 object-cover"
            />
          </motion.div>

          {/* Right Card 2 (White) — 25% width on md+ */}
          <motion.div 
            className="bg-white text-black p-8 rounded-3xl shadow-lg relative h-[27rem]"
            variants={cardVariants}
          >
            <FaPills className="text-gray-700 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Control of health data</h3>
            <p className="mb-6">
              A full cycle of diagnostics, doctor’s appointments, and medication
              management at your fingertips.
            </p>

            {/* GIF in the bottom-right corner */}
            <img
              src="./coffee-cup.gif"
              alt="Medical GIF"
              className="absolute bottom-4 right-4 w-40 h-40 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
