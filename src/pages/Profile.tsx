
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy, Book, History, Settings, Medal, Award, ArrowUpRight
} from "lucide-react";
import Layout from "@/components/Layout";
import ProfileStats from "@/components/ProfileStats";
import { mockUserStats } from "@/utils/quizData";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("stats");

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                JS
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                {mockUserStats.level}
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">John Student</h1>
              <p className="text-foreground/70">Grade 10 • Science Enthusiast</p>
              
              <div className="flex gap-3 mt-3 justify-center md:justify-start">
                <div className="flex items-center gap-1 text-sm text-foreground/70">
                  <Trophy size={14} className="text-amber-500" />
                  <span>{mockUserStats.totalQuizzes} Quizzes</span>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-foreground/70">
                  <Medal size={14} className="text-blue-500" />
                  <span>{mockUserStats.achievements.filter(a => a.earned).length} Achievements</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
              >
                <Settings size={16} />
                <span>Edit Profile</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <Tabs defaultValue="stats" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <Trophy size={16} />
              <span>Statistics</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award size={16} />
              <span>Achievements</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History size={16} />
              <span>History</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats">
            <ProfileStats stats={mockUserStats} />
          </TabsContent>
          
          <TabsContent value="achievements">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="font-medium text-base mb-6">Your Achievements</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockUserStats.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`p-4 rounded-xl border ${achievement.earned ? 'bg-primary/5 border-primary/20' : 'bg-muted/50 border-border'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${achievement.earned ? 'bg-primary/10' : 'bg-muted'}`}>
                          {achievement.icon === 'trophy' && <Trophy size={20} className={achievement.earned ? 'text-primary' : 'text-foreground/30'} />}
                          {achievement.icon === 'calculator' && <Calculator size={20} className={achievement.earned ? 'text-primary' : 'text-foreground/30'} />}
                          {achievement.icon === 'timer' && <Clock size={20} className={achievement.earned ? 'text-primary' : 'text-foreground/30'} />}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">{achievement.name}</h4>
                            {achievement.earned && (
                              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                Earned
                              </span>
                            )}
                          </div>
                          
                          <p className="text-sm text-foreground/70 mt-1">
                            {achievement.description}
                          </p>
                          
                          {achievement.progress !== undefined && (
                            <div className="mt-3">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Progress</span>
                                <span>{achievement.progress}/{achievement.total}</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-1.5">
                                <div 
                                  className="bg-primary h-1.5 rounded-full"
                                  style={{ width: `${(achievement.progress / achievement.total!) * 100}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="font-medium text-base mb-6">Quiz History</h3>
                
                <div className="space-y-4">
                  {mockUserStats.recentResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                    >
                      <div className="bg-primary/10 rounded-full p-3">
                        <Book className="text-primary" size={18} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium">{result.quizTitle}</h4>
                        <p className="text-sm text-foreground/70">
                          {new Date(result.date).toLocaleDateString()} • {Math.floor(result.timeSpent / 60)}:{(result.timeSpent % 60).toString().padStart(2, '0')} min
                        </p>
                      </div>
                      
                      <div className="text-center mr-4">
                        <div className="font-medium">
                          {result.score}/{result.totalQuestions}
                        </div>
                        <div className="text-xs text-foreground/70">
                          {Math.round((result.score / result.totalQuestions) * 100)}%
                        </div>
                      </div>
                      
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <ArrowUpRight size={18} className="text-primary" />
                      </button>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="text-primary text-sm font-medium hover:underline">
                    View All History
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
