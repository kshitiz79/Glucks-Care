'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Navigation links array for reuse
  const navLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Business', href: '#' },
    { label: 'Care', href: '#' },
    { label: 'Career', href: '#' },
    { label: 'NewRoom', href: '#' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <>
      <header className="bg-white px-6 md:px-20 py-4 rounded-b-3xl shadow-md transition-all duration-300 w-full z-50 fixed top-0 left-0 right-0 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png" // Ensure this is in the `public/` folder
            alt="Logo"
            width={120}
            height={40}
            priority
            className="cursor-pointer"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0 text-black uppercase">
            {navLinks.map((link, index) => (
              <li key={index} className="cursor-pointer text-lg hover:text-blue-500">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-2/3 max-w-xs h-full bg-white shadow-lg z-50"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <nav className="px-6 py-4">
              <ul className="flex flex-col gap-6 uppercase text-black">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-lg hover:text-blue-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
