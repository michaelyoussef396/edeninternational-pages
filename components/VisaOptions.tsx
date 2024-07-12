// components/VisaOptions.tsx
import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { FaGlobe, FaGraduationCap, FaCog, FaAnchor, FaUserTie, FaGavel } from "react-icons/fa";

const VisaOptions: FC = () => {
  const t = useTranslations('visaOptions');

  const visaOptions = [
    {
      icon: FaGlobe,
      title: t('visitorVisa.title'),
      description: t('visitorVisa.description')
    },
    {
      icon: FaCog,
      title: t('skilledVisa.title'),
      description: t('skilledVisa.description')
    },
    {
      icon: FaAnchor,
      title: t('sponsoredVisa.title'),
      description: t('sponsoredVisa.description')
    },
    {
      icon: FaGraduationCap,
      title: t('studentVisa.title'),
      description: t('studentVisa.description')
    },
    {
      icon: FaUserTie,
      title: t('partnerVisa.title'),
      description: t('partnerVisa.description')
    },
    {
      icon: FaGavel,
      title: t('aatFederalCourt.title'),
      description: t('aatFederalCourt.description')
    }
  ];

  return (
    <section className="relative bg-black py-12">
      <div className="absolute inset-0">
        <Image
          src="/footer-3.png" // Ensure this image is placed in the public folder
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8 text-white">
          {t('title')} <span className="text-red-500">{t('highlightText')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {visaOptions.map((option, index) => (
            <div key={index} className="text-white">
              <option.icon className="text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaOptions;
