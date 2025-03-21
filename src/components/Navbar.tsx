
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Home, BarChart4, Book, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", icon: <Home size={20} />, path: "/" },
    { label: "Categories", icon: <Book size={20} />, path: "/categories" },
    { label: "Profile", icon: <User size={20} />, path: "/profile" },
    { label: "Leaderboard", icon: <BarChart4 size={20} />, path: "/leaderboard" }
  ];

  return (
    <header className="fixed bottom-0 left-0 right-0 z-50 sm:top-0 sm:bottom-auto">
      <div className="glass-card mx-4 my-3 px-4 rounded-2xl flex items-center justify-between h-16 shadow-lg sm:mx-auto sm:max-w-2xl">
        <Link to="/" className="hidden sm:block">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Book size={24} className="text-primary" />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-bold text-lg tracking-tight"
            >
              QuizMatch
            </motion.span>
          </div>
        </Link>
        
        <nav className="flex justify-center w-full sm:w-auto">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={cn(
                      "flex flex-col sm:flex-row items-center justify-center px-3 py-2 rounded-lg transition-all sm:gap-2",
                      isActive 
                        ? "text-primary-foreground bg-primary" 
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <div className="relative">
                      {item.icon}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-1 bg-primary-foreground rounded-full hidden sm:block"
                          transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 30
                          }}
                        />
                      )}
                    </div>
                    <span className="text-xs mt-1 sm:mt-0 sm:text-sm">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="hidden sm:block">
          <button className="text-foreground/70 hover:text-foreground p-2 rounded-lg hover:bg-muted transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
