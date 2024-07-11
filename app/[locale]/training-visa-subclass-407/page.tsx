import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import mainImage from '@/public/visual_SERFIN_A.webp';
import MigrationHeroSection from '@/components/MigrationHeroSection';
import TrainingVisaInfo from '@/components/TrainingVisaInfo';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('trainingVisaHero');

  return (
    <main className="">
      <MigrationHeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <TrainingVisaInfo />
    </main>
  );
};


export default IndexPage;
