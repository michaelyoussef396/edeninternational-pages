// components/VisasWeSpecialiseIn.tsx
import { FC } from "react";
import { useTranslations } from "next-intl";
import { FaPaperPlane } from "react-icons/fa";
import Image from 'next/image';


const VisasWeSpecialiseIn: FC = () => {
  const t = useTranslations('visaSpecialisations');

  const visaSpecialisations = [
    {
      title: t('temporarySkillShortageVisa.title'),
      subclass: t('temporarySkillShortageVisa.subclass'),
    },
    {
      title: t('trainingVisa.title'),
      subclass: t('trainingVisa.subclass'),
    },
    {
      title: t('skilledIndependentVisa.title'),
      subclass: t('skilledIndependentVisa.subclass'),
    },
    {
      title: t('skilledNominatedVisa.title'),
      subclass: t('skilledNominatedVisa.subclass'),
    },
    {
      title: t('skilledWorkRegionalVisa.title'),
      subclass: t('skilledWorkRegionalVisa.subclass'),
    },
    {
      title: t('sponsoredJobs.title'),
      subclass: t('sponsoredJobs.subclass'),
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8">
          {t('title')} <span className="text-red-500">{t('highlightText')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {visaSpecialisations.map((visa, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <FaPaperPlane className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{visa.title}</h3>
              <p className="text-lg text-gray-600">{visa.subclass}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisasWeSpecialiseIn;
