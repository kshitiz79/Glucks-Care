'use client';

import { motion } from 'framer-motion';
import { FaPills, FaFlask, FaIndustry, FaGlobe } from 'react-icons/fa';

const stats = [
  {
    title: '350+',
    description: 'brands in India (As of September 30, 2023)',
    icon: <FaPills className="text-4xl text-white" />,
  },
  {
    title: '5',
    description: 'R&D Centers (As of September 30, 2023)',
    icon: <FaFlask className="text-4xl text-white" />,
  },
  {
    title: '13',
    description: 'manufacturing facilities (As of September 30, 2023)',
    icon: <FaIndustry className="text-4xl text-white" />,
  },
  {
    title: '70+',
    description: 'Countries (As of September 30, 2023)',
    icon: <FaGlobe className="text-4xl text-white" />,
  },
];

export default function CompanyOverview() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-44 ">
        
        {/* Left Section: Text Inside a Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg h-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            About Emcure Pharmaceuticals
          </h2>
          <p className="text-gray-600 text-lg">
            Emcure Pharmaceuticals is driven by the purpose to develop, manufacture, 
            and market a broad range of pharmaceutical products globally. Our core strength 
            and competitive advantage lie in our established presence in all major therapeutic 
            areas including Gynaecology, Cardiology, Blood-related, Oncology, Respiratory, CNS, & HIV.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Emcure has launched <strong>6 Biologics</strong> in the domestic and RoW markets and is 
            a domestic leader in <strong>three biologics</strong>.
            Emcure has launched <strong>6 Biologics</strong> in the domestic and RoW markets and is 
        
    

          </p>
        </motion.div>

        {/* Right Section: Icons & Stats Inside Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-red-500 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
