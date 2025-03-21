
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { 
  Trophy, Share2, BarChart2, ArrowRight,
  CheckCircle, XCircle, Clock, Activity
} from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { categories } from "@/utils/quizData";

interface ResultState {
  score: number;
  totalQuestions: number;
  answers: Array<{
    questionId: string;
    selectedOptionId: string | null;
    isCorrect: boolean;
  }>;
}

const Results = () => {
  const { categoryId, subjectId, quizId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [results, setResults] = useState<ResultState | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    if (location.state) {
      setResults(location.state as ResultState);
      
      if ((location.state as ResultState).score / (location.state as ResultState).totalQuestions >= 0.7) {
        setShowConfetti(true);
      }
    }
  }, [location.state]);
  
  const category = categories.find((c) => c.id === categoryId);
  const subject = category?.subjects.find((s) => s.id === subjectId);
  const quiz = subject?.quizzes.find((q) => q.id === quizId);
  
  if (!results || !quiz) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[70vh]">
          <div className="text-center">
            <div className="text-5xl mb-4">🤔</div>
            <h1 className="text-2xl font-bold mb-2">Results Not Found</h1>
            <p className="text-foreground/70 mb-6">
              We couldn't find the quiz results you're looking for.
            </p>
            <Button onClick={() => navigate("/categories")}>
              Browse Categories
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  const { score, totalQuestions, answers } = results;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 75) return "Great job!";
    if (percentage >= 60) return "Good effort!";
    if (percentage >= 40) return "Keep practicing!";
    return "You'll do better next time!";
  };
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Quiz Results</h1>
          <p className="text-foreground/70">
            {quiz.title} • {subject?.name}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card rounded-2xl overflow-hidden mb-8"
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div>
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-muted fill-none stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      pathLength="100"
                    />
                    <motion.circle
                      className="text-primary fill-none stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      pathLength="100"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 100 - percentage }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{ strokeDasharray: 100 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-3xl font-bold">{percentage}%</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">
                  {getPerformanceMessage()}
                </h2>
                <p className="text-foreground/70 mb-4">
                  You scored {score} out of {totalQuestions} questions correctly.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm font-medium text-green-500">
                      {answers.filter(a => a.isCorrect).length} Correct
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10">
                    <XCircle size={16} className="text-red-500" />
                    <span className="text-sm font-medium text-red-500">
                      {answers.filter(a => !a.isCorrect).length} Incorrect
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10">
                    <Clock size={16} className="text-blue-500" />
                    <span className="text-sm font-medium text-blue-500">
                      {Math.floor(quiz.questions.length * quiz.timePerQuestion / 60)} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass-card rounded-2xl overflow-hidden mb-8"
        >
          <div className="p-6">
            <h3 className="font-medium text-lg mb-6 flex items-center gap-2">
              <Activity size={18} />
              <span>Performance Analysis</span>
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Accuracy</span>
                  <span className="text-sm text-foreground/70">{percentage}%</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Speed</span>
                  <span className="text-sm text-foreground/70">Good</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Subject Mastery</span>
                  <span className="text-sm text-foreground/70">
                    {percentage >= 80 ? "Expert" : percentage >= 60 ? "Intermediate" : "Beginner"}
                  </span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(percentage + 10, 100)}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-amber-500 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-between">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <Button
              variant="outline"
              size="sm"
              icon={<Share2 size={16} />}
            >
              Share Result
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              icon={<BarChart2 size={16} />}
              onClick={() => navigate("/profile")}
            >
              View Stats
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/quiz/${categoryId}/${subjectId}/${quizId}`)}
            >
              Try Again
            </Button>
            
            <Button
              size="sm"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              onClick={() => navigate(`/categories/${categoryId}`)}
            >
              More Quizzes
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
