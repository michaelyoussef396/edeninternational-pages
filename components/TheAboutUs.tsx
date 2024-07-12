// components/TheAboutUs.tsx
'use strict';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';

const TheAboutUs: React.FC = () => {
  const t = useTranslations('aboutUsSection');

  return (
    <section className="relative pt-16 bg-white">
      <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
      <div className="relative max-w-6xl mx-auto p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <span className="text-xl font-semibold text-red-600">{t("title")}</span>
            <h2 className="text-3xl font-bold mb-4">{t("subtitle")}</h2>
            <p className="mb-4">{t("content")}</p>
            <Button href="/contact-us" text={t('buttonText')} />
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full h-auto">
              <Image 
                src="/about.png" // Ensure this path is correct
                alt="About Us"
                width={500} // Adjust the width if needed
                height={500} // Adjust the height if needed
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheAboutUs;
