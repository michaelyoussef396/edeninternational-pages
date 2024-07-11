import React from 'react';
import { useTranslations } from 'next-intl';

const VisaComponent: React.FC = () => {
  const t = useTranslations('skilledIndependentVisa');

  return (
    <div className="container mx-auto px-4 md:px-20 py-12 text-center md:text-left">
      <div className="mt-8">
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-center mb-8">{t('visaTitle')}</h2>
          <p className="mb-6">{t('visaDescription')}</p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{t('qualifyTitle')}</h3>
          <ul className="list-decimal list-inside mb-6 mx-auto md:mx-0 max-w-xs md:max-w-full">
            <li>{t('qualifyItem1')}</li>
            <li>{t('qualifyItem2')}</li>
            <li>{t('qualifyItem3')}</li>
            <li>{t('qualifyItem4')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{t('visaAllowsTitle')}</h3>
          <ul className="list-disc list-inside mb-6 mx-auto md:mx-0 max-w-xs md:max-w-full">
            <li>{t('visaAllowsItem1')}</li>
            <li>{t('visaAllowsItem2')}</li>
            <li>{t('visaAllowsItem3')}</li>
            <li>{t('visaAllowsItem4')}</li>
            <li>{t('visaAllowsItem5')}</li>
            <li>{t('visaAllowsItem6')}</li>
            <li>{t('visaAllowsItem7')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{t('applyTitle')}</h3>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('stage1Title')}</h4>
            <p className="mb-4">{t('stage1Description')}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('stage2Title')}</h4>
            <p className="mb-4">{t('stage2Description')}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('stage3Title')}</h4>
            <p className="mb-4">{t('stage3Description')}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('stage4Title')}</h4>
            <p className="mb-4">{t('stage4Description')}</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{t('otherRequirementsTitle')}</h3>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('healthTitle')}</h4>
            <p className="mb-4">{t('healthDescription')}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('characterTitle')}</h4>
            <p className="mb-4">{t('characterDescription')}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('locationTitle')}</h4>
            <p className="mb-4">{t('locationDescription')}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('debtsTitle')}</h4>
            <p className="mb-4">{t('debtsDescription')}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">{t('visaCancelledTitle')}</h4>
            <p className="mb-4">{t('visaCancelledDescription')}</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{t('processingTimeTitle')}</h3>
          <p className="mb-4">{t('processingTimeDescription')}</p>
        </section>
      </div>
    </div>
  );
}

export default VisaComponent;
