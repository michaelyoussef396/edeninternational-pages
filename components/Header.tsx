"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LocaleSwitcher from './LocaleSwitcher';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebookSquare, FaTiktok } from 'react-icons/fa';
import { images } from '@/constants/images';
import { headerAnimation } from '@/utils/animations';

const Header = () => {
  return (
    <motion.nav
      initial={headerAnimation.initial}
      animate={headerAnimation.animate}
      transition={headerAnimation.transition}
      className="flex items-center justify-between px-4 sm:px-8 bg-diagonal-split h-20 sm:h-auto" // Set height for small devices and auto for larger devices
    >
      <div className="flex-1 hidden sm:block"> {/* Hide on small devices */}
        <a href="/">
          <Image src={images.logo} alt="eden international" width={300} height={250} className="block p-8" />
        </a>
      </div>
      <div className="flex justify-between w-full sm:w-auto items-center">
        <div className="flex space-x-2 sm:space-x-4 ml-2 sm:ml-0"> {/* Adjusted spacing and alignment */}
          <a
            href="https://www.facebook.com/profile.php?id=61561459479275"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-500"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://www.instagram.com/eden.internationall/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-500"
          >
            <CiInstagram size={30} />
          </a>
          <a
            href="https://www.tiktok.com/@eden.internationall"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-500"
          >
            <FaTiktok size={30} />
          </a>
        </div>
        <div className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 mr-2"> {/* Adjusted alignment with a gap on medium and large devices */}
          <LocaleSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
