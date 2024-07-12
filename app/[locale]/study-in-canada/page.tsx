import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import HeroSection from '@/components/HeroSection';
import { images } from '@/constants/images';
import QuickSteps from '@/components/QuickSteps';
import AccordionCanada from '@/components/AccordionCanada';
import ScrollingLogos from '@/components/ScrollingLogos';
import WhyStudyInCanada from '@/components/WhyStudyInCanada';




const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("accordionCanada");
  const studyInCanadaItems = t.raw('items');

  return (
    <main className="">
      <HeroSection
        imageSrc={images.main3}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <WhyStudyInCanada />
      <QuickSteps />
      <AccordionCanada locale={locale || 'en'} items ={studyInCanadaItems} />
      <ScrollingLogos />
    </main>
  );
};


export default IndexPage;
