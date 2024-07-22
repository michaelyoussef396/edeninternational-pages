import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import Hero from "@/components/Hero";
import AboutUs from '@/components/AboutUs';
import VisaCategories from '@/components/VisaCategories';
import CountryList from '@/components/CountryList';
import WorkingProcess from '@/components/WorkingProcess';
import Statistics from '@/components/Statistics';
import ScrollingLogos from '@/components/ScrollingLogos';




const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <main className="">
      <Hero locale={locale || 'en'}/>
      <AboutUs locale={locale || 'en'}/>
      <VisaCategories locale={locale || 'en'} />
      <CountryList />
      <WorkingProcess />
      <Statistics />
      <ScrollingLogos />
    </main>
  );
};
{/* 
      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
    </motion.div>
*/}

export default IndexPage;
