export const topNavAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };
  export const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };
  export const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };
  
  export const floatingNavAnimation = {
    initial: {
      opacity: 1,
      y: -100,
    },
    animate: (visible: boolean) => ({
      y: visible ? 0 : -100,
      opacity: visible ? 1 : 0,
    }),
    transition: {
      duration: 0.2,
    },
  };

  export const slideShow = {
    initial: { opacity: 0, scale: 1.1, transition: { duration: 1 } },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 1 } },
  };
  
  export const subtitleAnimation = {
    initial: { x: -50, opacity: 0, transition: { duration: 0.5, delay: 0.7 } },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.5, delay: 0.7 } },
  };
  
  export const descriptionAnimation = {
    initial: { x: 50, opacity: 0, transition: { duration: 0.5, delay: 0.9 } },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9 } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.5, delay: 0.9 } },
  };
  
  export const buttonAnimation = {
    initial: { y: 50, opacity: 0, transition: { duration: 0.5, delay: 1.1 } },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.1 } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.5, delay: 1.1 } },
  };

  export const imageAnimation = {
    hidden: { opacity: 0, scale: 1.1, x: -50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  };
  
  export const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };
  
  export const listItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  export const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  
  export const sectionTitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  export const sectionTitleAnimationCountry = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  export const listFromLeftAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  
  export const imageFromRightAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  export const textAnimationWork = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  export const circleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };