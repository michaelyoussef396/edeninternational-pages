export interface LocaleLayoutProps {
    children: React.ReactNode;
    params: {
      locale: string;
    };
  }
  
  // Types for IndexPage component
  export interface IndexPageProps {
    params: {
      locale: string;
    };
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
  