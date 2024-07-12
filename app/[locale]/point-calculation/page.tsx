import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";

import mainImage from  "@/public/tsiatsios22112022-20.webp";
import HeroSection from '@/components/HeroSection';
import PointCalc from '@/components/PointCalc';


const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('heroSectionJob');

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <PointCalc />
    </main>
  );
};


export default IndexPage;
