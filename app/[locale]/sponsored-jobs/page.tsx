import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import mainImage from "@/public/1001_Team.webp";
import HeroSectionJob from '@/components/HeroSectionJob';
import FiveStepsToDream from '@/components/FiveStepsToDream';

const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('heroSectionJob');

  return (
    <main className="">
      <HeroSectionJob
        imageSrc={mainImage}
        title={t('title')}
        highlightText=""
        height="h-96"
      />
      <FiveStepsToDream />
    </main>
  );
};


export default IndexPage;
