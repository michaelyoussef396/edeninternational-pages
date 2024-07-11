import React from 'react';
import { useTranslations } from 'next-intl';

const AboutVisa: React.FC = () => {
  const t = useTranslations('aboutVisa');

  return (
    <div className="container mx-auto px-4 md:px-20 py-12 text-center md:text-left">
      <h2 className="text-4xl font-bold text-center mb-8">{t('aboutTitle')}</h2>
      <p className="mb-6">{t('aboutDescription1')}</p>
      <p className="mb-6">{t('aboutDescription2')}</p>
      <p className="mb-6">{t('aboutDescription3')}</p>
      <p className="mb-6">{t('aboutDescription4')}</p>
      <p className="mb-6">{t('aboutDescription5')}</p>
      <p className="mb-6">{t('aboutDescription6')}</p>

      <h3 className="text-2xl font-bold mb-4">{t('qualifyTitle')}</h3>
      <p className="mb-6">{t('qualifyDescription')}</p>
      <ul className="list-disc list-inside mb-6 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('qualifyItem1')}</li>
        <li>{t('qualifyItem2')}</li>
        <li>{t('qualifyItem3')}</li>
        <li>{t('qualifyItem4')}</li>
        <li>{t('qualifyItem5')}</li>
        <li>{t('qualifyItem6')}</li>
      </ul>

      <h3 className="text-2xl font-bold mb-4">{t('visaAllowsTitle')}</h3>
      <p className="mb-6">{t('visaAllowsDescription')}</p>
      <ul className="list-disc list-inside mb-6 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('visaAllowsItem1')}</li>
        <li>{t('visaAllowsItem2')}</li>
        <li>{t('visaAllowsItem3')}</li>
        <li>{t('visaAllowsItem4')}</li>
        <li>{t('visaAllowsItem5')}</li>
        <li>{t('visaAllowsItem6')}</li>
        <li>{t('visaAllowsItem7')}</li>
      </ul>
      <p className="mb-6">{t('visaAllowsNote')}</p>

      <h3 className="text-2xl font-bold mb-4">{t('applyTitle')}</h3>
      <p className="mb-6">{t('applyDescription1')}</p>
      <p className="mb-6">{t('applyDescription2')}</p>
      <p className="mb-6">{t('applyDescription3')}</p>
      <ul className="list-disc list-inside mb-6 mx-auto md:mx-0 max-w-xs md:max-w-full">
        <li>{t('applyItem1')}</li>
        <li>{t('applyItem2')}</li>
        <li>{t('applyItem3')}</li>
      </ul>

      <h3 className="text-2xl font-bold mb-4">{t('applyProcessTitle')}</h3>
      <h4 className="text-xl font-bold mb-2">{t('stage1Title')}</h4>
      <p className="mb-6">{t('stage1Description1')}</p>
      <p className="mb-6">{t('stage1Description2')}</p>
      <p className="mb-6">{t('stage1Description3')}</p>
      <p className="mb-6">{t('stage1Note')}</p>

      <h4 className="text-xl font-bold mb-2">{t('stage2Title')}</h4>
      <p className="mb-6">{t('stage2Description1')}</p>
      <p className="mb-6">{t('stage2Description2')}</p>
      <p className="mb-6">{t('stage2Description3')}</p>

      <h4 className="text-xl font-bold mb-2">{t('stage3Title')}</h4>
      <p className="mb-6">{t('stage3Description1')}</p>
      <p className="mb-6">{t('stage3Description2')}</p>
      <p className="mb-6">{t('stage3Description3')}</p>

      <h4 className="text-xl font-bold mb-2">{t('stage4Title')}</h4>
      <p className="mb-6">{t('stage4Description1')}</p>

      <h3 className="text-2xl font-bold mb-4">{t('otherRequirementsTitle')}</h3>
      <h4 className="text-xl font-bold mb-2">{t('healthTitle')}</h4>
      <p className="mb-6">{t('healthDescription')}</p>

      <h4 className="text-xl font-bold mb-2">{t('characterTitle')}</h4>
      <p className="mb-6">{t('characterDescription1')}</p>
      <p className="mb-6">{t('characterDescription2')}</p>

      <h4 className="text-xl font-bold mb-2">{t('locationTitle')}</h4>
      <p className="mb-6">{t('locationDescription')}</p>

      <h4 className="text-xl font-bold mb-2">{t('debtsTitle')}</h4>
      <p className="mb-6">{t('debtsDescription')}</p>

      <h4 className="text-xl font-bold mb-2">{t('visaCancelledTitle')}</h4>
      <p className="mb-6">{t('visaCancelledDescription')}</p>

      <h4 className="text-xl font-bold mb-2">{t('processingTimeTitle')}</h4>
      <p className="mb-6">{t('processingTime')}</p>
      <p className="mb-6">{t('processingTimeNote')}</p>
    </div>
  );
};

export default AboutVisa;
