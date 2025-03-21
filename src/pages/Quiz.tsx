
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowRight, Clock, CheckCircle2, XCircle, 
  AlertCircle, Trophy
} from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { toast } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { categories, Question, Option } from "@/utils/quizData";

const Quiz = () => {
  const { categoryId, subjectId, quizId } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Array<{ questionId: string, selectedOptionId: string | null, isCorrect: boolean }>>([]);
  
  // Find the current quiz
  const category = categories.find((c) => c.id === categoryId);
  const subject = category?.subjects.find((s) => s.id === subjectId);
  const quiz = subject?.quizzes.find((q) => q.id === quizId);
  
  const questions = quiz?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  // Set up timer
  useEffect(() => {
    if (!currentQuestion || isAnswerRevealed) return;
    
    const time = quiz?.timePerQuestion || 15;
    setTimeLeft(time);
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!selectedOption) {
            handleAnswer(null);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentQuestionIndex, isAnswerRevealed, quiz?.timePerQuestion, selectedOption]);
  
  // Handle quiz not found
  if (!quiz) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[70vh]">
          <div className="text-center">
            <AlertCircle className="mx-auto mb-4 text-primary" size={48} />
            <h1 className="text-2xl font-bold mb-2">Quiz Not Found</h1>
            <p className="text-foreground/70 mb-6">
              We couldn't find the quiz you're looking for.
            </p>
            <Button onClick={() => navigate("/categories")}>
              Browse Categories
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  const handleAnswer = (optionId: string | null) => {
    if (isAnswerRevealed) return;
    
    setSelectedOption(optionId);
    setIsAnswerRevealed(true);
    
    const isCorrect = !!optionId && currentQuestion.options.find((o) => o.id === optionId)?.isCorrect;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Incorrect answer");
    }
    
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        isCorrect: !!isCorrect
      }
    ]);
  };
  
  const goToNextQuestion = () => {
    if (isLastQuestion) {
      navigate(`/results/${categoryId}/${subjectId}/${quizId}`, { 
        state: { 
          score,
          totalQuestions: questions.length,
          answers
        }
      });
      return;
    }
    
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };
  
  const getOptionClasses = (option: Option) => {
    if (!isAnswerRevealed) {
      return selectedOption === option.id
        ? "border-primary/50 bg-primary/10"
        : "border-muted bg-card hover:border-primary/30 hover:bg-primary/5";
    }
    
    if (option.isCorrect) {
      return "border-green-500/50 bg-green-500/10";
    }
    
    if (selectedOption === option.id && !option.isCorrect) {
      return "border-red-500/50 bg-red-500/10";
    }
    
    return "border-muted bg-card opacity-50";
  };
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{quiz.title}</h1>
              <p className="text-foreground/70">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10">
              <Clock size={16} className="text-primary" />
              <span className="font-medium text-primary">
                {timeLeft} sec
              </span>
            </div>
          </div>
          
          <div className="w-full bg-muted h-2 rounded-full mt-6">
            <motion.div
              initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
              animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              className="bg-primary h-2 rounded-full"
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        
        <div className="glass-card rounded-2xl overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-medium mb-8">
                  {currentQuestion.text}
                </h2>
                
                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => !isAnswerRevealed && handleAnswer(option.id)}
                      className={cn(
                        "w-full p-4 rounded-xl border transition-all text-left",
                        getOptionClasses(option)
                      )}
                      whileHover={!isAnswerRevealed ? { scale: 1.01 } : {}}
                      whileTap={!isAnswerRevealed ? { scale: 0.99 } : {}}
                      disabled={isAnswerRevealed}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.text}</span>
                        
                        {isAnswerRevealed && option.isCorrect && (
                          <CheckCircle2 size={20} className="text-green-500" />
                        )}
                        
                        {isAnswerRevealed && selectedOption === option.id && !option.isCorrect && (
                          <XCircle size={20} className="text-red-500" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {isAnswerRevealed && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-4 rounded-xl bg-muted/50"
                  >
                    <h3 className="font-medium mb-2">Explanation</h3>
                    <p className="text-foreground/70 text-sm">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-amber-500" />
            <span className="font-medium">Score: {score}/{questions.length}</span>
          </div>
          
          {isAnswerRevealed && (
            <Button
              onClick={goToNextQuestion}
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              {isLastQuestion ? "See Results" : "Next Question"}
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
