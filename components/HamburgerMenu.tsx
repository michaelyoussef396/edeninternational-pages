import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HoveredLink, NavHoveredLink } from "@/components/ui/NavBar-Menu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (item: string) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[5001] p-2 text-red-600 rounded-md md:hidden"
      >
        ☰
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] bg-white text-black flex flex-col items-center justify-center space-y-6 overflow-hidden"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-white rounded-md"
            >
              ✕
            </button>
            <NavHoveredLink href="/" onClick={toggleMenu} className="text-red-600">Home</NavHoveredLink>
            <div className="relative">
              <Link href="/student-visa" className="text-black" onClick={toggleMenu}>Student Visa</Link>
              <button
                onClick={() => toggleSubMenu("Student Visa")}
                className="ml-2 text-red-600"
              >
                {activeMenuItem === "Student Visa" ? "▲" : "▼"}
              </button>
              {activeMenuItem === "Student Visa" && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  className="absolute left-full top-0 bg-white shadow-lg p-4 rounded-md overflow-y-auto max-h-64"
                >
                  <div className="flex flex-col space-y-4 text-sm pl-4">
                    <HoveredLink href="/study-in-australia" className="text-red-600" onClick={toggleMenu}>Study In Australia</HoveredLink>
                    <HoveredLink href="/study-in-canada" className="text-red-600" onClick={toggleMenu}>Study In Canada</HoveredLink>
                    <HoveredLink href="/affiliate-institutions" className="text-red-600" onClick={toggleMenu}>Affiliated Institutions</HoveredLink>
                    <HoveredLink href="/Professional-year" className="text-red-600" onClick={toggleMenu}>Professional Year</HoveredLink>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="relative">
              <Link href="/migration" className="text-black" onClick={toggleMenu}>Migration</Link>
              <button
                onClick={() => toggleSubMenu("Migration")}
                className="ml-2 text-red-600"
              >
                {activeMenuItem === "Migration" ? "▲" : "▼"}
              </button>
              {activeMenuItem === "Migration" && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  className="absolute left-full top-0 bg-white shadow-lg p-4 rounded-md overflow-y-auto max-h-64"
                >
                  <div className="flex flex-col space-y-4 text-sm pl-4">
                    <HoveredLink href="/temporary-skill-shortage-TSS-visa-subclass-482" className="text-red-600" onClick={toggleMenu}>Temporary Skilled Shortage TSS Visa Subclass 482 (AUS)</HoveredLink>
                    <HoveredLink href="/training-visa-subclass-407" className="text-red-600" onClick={toggleMenu}>Training Visa Subclass 407</HoveredLink>
                    <HoveredLink href="/skilled-work-regional-visa" className="text-red-600" onClick={toggleMenu}>Skilled Work Regional Visa</HoveredLink>
                    <HoveredLink href="/skilled-nominated-visa" className="text-red-600" onClick={toggleMenu}>Skilled Nominated Visa</HoveredLink>
                    <HoveredLink href="/skilled-independent-visa" className="text-red-600" onClick={toggleMenu}>Skilled Independent Visa</HoveredLink>
                    <HoveredLink href="/temporary-graduate-visa-subclass-485" className="text-red-600" onClick={toggleMenu}>Temporary Graduate Visa</HoveredLink>
                    <HoveredLink href="/sponsored-jobs" className="text-red-600" onClick={toggleMenu}>Sponsored Jobs</HoveredLink>
                    <HoveredLink href="/point-calculation" className="text-red-600" onClick={toggleMenu}>Point Calculation</HoveredLink>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="relative">
              <Link href="/contact-us" className="text-black" onClick={toggleMenu}>Contact Us</Link>
              <button
                onClick={() => toggleSubMenu("Contact Us")}
                className="ml-2 text-red-600"
              >
                {activeMenuItem === "Contact Us" ? "▲" : "▼"}
              </button>
              {activeMenuItem === "Contact Us" && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  className="absolute left-full top-0 bg-white shadow-lg p-4 rounded-md overflow-y-auto max-h-64"
                >
                  <div className="flex flex-col space-y-4 text-sm pl-4">
                    <HoveredLink href="/booking" className="text-red-600" onClick={toggleMenu}>Book an Appointment</HoveredLink>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
