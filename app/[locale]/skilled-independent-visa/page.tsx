import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import MigrationHeroSection from '@/components/MigrationHeroSection';
import VisaComparison from '@/components/VisaComparison';
import mainImage from '@/public/Prepaid-Cards.webp'
import VisaComponent from '@/components/VisaComponent';


const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('migrationHeroSection2');
  return (

    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title={t('title')}
          highlightText={t('highlightText')}
          height="h-96"
        />
        <VisaComponent />
        <VisaComparison />
    </main>
  );
};


export default IndexPage;
