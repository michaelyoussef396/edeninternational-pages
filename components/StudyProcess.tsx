"use client";
import { FC } from "react";
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { Step } from "@/types";



const StudyProcess: FC = () => {
  const t = useTranslations('studyProcess');

  const steps = t.raw('steps') as Step[];

  return (
    <section className="relative bg-black text-white py-12">
      <div className="absolute inset-0">
        <Image
          src="/shape-7.jpg" // Ensure this image is placed in the public folder
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-20 text-center">
        <h2 className="text-5xl font-bold mb-12">
          {t('title')} <span className="text-red-500">{t('highlight')}</span>
        </h2>
        {steps.map((step: Step, index: number) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold mb-4 underline">{step.title}</h3>
            <p className="text-lg leading-relaxed">
              {step.description.split(" ").map((word: string, i: number) => {
                const isRed = ["AUD", "$50,000", "(Fifty", "thousand)", "interview", "session", "COE", "visa"].includes(word);
                return (
                  <span key={i} className={isRed ? "text-red-500" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default StudyProcess;
