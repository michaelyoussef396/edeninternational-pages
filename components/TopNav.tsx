"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/constants/images';
import { topNavAnimation } from '@/utils/animations';

const TopNav: React.FC = () => {
  return (
    <motion.div
      initial={topNavAnimation.initial}
      animate={topNavAnimation.animate}
      transition={topNavAnimation.transition}
      className="w-full h-auto bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="flex flex-row items-center space-x-2 mb-2 md:mb-0">
        <Image src={images.mail} alt="mail" width={20} height={20} />
        <a href="mailto:info.edeninternational@gmail.com" className="hover:underline">info.edeninternational@gmail.com</a>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <Image src={images.phone} alt="phone" width={20} height={20} />
        <span>+61 452 031 982</span>
      </div>
    </motion.div>
  );
};

export default TopNav;
