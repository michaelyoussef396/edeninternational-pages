import { unstable_setRequestLocale } from 'next-intl/server';
import { IndexPageProps } from "@/types";
import { useTranslations } from "next-intl";
import mainImage from '@/public/berlinmed_leistungen_gesundheitssektor.webp';
import MigrationHeroSection from '@/components/MigrationHeroSection';
import ReusableMigrationVisa from '@/components/ReusableMigrationVisa';



const IndexPage: React.FC<IndexPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('temporarySkilledVisaData');

  const temporarySkilledVisaData = {
    title: t('title'),
    description: t('description'),
    sections: [
      {
        heading: t('section1.heading'),
        subSections: [
          {
            subHeading: t('section1.subSections.0.subHeading'),
            details: [
              {
                title: t('section1.subSections.0.details.0.title'),
                content: t('section1.subSections.0.details.0.content')
              },
              {
                title: t('section1.subSections.0.details.1.title'),
                content: t('section1.subSections.0.details.1.content')
              },
              {
                title: t('section1.subSections.0.details.2.title'),
                content: t('section1.subSections.0.details.2.content')
              }
            ]
          }
        ]
      },
      {
        heading: t('section2.heading'),
        listItems: [
          t('section2.listItems.0'),
          t('section2.listItems.1'),
          t('section2.listItems.2'),
          t('section2.listItems.3'),
          t('section2.listItems.4'),
          t('section2.listItems.5'),
          t('section2.listItems.6')
        ],
        note: t('section2.note')
      },
      {
        heading: t('section3.heading'),
        listItems: [
          t('section3.listItems.0'),
          t('section3.listItems.1'),
          t('section3.listItems.2'),
          t('section3.listItems.3'),
          t('section3.listItems.4')
        ]
      },
      {
        heading: t('section4.heading'),
        content: t('section4.content')
      },
      {
        heading: t('section5.heading'),
        content: t('section5.content'),
        listItems: [
          t('section5.listItems.0'),
          t('section5.listItems.1')
        ]
      }
    ]
  };

  return (
    <main className="">
      <MigrationHeroSection
        imageSrc={mainImage}
        title={t('hero.title')}
        highlightText={t('hero.highlightText')}
        height="h-96"
      />
      <ReusableMigrationVisa data={temporarySkilledVisaData} />
    </main>
  );
};


export default IndexPage;
