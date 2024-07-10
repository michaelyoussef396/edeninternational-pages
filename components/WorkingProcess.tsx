"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { circleAnimation, textAnimationWork } from '@/utils/animations';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import { images } from '@/constants/images';

const WorkingProcess: React.FC = () => {
  const t = useTranslations('workingProcess');

  const steps = [
    {
      step: 1,
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      icon: "📈"
    },
    {
      step: 2,
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      icon: "💼"
    },
    {
      step: 3,
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      icon: "🚀"
    },
  ];

  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  const sectionControls = useAnimation();

  if (sectionInView) sectionControls.start("visible");

  const icons = [faCheckCircle, faUser, faClock];

  return (
    <section className="relative py-16 bg-gray-100" ref={sectionRef}>
      <div className="absolute inset-x-0 bottom-0 top-1/2 z-0">
        <Image 
          src={images.shape8}
          alt="Background Shape"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
      </div>
      <motion.div
        className="relative max-w-6xl mx-auto text-center p-6 md:p-12 z-10"
        initial="hidden"
        animate={sectionControls}
        variants={circleAnimation}
      >
        <h3 className="text-red-600 text-sm mb-2">{t('subtitle')}</h3>
        <h2 className="text-2xl font-medium mb-12">{t('title')}</h2>
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial="hidden"
              animate={sectionControls}
              variants={circleAnimation}
            >
              <div className="relative bg-white p-8 rounded-full shadow-lg w-56 h-56 flex flex-col items-center justify-center">
                <div className="text-4xl text-red-600 mb-4">
                  <FontAwesomeIcon icon={icons[index]} />
                </div>
                <div className="absolute top-[-2rem] right-[-2rem] w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  <span>{step.step}</span>
                </div>
                <motion.div
                  className="text-center flex flex-col items-center mt-2"
                  initial="hidden"
                  animate={sectionControls}
                  variants={textAnimationWork}
                >
                  <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-[-2rem] transform -translate-y-1/2 text-red-600 text-2xl">
                  <span>→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkingProcess;
