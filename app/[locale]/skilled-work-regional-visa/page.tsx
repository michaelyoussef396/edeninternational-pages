import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import mainImage from '@/public/ACS.webp'
import MigrationHeroSection from '@/components/MigrationHeroSection';
import VisaDetails from '@/components/VisaDetails';
import VisaComparison from '@/components/VisaComparison';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('skilledWorkRegionalVisaHero');
  return (
    <main className="">
      <MigrationHeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <VisaDetails />
      <VisaComparison />
    </main>
  );
};


export default IndexPage;
