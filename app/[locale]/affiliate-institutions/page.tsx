import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import HeroSection from '@/components/HeroSection';
import { images } from '@/constants/images';
import ScrollingLogos from '@/components/ScrollingLogos';
import AffiliatedInstitutions from '@/components/AffiliatedInstitutions';
import Affiliated from '@/components/Affiliated';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('heroSection');

  return (
    <main className="">
      <HeroSection
        imageSrc={images.image2}
        title={t('firstTitle')}
        highlightText={t('firstHighlightText')}
        height="h-96"
      />
      <AffiliatedInstitutions />
      <HeroSection
        imageSrc={images.image}
        title={t('secondTitle')}
        highlightText={t('secondHighlightText')}
        height="h-36"
      />
      <Affiliated />
      <ScrollingLogos />
    </main>
  );
};


export default IndexPage;
