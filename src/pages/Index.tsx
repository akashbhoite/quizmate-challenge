
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Sparkles, Brain, Trophy, Clock, FileText, Upload, BookOpen, Copy, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { 
  staggerChildren, 
  childVariants, 
  popupVariants 
} from "@/utils/animations";

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

// Learning paths configuration
const learningPaths = [
  {
    id: "individual",
    title: "Individual Learning",
    description: "Upload documents, get summaries, and create flashcards to enhance your personal study experience.",
    icon: <BookOpen className="text-emerald-500" size={32} />,
    features: [
      {
        icon: <Upload className="text-emerald-500" />,
        title: "Document Upload",
        description: "Upload study materials in various formats including PDFs, Word docs, and text files."
      },
      {
        icon: <FileText className="text-emerald-500" />,
        title: "Smart Summaries",
        description: "Get AI-generated summaries of your documents to quickly understand key concepts."
      },
      {
        icon: <Copy className="text-emerald-500" />,
        title: "Flashcard Generation",
        description: "Automatically create study flashcards from your uploaded documents."
      }
    ],
    cta: {
      text: "Start Learning",
      path: "/individual-learning"
    },
    visual: (
      <motion.div 
        className="bg-gradient-to-br from-emerald-500/10 via-teal-400/10 to-green-500/10 rounded-lg p-6 h-full"
        whileHover={{ y: -5 }}
      >
        <div className="relative flex flex-col items-center justify-center h-full">
          <motion.div 
            className="absolute top-6 right-6 text-emerald-500 opacity-70"
            animate={floatingAnimation}
          >
            <FileText size={24} />
          </motion.div>
          
          <motion.div 
            className="w-full bg-card border border-border rounded-lg p-4 mb-4 shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h4 className="text-base font-medium mb-4 flex items-center gap-2">
              <Upload size={16} className="text-emerald-500" />
              <span>Document Upload</span>
            </h4>
            
            <div className="border-2 border-dashed border-border rounded-md p-6 text-center">
              <motion.div
                animate={pulseAnimation}
                className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2"
              >
                <Upload className="text-emerald-500" />
              </motion.div>
              <p className="text-sm text-muted-foreground">Drag & drop your document here or click to browse</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full bg-card border border-border rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h4 className="text-base font-medium mb-2 flex items-center gap-2">
              <Copy size={16} className="text-emerald-500" />
              <span>Generated Flashcards</span>
            </h4>
            
            <div className="space-y-2">
              <motion.div 
                className="p-3 rounded-lg border border-border bg-background hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm font-medium">What is photosynthesis?</p>
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-muted-foreground mt-2">
                    The process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.
                  </p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="p-3 rounded-lg border border-border bg-background hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm font-medium">Define osmosis:</p>
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-muted-foreground mt-2">
                    The process by which molecules of a solvent pass through a semipermeable membrane from a less concentrated solution to a more concentrated one.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  },
  {
    id: "competitive",
    title: "Competitive Learning",
    description: "Challenge your peers in QuizMatch competitions across various academic subjects to enhance learning through friendly competition.",
    icon: <Trophy className="text-blue-500" size={32} />,
    features: [
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
    ],
    cta: {
      text: "Start Competing",
      path: "/categories"
    },
    visual: (
      <motion.div 
        className="bg-gradient-to-br from-blue-500/10 via-purple-400/10 to-indigo-500/10 rounded-lg p-6 h-full"
        whileHover={{ y: -5 }}
      >
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
              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
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
              <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
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
      </motion.div>
    )
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("individual");
  
  // Animation variants for the moving background elements
  const backgroundAnimations = {
    circle1: {
      x: [0, 20, 0],
      y: [0, 15, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
    },
    circle2: {
      x: [0, -20, 0],
      y: [0, -15, 0],
      scale: [1, 1.2, 1],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
    },
    circle3: {
      x: [0, 15, 0],
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
    }
  };
  
  return (
    <Layout>
      <div className="space-y-16 py-6 relative">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"
          animate={backgroundAnimations.circle1}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10"
          animate={backgroundAnimations.circle2}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"
          animate={backgroundAnimations.circle3}
        />
        
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-10 right-10 text-primary opacity-70 z-10"
          animate={floatingAnimation}
        >
          <Sparkles size={24} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-10 text-emerald-500 opacity-70 z-10"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 0.5 }
          }}
        >
          <Brain size={20} />
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-20 text-purple-500 opacity-70 z-10"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        >
          <Layers size={22} />
        </motion.div>
        
        {/* Hero Section */}
        <section className="relative">
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
                Academic Enhancement Platform
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Study Your Way,{" "}
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Solo or Together
                </motion.span>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Choose how you learn: study independently with document uploads and flashcards, or challenge peers in academic competitions.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Learning Paths Section */}
        <section className="relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold">Choose Your Learning Path</h2>
              <p className="text-foreground/70 mt-2">Select the learning style that works best for you</p>
            </motion.div>
            
            {/* Learning Path Tabs */}
            <div className="mb-8 flex justify-center gap-4">
              {learningPaths.map((path) => (
                <motion.button
                  key={path.id}
                  onClick={() => setActiveTab(path.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-lg transition-all",
                    activeTab === path.id 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "bg-card hover:bg-muted border border-border"
                  )}
                >
                  {path.icon}
                  <span className="font-medium">{path.title}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Learning Path Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningPaths.map((path) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeTab === path.id ? 1 : 0.5,
                    y: 0,
                    scale: activeTab === path.id ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "glass-card rounded-xl overflow-hidden transition-all",
                    activeTab === path.id ? "shadow-lg" : ""
                  )}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                        {path.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{path.title}</h3>
                        <p className="text-foreground/70">{path.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 mt-8 mb-6">
                      {path.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{feature.title}</h4>
                            <p className="text-sm text-foreground/70">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link to={path.cta.path}>
                      <Button 
                        className="w-full mt-4"
                        size="lg"
                        variant={activeTab === path.id ? "default" : "outline"}
                        icon={<ArrowRight size={16} />}
                        iconPosition="right"
                      >
                        {path.cta.text}
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="h-80 overflow-hidden">
                    {path.visual}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="relative">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    variants={popupVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Ready to Start Learning?
                  </motion.h2>
                  <motion.p 
                    className="text-foreground/70 mb-6"
                    variants={popupVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                  >
                    Choose your preferred learning style and start improving your academic performance today. Study at your own pace or challenge your peers - the choice is yours!
                  </motion.p>
                  
                  <div className="space-x-4">
                    <Link to="/individual-learning">
                      <Button variant="outline" className="mr-2">
                        Individual Learning
                      </Button>
                    </Link>
                    <Link to="/categories">
                      <Button icon={<Trophy size={16} className="mr-1" />}>
                        Competitive Learning
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <motion.div
                      className="flex flex-col md:flex-row gap-3"
                      variants={staggerChildren}
                      initial="initial"
                      animate="enter"
                    >
                      <motion.div 
                        variants={childVariants}
                        className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 flex flex-col items-center text-center"
                      >
                        <BookOpen className="text-emerald-500 mb-2" size={24} />
                        <p className="text-sm font-medium">Individual</p>
                      </motion.div>
                      
                      <motion.div 
                        variants={childVariants}
                        className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20 flex flex-col items-center text-center"
                      >
                        <Trophy className="text-blue-500 mb-2" size={24} />
                        <p className="text-sm font-medium">Competitive</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
