'use client';

import Image from 'next/image';
import { FaApple, FaEnvelope, FaGlobe, FaGooglePlay } from 'react-icons/fa';
import { AnimatedTooltip } from '../ui/animated-tooltip';
import { motion } from 'framer-motion';

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, delay: 0.39 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.7, type: "spring", stiffness: 80 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1.2 } },
};

const symptomButtonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
  hover: { scale: 1.1, backgroundColor: "#e5e7eb", transition: { duration: 0.3 } },
};

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <motion.section
        className="bg-white flex py-10 flex-col items-center justify-center px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 mt-12">
          <div className="flex-1 text-center md:text-left mt-14">
          <motion.h1
  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800"
  variants={headingVariants}
>
  INNOVATIVE <span className="text-blue-600">MEDICINES</span> <br /> FOR BETTER HEALTH
</motion.h1>



<motion.div
  className="flex gap-4 mt-4 justify-center md:justify-start"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.button
    className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800"
    variants={buttonVariants}
    whileHover="hover"
  >
    <FaGlobe className="text-xl" />
    View Portfolio
  </motion.button>
  <motion.button
    className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800"
    variants={buttonVariants}
    whileHover="hover"
  >
    <FaEnvelope className="text-xl" />
    Get a Quote
  </motion.button>
</motion.div>


            <motion.div
              className="bg-yellow-100 rounded-2xl w-full md:w-2/5 mt-10 p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.p
                className="text-gray-700 text-center"
                variants={textVariants}
              >
                There is a little fatigue, <br /> but in general I feel good <br />
                <span className="text-3xl">😊 😊 😊</span>
              </motion.p>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col gap-6 mt-9">
            <motion.p
              className="text-gray-600"
              variants={textVariants}
            >
              Doctors, medicine, lab tests - all in one service 24/7 availability...
            </motion.p>
            <motion.a
              href="#"
              className="text-blue-600 -mt-4 inline-block hover:underline"
              variants={textVariants}
              whileHover={{ x: 5 }}
            >
              See details →
            </motion.a>

            <motion.div
              className="bg-purple-100 rounded-2xl p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h3
                className="font-semibold text-black"
                variants={textVariants}
              >
                What level of tiredness do you have now?
              </motion.h3>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
             <motion.div
  className="bg-black text-white rounded-3xl p-4 px-10 leading-7 flex items-center gap-2"
  variants={cardVariants}
  whileHover="hover"
>
  <motion.p variants={textVariants}>
    <span>Client Satisfaction</span>
    <br />
    <span className="text-2xl">4.9</span>
    <br />
    <span className="text-yellow-300">★★★★★</span>
    <br />
    <span>Based on 458 reviews</span>
  </motion.p>
</motion.div>

            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-5 right-5 md:bottom-10 md:right-40 p-4"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/medicine.png"
            alt="Hero GIF"
            className="w-36 h-36 object-cover"
          />
        </motion.div>
      </motion.section>

      {/* SECOND SECTION */}
      <motion.section
        className="bg-white flex flex-col md:flex-row px-4 md:px-28 py-10 relative w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="relative bg-purple-100 text-black rounded-2xl w-full md:w-2/6 p-6 flex flex-col"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="absolute bottom-5 right-5 md:bottom-10 md:right-14"
            variants={imageVariants}
          >
            <Image
              src="/images.jpeg"
              width={150}
              height={150}
              className="rounded-2xl"
              alt="Health-related symptoms illustration"
            />
          </motion.div>
          <div className="flex items-center gap-4">
            <div>
              <motion.h3
                className="font-semibold mr-10"
                variants={textVariants}
              >
                What symptoms troubling you today?
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 mb-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Chest pain", "Headache", "Fever", "Cough"].map((symptom, i) => (
                  <motion.button
                    key={i}
                    className="bg-gray-200 py-1 rounded-full text-sm"
                    custom={i}
                    variants={symptomButtonVariants}
                    whileHover="hover"
                  >
                    {symptom}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.section
          className="bg-white flex flex-col md:flex-row relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col p-6">
            <motion.div
              className="flex items-center gap-4"
              variants={cardVariants}
            >
              <AnimatedTooltip items={people} />
            </motion.div>
            <motion.div
              className="text-black rounded-2xl p-4 flex items-center gap-2"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.span
                className="text-2xl font-bold"
                variants={textVariants}
              >
                +100k
              </motion.span>
              <motion.span variants={textVariants}>Happy clients</motion.span>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          className="hidden md:block absolute top-0 right-28 p-4"
          variants={imageVariants}
        >
          <img
            src="./medicine.gif"
            alt="Hero GIF"
            className="w-80 h-80 object-cover"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default HeroSection;