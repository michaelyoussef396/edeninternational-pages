import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import TheAboutUs from '@/components/TheAboutUs';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <main className="">
      <TheAboutUs />
    </main>
  );
};


export default IndexPage;
