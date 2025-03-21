
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { categories, Quiz } from "@/utils/quizData";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SubjectDetail = () => {
  const { categoryId, subjectId } = useParams<{ categoryId: string; subjectId: string }>();
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState<typeof categories[0] | undefined>(undefined);
  const [subject, setSubject] = useState<any>(undefined);
  
  useEffect(() => {
    setMounted(true);
    
    // Find the category and subject
    const foundCategory = categories.find((cat) => cat.id === categoryId);
    setCategory(foundCategory);
    
    if (foundCategory) {
      const foundSubject = foundCategory.subjects.find((sub) => sub.id === subjectId);
      setSubject(foundSubject);
    }
  }, [categoryId, subjectId]);
  
  if (!mounted) return null;
  
  if (!category || !subject) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Subject Not Found</h2>
          <p className="mb-6">The subject you're looking for doesn't exist.</p>
          <Link to="/categories">
            <Button>Back to Categories</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "hard": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to={`/categories/${categoryId}`} className="inline-flex items-center text-sm text-foreground/70 hover:text-foreground mb-4">
            <ArrowLeft size={16} className="mr-1" />
            Back to {category.name}
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">{subject.name}</h1>
            <p className="text-foreground/70">{subject.description}</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Available Quizzes</h2>
          
          {subject.quizzes.length === 0 ? (
            <div className="glass-card rounded-xl p-6 text-center">
              <p>No quizzes available for this subject yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {subject.quizzes.map((quiz: Quiz) => (
                <Link key={quiz.id} to={`/quiz/${categoryId}/${subjectId}/${quiz.id}`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="glass-card rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{quiz.title}</h3>
                      <Badge className={cn("text-white", getDifficultyColor(quiz.difficulty))}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/70 mb-4">{quiz.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground/50">
                        {quiz.questions.length} questions • {quiz.timePerQuestion} sec per question
                      </span>
                      <motion.div
                        whileHover={{ x: 3 }}
                        className="text-primary text-sm font-medium"
                      >
                        Begin Quiz
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

export default SubjectDetail;
