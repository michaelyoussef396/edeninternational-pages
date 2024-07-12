"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { slideShow, subtitleAnimation, descriptionAnimation, buttonAnimation } from "@/utils/animations";
import Button from "@/components/Button";
import { Slide } from "@/types/index";

interface HeroProps {
  locale: string;
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  const t = useTranslations('hero');
  
  const slides: Slide[] = [
    {
      subtitle: t('slide1.subtitle'),
      description: t('slide1.description'),
      image: t('slide1.image'),
      buttonText: t('slide1.buttonText'),
      buttonLink: "/student-visa"
    },
    {
      subtitle: t('slide2.subtitle'),
      description: t('slide2.description'),
      image: t('slide2.image'),
      buttonText: t('slide2.buttonText'),
      buttonLink: "/migration"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 top-0 pt-20">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideShow}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h2
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={subtitleAnimation}
                    className="text-white text-3xl sm:text-4xl font-semibold mt-4"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={descriptionAnimation}
                    className="text-white text-lg mt-4 max-w-lg"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={buttonAnimation}
                    className="mt-8"
                  >
                    <Button href={slide.buttonLink} text={slide.buttonText} locale={locale} />
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
