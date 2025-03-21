
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, Brain, Trophy, Clock, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Users className="text-blue-500" />,
    title: "Compete with Peers",
    description: "Challenge classmates to knowledge battles across academic subjects."
  },
  {
    icon: <Brain className="text-purple-500" />,
    title: "Build Your Knowledge",
    description: "Expand your understanding with challenging questions and explanations."
  },
  {
    icon: <Trophy className="text-amber-500" />,
    title: "Track Progress",
    description: "Monitor your improvement with detailed statistics and achievement badges."
  }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Layout>
      <div className="space-y-16 py-6">
        <section className="relative">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Knowledge Competition Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Challenge Your Mind,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                  Compete with Peers
                </span>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Test your academic knowledge in head-to-head competitions. Choose your subjects, challenge classmates, and rise to the top.
              </p>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/categories">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto"
                    icon={<Sparkles size={18} />}
                  >
                    Start Competing
                  </Button>
                </Link>
                
                <Link to="/leaderboard">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    View Leaderboard
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-16 relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden p-6 shadow-xl">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6">
                  {/* Quiz Preview Interface */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Mathematics Quiz</h3>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10">
                        <Clock size={16} className="text-primary" />
                        <span className="font-medium text-primary">15 sec</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-muted h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full w-1/3" />
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4 mb-4">
                    <h4 className="text-base font-medium mb-4">
                      What is the value of x in the equation 2x + 5 = 15?
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg border border-primary/50 bg-primary/10 flex justify-between items-center">
                        <span>x = 5</span>
                        <CheckCircle size={18} className="text-green-500" />
                      </div>
                      
                      <div className="p-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-colors">
                        <span>x = 10</span>
                      </div>
                      
                      <div className="p-3 rounded-lg border border-red-500/50 bg-red-500/10 flex justify-between items-center">
                        <span>x = 7</span>
                        <XCircle size={18} className="text-red-500" />
                      </div>
                      
                      <div className="p-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-colors">
                        <span>x = 4</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
                      <span>Next Question</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-foreground/70 mt-2">Simple steps to challenge your academic knowledge</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: 1, title: "Choose a Subject", description: "Browse through multiple academic categories and select your strength area." },
                { number: 2, title: "Start a Challenge", description: "Compete in real-time with classmates or practice solo to improve your skills." },
                { number: 3, title: "Track Progress", description: "View detailed statistics, earn badges, and climb the leaderboard rankings." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-6 relative"
                >
                  <div className={cn(
                    "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center",
                    "bg-primary/10 text-primary font-semibold"
                  )}>
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Features</h2>
              <p className="text-foreground/70 mt-2">Everything you need to excel in academic competitions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
                  <p className="text-foreground/70 mb-6">
                    Join thousands of students competing across various academic subjects. Challenge your friends and improve your skills.
                  </p>
                  
                  <Link to="/categories">
                    <Button icon={<ArrowRight size={18} />} iconPosition="right">
                      Get Started
                    </Button>
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-lg text-foreground/50">Subject Categories Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
