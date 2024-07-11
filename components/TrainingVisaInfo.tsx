"use client";
import { useTranslations } from 'next-intl';
import React from 'react';


const TrainingVisaHero = () => {
  const t = useTranslations('trainingVisa');

  return (
    <div className="container mx-auto py-12 px-4 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4">{t('aboutTitle')}</h1>
      <p className="mb-8">{t('aboutDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('qualifyTitle')}</h2>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('qualifyPoint1')}</li>
        <li>{t('qualifyPoint2')}</li>
        <li>{t('qualifyPoint3')}</li>
        <li>{t('qualifyPoint4')}</li>
        <li>{t('qualifyPoint5')}</li>
        <li>{t('qualifyPoint6')}</li>
        <li>{t('qualifyPoint7')}</li>
        <li>{t('qualifyPoint8')}</li>
        <li>{t('qualifyPoint9')}</li>
        <li>{t('qualifyPoint10')}</li>
        <li>{t('qualifyPoint11')}</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">{t('applyTitle')}</h2>
      <p className="mb-8">{t('applyDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('allowTitle')}</h2>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('allowPoint1')}</li>
        <li>{t('allowPoint2')}</li>
        <li>{t('allowPoint3')}</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">{t('conditionTitle')}</h2>
      <p className="mb-8">{t('conditionDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('workConditionTitle')}</h2>
      <p className="mb-8">{t('workConditionDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('healthInsuranceTitle')}</h2>
      <p className="mb-8">{t('healthInsuranceDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('locationTitle')}</h2>
      <p className="mb-8">{t('locationDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('familyMembersTitle')}</h2>
      <p className="mb-8">{t('familyMembersDescription')}</p>
    </div>
  );
};

export default TrainingVisaHero;
