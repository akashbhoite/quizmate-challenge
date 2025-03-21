import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { categories, Subject } from "@/utils/quizData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState<typeof categories[0] | undefined>(undefined);
  
  useEffect(() => {
    setMounted(true);
    
    // Find the category by ID
    const foundCategory = categories.find((cat) => cat.id === categoryId);
    setCategory(foundCategory);
  }, [categoryId]);
  
  if (!mounted) return null;
  
  if (!category) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/categories">
            <Button>Back to Categories</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/categories" className="inline-flex items-center text-sm text-foreground/70 hover:text-foreground mb-4">
            <ArrowLeft size={16} className="mr-1" />
            Back to Categories
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className={cn(
              "rounded-full p-3 flex items-center justify-center",
              `${category.color}/10`
            )}>
              {/* We would need the icon here, but we'll keep it simple */}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
              <p className="text-foreground/70">{category.description}</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Available Subjects</h2>
          
          {category.subjects.length === 0 ? (
            <div className="glass-card rounded-xl p-6 text-center">
              <p>No subjects available for this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.subjects.map((subject: Subject) => (
                <Link key={subject.id} to={`/categories/${category.id}/${subject.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
                    <p className="text-sm text-foreground/70 mb-4">{subject.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground/50">
                        {subject.quizzes.length} quizzes available
                      </span>
                      <motion.div
                        whileHover={{ x: 3 }}
                        className="text-primary text-sm font-medium"
                      >
                        Start Learning
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default CategoryDetail;
