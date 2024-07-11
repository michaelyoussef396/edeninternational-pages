import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import mainImage from '@/public/visual_SERFIN_A.webp';
import MigrationHeroSection from '@/components/MigrationHeroSection';
import VisaComparison from '@/components/VisaComparison';
import AboutVisa from '@/components/AboutVisa';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('skilledMigrationHeroSection');

  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title={t('skilledNominatedVisaTitle')}
          highlightText={t('subclass190')}
          height="h-96"
        />
        <AboutVisa />
        <VisaComparison />
    </main>
  );
};


export default IndexPage;
