import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import HeroSection from '@/components/HeroSection';
import { images } from '@/constants/images';
import ShoreServices from '@/components/ShoreServices';
import VisitorToStudentVisa from '@/components/VisitorToStudentVisa';
import { StudentTestimonials } from '@/components/StudentTestimonials';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("heroSectionStudent");

  return (
    <main className="">
      <HeroSection
        imageSrc={images.mainImage}
        title={t("title")}
        highlightText={t("highlightText")}
        height="h-screen"
      />
      <ShoreServices />
      <VisitorToStudentVisa />
      <StudentTestimonials />
    </main>
  );
};


export default IndexPage;
