export const topNavAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
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