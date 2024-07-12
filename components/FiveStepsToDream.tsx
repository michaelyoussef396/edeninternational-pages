"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import sponserJobsImage from '../public/sponserjobs.jpg'; // Make sure the image is in the public folder

const FiveStepsToDream = () => {
  const t = useTranslations('fiveSteps');

  return (
    <div className="container mx-auto my-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        <span className="text-red-500">{t('highlightText')}</span> {t('title')}
      </h1>
      <p className="text-center mb-8">
        {t('description')}
      </p>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <Image
            src={sponserJobsImage}
            alt="Five Easy Steps"
            layout="responsive"
            style={{ objectFit: 'contain' }}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FiveStepsToDream;
