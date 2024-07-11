"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

const VisaInfo = () => {
  const t = useTranslations('visaInfo');

  return (
    <div className="container mx-auto px-4 py-8 text-center md:text-left">
      <h1 className="text-2xl font-bold mb-4">{t('aboutTitle')}</h1>
      <p className="mb-4">{t('aboutDescription')}</p>

      <h2 className="text-xl font-bold mb-4">{t('qualifyTitle')}</h2>
      <p className="mb-4">{t('qualifyDescription')}</p>
      <ul className="list-disc list-inside mb-4 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('qualifyItem1')}</li>
        <li>{t('qualifyItem2')}</li>
        <li>{t('qualifyItem3')}</li>
        <li>{t('qualifyItem4')}</li>
        <li>{t('qualifyItem5')}</li>
        <li>{t('qualifyItem6')}</li>
        <li>{t('qualifyItem7')}</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">{t('whatThisVisaAllowsTitle')}</h2>
      <p className="mb-4">{t('whatThisVisaAllowsDescription')}</p>
      <ul className="list-disc list-inside mb-4 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('whatThisVisaAllowsItem1')}</li>
        <li>{t('whatThisVisaAllowsItem2')}</li>
        <li>{t('whatThisVisaAllowsItem3')}</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">{t('applyTitle')}</h2>
      <p className="mb-4">{t('applyDescription')}</p>

      <h2 className="text-xl font-bold mb-4">{t('durationConditionsTitle')}</h2>
      <p className="mb-4">{t('durationConditionsDescription')}</p>
      <ul className="list-disc list-inside mb-4 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li><strong>{t('line')}</strong>{t('durationConditionsline')}</li>
        <li><strong>{t('lines')}</strong>{t('durationConditionslines')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-2">{t('stage1Title')}</h3>
      <p className="mb-4">{t('stage1Description')}</p>

      <h3 className="text-lg font-bold mb-2">{t('stage2Title')}</h3>
      <p className="mb-4">{t('stage2Description')}</p>

      <h3 className="text-lg font-bold mb-2">{t('stage3Title')}</h3>
      <p className="mb-4">{t('stage3Description')}</p>

      <h3 className="text-lg font-bold mb-2">{t('stage4Title')}</h3>
      <p className="mb-4">{t('stage4Description')}</p>

      <h2 className="text-xl font-bold mb-4">{t('otherRequirementsTitle')}</h2>
      <h3 className="text-lg font-bold mb-2">{t('healthTitle')}</h3>
      <p className="mb-4">{t('healthDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('characterTitle')}</h3>
      <p className="mb-4">{t('characterDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('locationTitle')}</h3>
      <p className="mb-4">{t('locationDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('debtsTitle')}</h3>
      <p className="mb-4">{t('debtsDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('visaCancelledRefusedTitle')}</h3>
      <p className="mb-4">{t('visaCancelledRefusedDescription')}</p>

      <h2 className="text-xl font-bold mb-4">{t('processingTimeTitle')}</h2>
      <p className="mb-4">{t('processingTimeDescription')}</p>
    </div>
  );
};

export default VisaInfo;
