
import { motion } from "framer-motion";
import { Trophy, Star, Book, Clock } from "lucide-react";
import { UserStats } from "@/utils/quizData";

interface ProfileStatsProps {
  stats: UserStats;
}

const ProfileStats = ({ stats }: ProfileStatsProps) => {
  const { totalQuizzes, correctAnswers, incorrectAnswers, winRate, level, exp, expToNextLevel } = stats;
  
  return (
    <div className="space-y-6">
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6">
          <h3 className="font-medium text-base mb-4">Progress Overview</h3>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500/10 rounded-full p-2">
                  <Trophy className="text-blue-500" size={18} />
                </div>
                <span className="text-sm text-foreground/70">Win Rate</span>
              </div>
              <div className="text-2xl font-semibold">{winRate}%</div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-yellow-500/10 rounded-full p-2">
                  <Star className="text-yellow-500" size={18} />
                </div>
                <span className="text-sm text-foreground/70">Level</span>
              </div>
              <div className="text-2xl font-semibold">{level}</div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-500/10 rounded-full p-2">
                  <Book className="text-green-500" size={18} />
                </div>
                <span className="text-sm text-foreground/70">Total Quizzes</span>
              </div>
              <div className="text-2xl font-semibold">{totalQuizzes}</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">XP Progress</span>
                <span className="text-xs text-foreground/70">{exp}/{expToNextLevel}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(exp / expToNextLevel) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Accuracy</span>
                <span className="text-xs text-foreground/70">
                  {Math.round((correctAnswers / (correctAnswers + incorrectAnswers)) * 100)}%
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(correctAnswers / (correctAnswers + incorrectAnswers)) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-green-500 h-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6">
          <h3 className="font-medium text-base mb-4">Recent Activity</h3>
          
          <div className="space-y-4">
            {stats.recentResults.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
              >
                <div className="bg-primary/10 rounded-full p-2.5">
                  <Clock className="text-primary" size={16} />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{result.quizTitle}</h4>
                  <p className="text-xs text-foreground/70">
                    {new Date(result.date).toLocaleDateString()} • {Math.floor(result.timeSpent / 60)}:{(result.timeSpent % 60).toString().padStart(2, '0')}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="font-medium">
                    {result.score}/{result.totalQuestions}
                  </div>
                  <div className="text-xs text-foreground/70">
                    {Math.round((result.score / result.totalQuestions) * 100)}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
