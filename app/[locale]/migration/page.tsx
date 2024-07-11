import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import HeroSection from '@/components/HeroSection';
import ScrollingLogos from '@/components/ScrollingLogos';
import mainImage from '@/public/parallax-abouit-01.webp';
import VisaOptions from '@/components/VisaOptions';
import VisasWeSpecialiseIn from '@/components/VisasWeSpecialiseIn';
import FAQAccordion from '@/components/FAQAccordion';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("migrationHeroSection");

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <VisaOptions />
      <VisasWeSpecialiseIn />
      <FAQAccordion />
      <ScrollingLogos />
    </main>
  );
};


export default IndexPage;
