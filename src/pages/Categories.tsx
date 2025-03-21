
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Beaker, BookOpen, Landmark, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import { staggerChildren } from "@/utils/animations";
import { categories } from "@/utils/quizData";

// Define the mapping of icon names to Lucide icon components
const categoryIcons = {
  calculator: Calculator,
  beaker: Beaker,
  "book-open": BookOpen,
  landmark: Landmark,
  globe: Globe
};

const Categories = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold mb-2">Academic Categories</h1>
          <p className="text-foreground/70">
            Choose a category to explore subjects and compete in quizzes
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="enter"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((category) => {
            // Make sure the icon exists before passing it
            const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons];
            
            if (!IconComponent) {
              console.error(`Icon "${category.icon}" not found in categoryIcons`);
              return null;
            }
            
            return (
              <CategoryCard 
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                icon={IconComponent}
                color={category.color}
              />
            );
          })}
        </motion.div>
        
        <div className="mt-12 glass-card rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Looking for more?</h3>
              <p className="text-foreground/70">
                We're constantly adding new academic categories and subjects. Check back soon for more content!
              </p>
            </div>
            
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
              >
                Request a Category
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
