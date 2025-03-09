'use client';

import { FaUserMd, FaMedkit, FaFlask, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Data for the cards
const cards = [
  {
    id: 1,
    title: "Trusted Expertise",
    description: "GlucksCare has been delivering innovative healthcare solutions for years.",
    icon: <FaUserMd className="text-6xl text-blue-600" />,
  },
  {
    id: 2,
    title: "Quality Medicines",
    description: "Our commitment to quality ensures that our medicines are safe and effective.",
    icon: <FaMedkit className="text-6xl text-blue-600" />,
  },
  {
    id: 3,
    title: "Innovative Research",
    description: "We invest in research to develop groundbreaking treatments.",
    icon: <FaFlask className="text-6xl text-blue-600" />,
  },
  {
    id: 4,
    title: "Patient-Centered Care",
    description: "Our focus is on delivering personalized care that truly matters.",
    icon: <FaHeartbeat className="text-6xl text-blue-600" />,
  },
];

// Animation variants for the heading
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for the subheading
const subheadingVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
};

// Animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
  }),
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
};

// Animation variants for the icons
const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
  hover: { rotate: 10, transition: { duration: 0.3 } },
};

const ChooseUs = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with animation */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-2"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        {/* Subheading with animation */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Exceptional care, trusted solutions, innovative health.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-5 py-8"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Animated Icon */}
              <motion.div
                className="mb-4"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                {card.icon}
              </motion.div>

              {/* Card Title */}
              <motion.h3
                className="text-xl font-semibold mb-2 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {card.title}
              </motion.h3>

              {/* Card Description */}
              <motion.p
                className="text-gray-700 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;