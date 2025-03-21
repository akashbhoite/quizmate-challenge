
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

interface LayoutProps extends PropsWithChildren {
  hideNavbar?: boolean;
}

const Layout = ({ children, hideNavbar = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}
      
      <motion.main 
        className="flex-1 pt-0 pb-20 sm:pt-24 sm:pb-6 px-4 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
