"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate your email API or backend logic here
    alert("Form submitted!");
  };

  return (
    <div className="bg-black text-white min-h-screen py-20 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We&apos;re here for you
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            We&apos;re all personal bankers, fully trained experts with the
            knowledge you&apos;re looking for.
          </p>
         
        </motion.div>

        {/* Row: Contact Form & Additional Info */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 bg-gray-900 p-6 rounded-md shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded bg-gray-800 text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded bg-gray-800 text-white focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="p-3 rounded bg-gray-800 text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="2"
                required
                className="p-3 rounded bg-gray-800 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 bg-gray-900 p-6 rounded-md shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Additional Info</h2>
            <p className="mb-4">
              If you have any questions, feel free to reach us at{" "}
              <span className="font-semibold">contact@example.com</span>.
            </p>
            <p className="mb-4">
              Our main branch is located at:
              <br />
              1234 Example St, City, State 12345
            </p>
            <p className="mb-4">
              We look forward to helping you with any banking needs you might have.
            </p>

            {/* New Cards Below the Existing Text */}
            <div className="flex flex-col md:flex-row gap-4 mt-9">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="w-full md:w-1/2 bg-gray-800 p-4 rounded shadow"
  >
    <h3 className="text-lg font-semibold mb-2">Card One</h3>

    <div className="mt-4">
      <p className="text-sm">
        <span className="font-semibold">Number:</span> (123) 456-7890
      </p>
      <p className="text-sm">
        <span className="font-semibold">Email:</span> email@example.com
      </p>
      <p className="text-sm">
        <span className="font-semibold">Message:</span> This is a sample message for Card One.
      </p>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="w-full md:w-1/2 bg-gray-800 p-4 rounded shadow"
  >
    <h3 className="text-lg font-semibold mb-2">Card Two</h3>
   
    <div className="mt-4">
      <p className="text-sm">
        <span className="font-semibold">Number:</span> (987) 654-3210
      </p>
      <p className="text-sm">
        <span className="font-semibold">Email:</span> another@example.com
      </p>
      <p className="text-sm">
        <span className="font-semibold">Message:</span> This is a sample message for Card Two.
      </p>
    </div>
  </motion.div>
</div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
