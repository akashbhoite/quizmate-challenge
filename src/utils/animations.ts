
import { Variants } from "framer-motion";

// Variants for page transitions
export const pageVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 10
  },
  enter: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: { 
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

// Variants for staggered children animations
export const staggerChildren: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Variants for child elements in a staggered animation
export const childVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  enter: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

// Variants for card hover effect
export const cardHoverVariants: Variants = {
  rest: { 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Variants for popup animations
export const popupVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Variants for quiz answer buttons
export const answerButtonVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  selected: {
    scale: 0.98,
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    borderColor: "rgba(59, 130, 246, 0.5)",
    transition: {
      duration: 0.2
    }
  },
  correct: {
    backgroundColor: "rgba(34, 197, 94, 0.2)",
    borderColor: "rgba(34, 197, 94, 0.5)",
    transition: {
      duration: 0.3
    }
  },
  incorrect: {
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    borderColor: "rgba(239, 68, 68, 0.5)",
    transition: {
      duration: 0.3
    }
  }
};

// Animation for list items
export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1]
    }
  })
};
