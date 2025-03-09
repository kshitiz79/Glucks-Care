'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaStar, FaUsers, FaAtom, FaFlask } from 'react-icons/fa';

const cardData = [
  {
    title: 'Incorporated in the',
    highlight: 'Early 80s',
    icon: <FaRocket className="text-4xl text-white" />,
  },
  {
    title: 'Among',
    highlight: 'Top 13 largest pharma companies in India',
    icon: <FaStar className="text-4xl text-white " />,
  },
  {
    title: 'Robust workforce of over',
    highlight: '10,000 employees',
    icon: <FaUsers className="text-4xl text-white" />,
  },
  {
    title: 'Managing Director and CEO',
    highlight: 'Satish Ramanlal Mehta',
    icon: <FaAtom className="text-4xl text-white" />,
  },
  {
    title: 'Leader in Pharma Research',
    highlight: 'Over 500 patents filed globally',
    icon: <FaFlask className="text-4xl text-white" />,
  },
];

export default function MarqueeCards() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">
      <h2 className=" text-3xl font-bold text-center mb-6 text-black">Company at a Glance</h2>

      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex space-x-6 py-9"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        >
          {/* Duplicate cardData to create seamless infinite loop */}
          {[...cardData, ...cardData].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg  shadow-lg p-6 text-center flex flex-col items-center"
            >
              <div className="bg-pink-700 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                {item.icon}
              </div>
              <p className="text-gray-600">{item.title}</p>
              <p className="text-black font-semibold">{item.highlight}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
