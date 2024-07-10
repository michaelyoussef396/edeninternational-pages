import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import Hero from "@/components/Hero";
import AboutUs from '@/components/AboutUs';
import VisaCategories from '@/components/VisaCategories';
import CountryList from '@/components/CountryList';




const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <main className="">
      <Hero />
      <AboutUs />
      <VisaCategories />
      <CountryList />
    </main>
  );
};


export default IndexPage;
