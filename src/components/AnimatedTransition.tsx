
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface AnimatedTransitionProps extends PropsWithChildren {
  className?: string;
}

const AnimatedTransition = ({ 
  children, 
  className 
}: AnimatedTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTransition;
