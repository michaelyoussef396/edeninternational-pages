"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { sectionTitleAnimation, cardAnimation } from '@/utils/animations';
import { images } from '@/constants/images';

const VisaCategories: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });
  const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true });
  const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true });

  const sectionControls = useAnimation();
  const card1Controls = useAnimation();
  const card2Controls = useAnimation();

  if (sectionInView) sectionControls.start("visible");
  if (card1InView) card1Controls.start("visible");
  if (card2InView) card2Controls.start("visible");

  const t = useTranslations('visaCategories');

  return (
    <section className="pt-16 bg-black text-white" ref={sectionRef}>
      <motion.div
        className="max-w-6xl mx-auto p-6 md:p-12"
        initial="hidden"
        animate={sectionControls}
        variants={sectionTitleAnimation}
      >
        <h2 className="text-center text-red-600 mb-4">{t('sectionTitle')}</h2>
        <h3 className="text-center text-3xl font-bold mb-12">{t('sectionSubtitle')}</h3>
      </motion.div>
      <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white text-black p-6 rounded-lg shadow-lg"
          ref={card1Ref}
          initial="hidden"
          animate={card1Controls}
          variants={cardAnimation}
        >
          <div className="relative w-full h-80 bg-white border border-gray-300 rounded-lg overflow-hidden">
            <Image 
              src={images.visa2} // make sure this image path is correct
              alt="Student Visas"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h4 className="text-xl font-semibold mt-4">{t('studentVisa.title')}</h4>
          <p className="mt-2">{t('studentVisa.description')}</p>
            <a href={t('studentVisa.buttonLink')} className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
              {t('studentVisa.buttonText')}
            </a>
        </motion.div>
        <motion.div
          className="bg-white text-black p-6 rounded-lg shadow-lg"
          ref={card2Ref}
          initial="hidden"
          animate={card2Controls}
          variants={cardAnimation}
        >
          <div className="relative w-full h-80 bg-white border border-gray-300 rounded-lg overflow-hidden">
            <Image 
              src={images.visa1} // make sure this image path is correct
              alt="Migration"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h4 className="text-xl font-semibold mt-4">{t('migration.title')}</h4>
          <p className="mt-2">{t('migration.description')}</p>
            <a href={t('migration.buttonLink')} className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
              {t('migration.buttonText')}
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaCategories;
