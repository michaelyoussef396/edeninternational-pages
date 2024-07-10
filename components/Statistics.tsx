"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { scrollReveal } from '@/utils/animations';
import { useTranslations } from 'next-intl';

const Statistics: React.FC = () => {
  const t = useTranslations('statistics');
  
  const statistics = [
    {
      icon: '🌍', // Replace with actual icon if available
      value: '20+',
      description: t('worldwideOfficeHandle'),
    },
    {
      icon: '📄', // Replace with actual icon if available
      value: '15.8k',
      description: t('successfulVisaProcess'),
    },
    {
      icon: '👥', // Replace with actual icon if available
      value: '99%',
      description: t('satisfiedClientsMaintains'),
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getSuffix = (value: string): string => {
    if (value.includes('k')) return 'k';
    if (value.includes('+')) return '+';
    if (value.includes('%')) return '%';
    return '';
  };

  const getNumericValue = (value: string): number => {
    return parseFloat(value.replace(/[^0-9.]/g, ''));
  };

  return (
    <section className="py-16" style={{ backgroundImage: 'url(/shape-8.jpg)' }}>
      <div ref={ref} className="max-w-6xl mx-auto text-center p-6 md:p-12 flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">
        {statistics.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-red-600 text-white p-8 rounded-lg shadow-lg w-full max-w-xs mx-4"
            initial="hidden"
            animate={controls}
            variants={scrollReveal}
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <h4 className="text-3xl font-bold mb-2">
              <CountUp start={0} end={getNumericValue(stat.value)} duration={4} separator="," suffix={getSuffix(stat.value)} />
            </h4>
            <p className="text-lg">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
