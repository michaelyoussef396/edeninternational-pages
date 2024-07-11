import { FC } from "react";
import { useTranslations } from "next-intl";

const WhyStudyAustralia: FC = () => {
  const t = useTranslations('whyStudyAustralia');

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-8 md:px-20 text-center">
        <h2 className="text-2xl font-bold uppercase mb-4">
          {t('educationIsYourRight')}
        </h2>
        <h1 className="text-6xl font-bold mb-8">
          {t('whyStudyIn')} <span className="text-red-500">{t('australia')}</span>?
        </h1>
        <p className="text-lg mx-auto max-w-4xl">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default WhyStudyAustralia;
