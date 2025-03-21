
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Users, Sparkles, Brain, Trophy, Clock, CheckCircle, XCircle, Rocket, Target, Award, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { 
  staggerChildren, 
  childVariants, 
  popupVariants 
} from "@/utils/animations";

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

// Floating animation for decorative elements
const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Pulse animation for highlighting elements
const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showTargets, setShowTargets] = useState(false);
  const controls = useAnimation();
  
  // Trigger animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start("visible");
        setShowTargets(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  
  return (
    <Layout>
      <div className="space-y-16 py-6 relative">
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute top-10 right-10 text-primary opacity-70 z-10"
          animate={floatingAnimation}
        >
          <Rocket size={24} />
        </motion.div>
        
        <motion.div 
          className="absolute top-40 left-10 text-purple-500 opacity-70 z-10"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        >
          <Sparkles size={20} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20 text-amber-500 opacity-70 z-10"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 0.5 }
          }}
        >
          <Award size={22} />
        </motion.div>
        
        <section className="relative">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10">
            <motion.div 
              className="w-full h-full"
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10">
            <motion.div 
              className="w-full h-full"
              animate={{
                scale: [1, 1.3, 1],
                transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            />
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.div 
                className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4"
                animate={pulseAnimation}
              >
                Knowledge Competition Platform
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Challenge Your Mind,{" "}
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Compete with Peers
                </motion.span>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Test your academic knowledge in head-to-head competitions. Choose your subjects, challenge classmates, and rise to the top.
              </p>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/categories">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto"
                      icon={<Sparkles size={18} />}
                    >
                      Start Competing
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/leaderboard">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      View Leaderboard
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-16 relative"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="glass-card rounded-2xl overflow-hidden p-6 shadow-xl"
                animate={pulseAnimation}
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6">
                  {/* Quiz Preview Interface */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Mathematics Quiz</h3>
                      <motion.div 
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10"
                        animate={{
                          backgroundColor: ["rgba(59, 130, 246, 0.1)", "rgba(124, 58, 237, 0.1)", "rgba(59, 130, 246, 0.1)"],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Clock size={16} className="text-primary" />
                        <span className="font-medium text-primary">15 sec</span>
                      </motion.div>
                    </div>
                    
                    <div className="w-full bg-muted h-2 rounded-full">
                      <motion.div 
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: "10%" }}
                        animate={{ width: "33%" }}
                        transition={{ 
                          duration: 1.5, 
                          ease: "easeOut",
                          delay: 1
                        }}
                      />
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-card border border-border rounded-lg p-4 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <h4 className="text-base font-medium mb-4">
                      What is the value of x in the equation 2x + 5 = 15?
                    </h4>
                    
                    <div className="space-y-3">
                      <motion.div 
                        className="p-3 rounded-lg border border-primary/50 bg-primary/10 flex justify-between items-center"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span>x = 5</span>
                        <CheckCircle size={18} className="text-green-500" />
                      </motion.div>
                      
                      <motion.div 
                        className="p-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-colors"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span>x = 10</span>
                      </motion.div>
                      
                      <motion.div 
                        className="p-3 rounded-lg border border-red-500/50 bg-red-500/10 flex justify-between items-center"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span>x = 7</span>
                        <XCircle size={18} className="text-red-500" />
                      </motion.div>
                      
                      <motion.div 
                        className="p-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-colors"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span>x = 4</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-end"
                    animate={pulseAnimation}
                  >
                    <motion.button 
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Next Question</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section>
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-foreground/70 mt-2">Simple steps to challenge your academic knowledge</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: 1, title: "Choose a Subject", description: "Browse through multiple academic categories and select your strength area." },
                { number: 2, title: "Start a Challenge", description: "Compete in real-time with classmates or practice solo to improve your skills." },
                { number: 3, title: "Track Progress", description: "View detailed statistics, earn badges, and climb the leaderboard rankings." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        delay: index * 0.2,
                        duration: 0.5 
                      }
                    }
                  }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="glass-card rounded-xl p-6 relative"
                >
                  <motion.div 
                    className={cn(
                      "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center",
                      "bg-primary/10 text-primary font-semibold"
                    )}
                    animate={pulseAnimation}
                  >
                    {step.number}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Animated path connecting the steps */}
            {showTargets && (
              <>
                <motion.div 
                  className="hidden md:block absolute left-1/4 top-[1350px] text-amber-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Target size={24} />
                </motion.div>
                <motion.div 
                  className="hidden md:block absolute right-1/4 top-[1350px] text-amber-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Target size={24} />
                </motion.div>
              </>
            )}
          </div>
        </section>
        
        <section>
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold">Features</h2>
              <p className="text-foreground/70 mt-2">Everything you need to excel in academic competitions</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="enter"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={childVariants}
                  whileHover={{ 
                    y: -5, 
                    transition: { duration: 0.2 },
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-4"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                      transition: { 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="relative overflow-hidden">
          <motion.div 
            className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, 20, 0],
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -20, 0],
              y: [0, -20, 0],
              transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div 
              className="glass-card rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    variants={popupVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    Ready to Test Your Knowledge?
                  </motion.h2>
                  <motion.p 
                    className="text-foreground/70 mb-6"
                    variants={popupVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    Join thousands of students competing across various academic subjects. Challenge your friends and improve your skills.
                  </motion.p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/categories">
                      <Button icon={<ArrowRight size={18} />} iconPosition="right">
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                </div>
                
                <div className="relative">
                  <motion.div 
                    className="aspect-square bg-gradient-to-br from-primary/20 via-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      repeatType: 'reverse',
                      ease: "linear"
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div 
                        className="absolute"
                        animate={floatingAnimation}
                      >
                        <Trophy size={40} className="text-amber-500 opacity-80" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -translate-x-16 -translate-y-16"
                        animate={{
                          ...floatingAnimation,
                          transition: { ...floatingAnimation.transition, delay: 0.5 }
                        }}
                      >
                        <Sparkles size={24} className="text-blue-500 opacity-80" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute translate-x-16 translate-y-16"
                        animate={{
                          ...floatingAnimation,
                          transition: { ...floatingAnimation.transition, delay: 1 }
                        }}
                      >
                        <Bookmark size={28} className="text-purple-500 opacity-80" />
                      </motion.div>
                    </motion.div>
                    <span className="text-lg text-foreground/50 relative z-10">Subject Categories</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
