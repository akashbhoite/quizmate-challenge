
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Quiz } from "@/utils/quizData";

interface QuizCardProps {
  quiz: Quiz;
  subjectId: string;
  categoryId: string;
}

const QuizCard = ({ quiz, subjectId, categoryId }: QuizCardProps) => {
  const { id, title, description, difficulty, questions, timePerQuestion } = quiz;
  
  const difficultyColor = {
    easy: "text-green-500",
    medium: "text-yellow-500",
    hard: "text-red-500"
  };
  
  const totalTime = questions.length * timePerQuestion;
  
  return (
    <Link to={`/quiz/${categoryId}/${subjectId}/${id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="glass-card rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-white/30"
      >
        <div className="p-5">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className={difficultyColor[difficulty]} />
              <span className={cn("text-xs font-medium capitalize", difficultyColor[difficulty])}>
                {difficulty}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock3 size={14} className="text-foreground/70" />
              <span className="text-xs font-medium text-foreground/70">
                {Math.ceil(totalTime / 60)} min
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground/50">
                {questions.length} questions
              </span>
              
              <motion.span
                whileHover={{ x: 3 }}
                className="text-primary text-sm font-medium"
              >
                Start Quiz
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default QuizCard;
