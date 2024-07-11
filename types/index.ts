import { StaticImageData } from 'next/image';
export interface LocaleLayoutProps {
    children: React.ReactNode;
    params: {
      locale: string;
    };
  }
  export interface HeroSectionProps {
    imageSrc: StaticImageData;
    title: string;
    highlightText: string;
    height: string;
  }
  
  // Types for IndexPage component
  export interface IndexPageProps {
    params: {
      locale: string;
    };
  }
  export interface AccordionItemProps {
    title: string;
    content: string;
  }

  export type Institution = {
    name: string;
    url: string;
  };

  export interface ContentSectionProps {
    title: string;
    highlightText: string;
    content: string;
    imageSrc: StaticImageData;
    backgroundColor?: string;
    textColor?: string;
    reverseLayout?: boolean;
    backgroundImageSrc?: string;
  }

  export interface Step {
    title: string;
    description: string;
  }
  export interface FloatingNavProps {
    className?: string;
    locale: string;
  }
  export interface Slide {
    subtitle: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
  }
  export interface AccordionItemProps {
    title: string;
    content: string;
  }
  export interface InvertedContentSectionProps {
    title: string;
    highlightText: string;
    content: string;
    imageSrc: StaticImageData;
    backgroundImageSrc?: string;
  }

  export interface HeroSectionJobProps {
    imageSrc: StaticImageData;
    title: string;
    highlightText: string;
    height: string;
  }

  export interface Detail {
    title: string;
    content: string;
  }
  
  export interface SubSection {
    subHeading: string;
    details: Detail[];
  }
  
  export interface Section {
    heading: string;
    subSections?: SubSection[];
    listItems?: string[];
    note?: string;
    content?: string;
  }
  
  export interface VisaData {
    title: string;
    description: string;
    sections: Section[];
  }
  
  export interface ReusableMigrationVisaProps {
    data: VisaData;
  }