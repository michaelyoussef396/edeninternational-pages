"use client";
import Image from 'next/image';
import { useTranslations } from "next-intl";

const QuickSteps = () => {
  const t = useTranslations('quickSteps');

  // Define the type for the description items
  const fileSubmissionDescription: string[] = t.raw('fileSubmission.description') as string[];

  const steps = [
    {
      number: '01',
      title: t('fileSubmission.title'),
      description: (
        <ul className="text-left list-disc list-inside">
          {fileSubmissionDescription.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
      color: 'bg-red-500',
    },
    {
      number: '02',
      title: t('offerLetter.title'),
      description: t('offerLetter.description'),
      color: 'bg-orange-500',
    },
    {
      number: '03',
      title: t('gteAssessment.title'),
      description: t('gteAssessment.description'),
      color: 'bg-green-500',
    },
    {
      number: '04',
      title: t('coeConfirmation.title'),
      description: t('coeConfirmation.description'),
      color: 'bg-blue-500',
    },
    {
      number: '05',
      title: t('visaLodgement.title'),
      description: t('visaLodgement.description'),
      color: 'bg-purple-500',
    },
    {
      number: '06',
      title: t('successfulVisa.title'),
      description: t('successfulVisa.description'),
      color: 'bg-yellow-500', // Changed to a different color
    },
  ];

  return (
    <div className="relative bg-black py-12 px-4 md:px-20">
      <div className="absolute inset-0">
        <Image
          src="/footer-3.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('title')} <span className="text-red-500">{t('highlight')}</span>
        </h1>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${step.color} text-white text-center transform transition duration-300 hover:scale-105`}
          >
            <div className="text-2xl font-bold mb-2">{step.number}</div>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <div className="text-sm">{step.description}</div>
          </div>
        ))}
      </div>
      <div className="relative z-10 flex justify-center mt-8">
        {/* <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
          {t('buttonText')}
        </button>*/}
      </div>
    </div>
  );
};

export default QuickSteps;
