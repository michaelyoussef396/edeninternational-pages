// components/AffiliatedInstitutions.tsx
"use client";
import { useTranslations } from "next-intl";

const AffiliatedInstitutions = () => {
  const t = useTranslations('affiliatedInstitutions');

  return (
    <div className="relative h-56 bg-white flex items-center justify-center"> {/* Adjust the height as needed */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold text-black mb-4 text-center">
          {t('title')} <span className="text-red-500">{t('highlightText')}</span>
        </h1>
        <p className="text-lg text-black text-center max-w-2xl">
          {t('description')}
        </p>
      </div>
    </div>
  )
}

export default AffiliatedInstitutions;
