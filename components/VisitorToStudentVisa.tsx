"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import studentImage from '../public/VisitorToStudentVisa.jpg';
import footerBackground from '../public/footer-3.png';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/animations';
import { useTranslations } from 'next-intl';

const VisitorToStudentVisa = () => {
  const t = useTranslations("visitorToStudentVisa");

  const titleControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (titleInView) {
      titleControls.start('visible');
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start('visible');
    }
  }, [imageControls, imageInView]);

  return (
    <div className="relative ">
      <div className="absolute inset-0 z-0">
        <Image
          src={footerBackground}
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative bg-black bg-opacity-80 text-white py-16 z-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={titleRef}
            className="col-span-full text-center p-6"
            initial="hidden"
            animate={titleControls}
            variants={slideInFromTop}
          >
            <h2 className="text-4xl font-bold mb-4">
              {t("title")} <span className="text-red-500">{t("highlight")}</span>
            </h2>
          </motion.div>
          <motion.div
            ref={textRef}
            className="p-6"
            initial="hidden"
            animate={textControls}
            variants={slideInFromLeft}
          >
            <p className="text-lg">
              {t("description")}
            </p>
          </motion.div>
          <motion.div
            ref={imageRef}
            className="p-6"
            initial="hidden"
            animate={imageControls}
            variants={slideInFromRight}
          >
            <Image
              src={studentImage}
              alt="Student Image"
              layout="responsive"
              width={700}
              height={475}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisitorToStudentVisa;
