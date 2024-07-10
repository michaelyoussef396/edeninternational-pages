import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import Hero from "@/components/Hero";




const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <main className="">
      <Hero />
    </main>
  );
};


export default IndexPage;
