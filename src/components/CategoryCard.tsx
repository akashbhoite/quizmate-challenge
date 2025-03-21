
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

const CategoryCard = ({ id, name, icon: Icon, description, color }: CategoryCardProps) => {
  // Extract color name without the "bg-" prefix
  const colorName = color.replace("bg-", "");
  
  return (
    <Link to={`/categories/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        className={cn(
          "glass-card rounded-2xl overflow-hidden p-6 transition-all",
          "hover:shadow-lg hover:border-white/30"
        )}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className={cn(
              "rounded-full p-3 flex items-center justify-center",
              `${color}/10`
            )}>
              <Icon className={`text-${colorName}`} size={24} />
            </div>
            <h3 className="font-semibold text-lg">{name}</h3>
          </div>
          
          <p className="text-sm text-foreground/70">{description}</p>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs font-medium text-foreground/50">
              {name === 'Mathematics' ? '5' : name === 'Science' ? '3' : '2'} subjects available
            </span>
            
            <motion.div
              whileHover={{ x: 3 }}
              whileTap={{ x: -1 }}
              className="text-primary text-sm font-medium"
            >
              Explore
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
