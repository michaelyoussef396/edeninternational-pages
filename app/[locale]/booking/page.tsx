import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import mainImage from '@/public/f200968a6e72.webp'
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import CalendlyWrapper from '@/components/CalendlyWrapper';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('heroSectionCon');
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title={t('contactUsTitle')}
      highlightText={t('contactUsHighlightText')}
      height="h-96"
      />
        <CalendlyWrapper />
    </main>
  );
};


export default IndexPage;
