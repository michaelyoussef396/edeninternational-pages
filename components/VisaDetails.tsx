import React from 'react';
import { useTranslations } from 'next-intl';


const VisaDetails = () => {
  const t = useTranslations('visaDetails');

  return (
    <div className="container mx-auto px-4 py-8 text-center md:text-left">
      <h1 className="text-3xl font-bold mb-4">{t('aboutTitle')}</h1>
      <p className="mb-4">{t('aboutDescription1')}</p>
      <p className="mb-4">{t('aboutDescription2')}</p>
      <p className="mb-4">{t('aboutDescription3')}</p>
      <p className="mb-4">{t('aboutDescription4')}</p>

      <h2 className="text-2xl font-bold mt-8">{t('qualifyTitle')}</h2>
      <p className="mb-4">{t('qualifyDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('qualifyList.0')}</li>
        <li>{t('qualifyList.1')}</li>
        <li>{t('qualifyList.2')}</li>
        <li>{t('qualifyList.3')}</li>
        <li>{t('qualifyList.4')}</li>
        <li>{t('qualifyList.5')}</li>
        <li>{t('qualifyList.6')}</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">{t('visaAllowsTitle')}</h2>
      <p className="mb-4">{t('visaAllowsDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('visaAllowsList.0')}</li>
        <li>{t('visaAllowsList.1')}</li>
        <li>{t('visaAllowsList.2')}</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">{t('durationTitle')}</h2>
      <p className="mb-4">{t('durationDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('durationList.0')}</li>
        <li>{t('durationList.1')}</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">{t('otherRequirementsTitle')}</h2>
      <div>
        <h3 className="text-xl font-bold mt-4">{t('otherRequirementsList.0.title')}</h3>
        <p className="mb-4">{t('otherRequirementsList.0.content')}</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-4">{t('otherRequirementsList.1.title')}</h3>
        <p className="mb-4">{t('otherRequirementsList.1.content')}</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-4">{t('otherRequirementsList.2.title')}</h3>
        <p className="mb-4">{t('otherRequirementsList.2.content')}</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-4">{t('otherRequirementsList.3.title')}</h3>
        <p className="mb-4">{t('otherRequirementsList.3.content')}</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mt-4">{t('otherRequirementsList.4.title')}</h3>
        <p className="mb-4">{t('otherRequirementsList.4.content')}</p>
      </div>

      <h2 className="text-2xl font-bold mt-8">{t('processingTimeTitle')}</h2>
      <p className="mb-4">{t('processingTimeDescription1')}</p>
      <p className="mb-4">{t('processingTimeDescription2')}</p>
    </div>
  );
};

export default VisaDetails;
