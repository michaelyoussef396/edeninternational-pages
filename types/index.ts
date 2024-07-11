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
  