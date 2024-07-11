import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import HeroSection from '@/components/HeroSection';
import { images } from '@/constants/images';
import WhyStudyAustralia from '@/components/WhyStudyAustralia';
import QuickSteps from '@/components/QuickSteps';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("studyInAustralia");

  return (
    <main className="">
      <HeroSection
        imageSrc={images.AustraliaMain}
        title={t("title")}
        highlightText={t("highlightText")}
        height="h-screen"
      />
      <WhyStudyAustralia />
      <QuickSteps />
    </main>
  );
};


export default IndexPage;
