"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { imageAnimation, textAnimation, listItemAnimation } from '@/utils/animations';
import Button from '@/components/Button';
import { images } from '@/constants/images';


const AboutUs: React.FC = () => {
  const t = useTranslations('aboutUs');

  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: listRef, inView: listInView } = useInView({ triggerOnce: true });

  const imageControls = useAnimation();
  const textControls = useAnimation();
  const listControls = useAnimation();

  if (imageInView) imageControls.start("visible");
  if (textInView) textControls.start("visible");
  if (listInView) listControls.start("visible");

  const listItems = t('listItems').split('|');

  return (
    <section className="relative pt-16 bg-white">
      <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
      <div className="relative max-w-6xl mx-auto p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 relative"
            ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={imageAnimation}
          >
            <Image 
              src={images.about1}
              alt="Person with Suitcase"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left md:pl-8"
            ref={textRef}
            initial="hidden"
            animate={textControls}
            variants={textAnimation}
          >
            <span className="text-xl font-semibold text-red-600 block md:inline">{t('whoWeAre')}</span>
            <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
            <p className="mb-4">{t('description')}</p>
            <motion.ul
              className="list-none text-left md:text-left space-y-2 mx-auto md:mx-0"
              ref={listRef}
              initial="hidden"
              animate={listControls}
            >
              {listItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-base justify-center md:justify-start"
                  variants={listItemAnimation}
                >
                  <Image src={images.tick} alt="Tick" width={20} height={20} className="mr-2" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-4 text-center md:text-left">
              <Button href="/about-us" text={t('buttonText')} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
