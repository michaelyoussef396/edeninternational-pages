"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { HeroSectionProps } from '@/types';



const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc, title, highlightText, height }) => {
  return (
    <motion.div
      className={`relative ${height}`}
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <Image
        src={imageSrc}
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center px-4">
        <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-white">
          {title} <span className="text-red-500">{highlightText}</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default HeroSection;
