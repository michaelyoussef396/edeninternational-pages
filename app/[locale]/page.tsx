import Image from "next/image";
import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";




const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <main>
      {/* Your content here */}
    </main>
  );
};


export default IndexPage;
