"use client";
import { useTranslations } from "next-intl";

const WhyStudyInCanada = () => {
  const t = useTranslations('whyStudyInCanada');

  return (
    <div className="relative h-96 bg-white flex items-center justify-center"> {/* Adjust the height as needed */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          {t('title')} <span className="text-red-500">{t('highlightText')}</span>
        </h1>
        <p className="text-lg text-black text-center max-w-2xl px-6 md:px-0">
          {t('description.part1')} <span className="text-red-500">{t('description.part2')}</span> {t('description.part3')} <span className="text-red-500">{t('description.part4')}</span> {t('description.part5')} <span className="text-red-500">{t('description.part6')}</span> {t('description.part7')}
        </p>
      </div>
    </div>
  );
};

export default WhyStudyInCanada;
