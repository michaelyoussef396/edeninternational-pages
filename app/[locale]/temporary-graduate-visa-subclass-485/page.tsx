import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import mainImage from "@/public/best-reason-to-use-cbd-oil.webp";
import MigrationHeroSection from '@/components/MigrationHeroSection';
import VisaInfo from '@/components/VisaInfo';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('tempTrainingVisa');

  return (
    <main className="">
      <MigrationHeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <VisaInfo />
    </main>
  );
};


export default IndexPage;
