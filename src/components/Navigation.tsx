import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Code2, Zap, Cpu } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.85, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [12, 20]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0.1, 0.3]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  // Tech particle data for floating animations
  const techParticles = [
    { Icon: Code2, delay: 0, x: 20, y: 10 },
    { Icon: Zap, delay: 1.5, x: 85, y: 15 },
    { Icon: Cpu, delay: 3, x: 15, y: 85 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ 
          opacity: navOpacity,
          backdropFilter: `blur(${navBlur}px)`,
        }}
        whileHover={{ scale: 1.005 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Animated Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isScrolled 
              ? "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.98), rgba(255,255,255,0.95))"
              : "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(248,250,252,0.90), rgba(255,255,255,0.85))"
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, transparent, rgba(59,130,246,0.1), rgba(16,185,129,0.1), transparent)",
            opacity: borderOpacity,
          }}
        />
        
        {/* Inner Border */}
        <div className="absolute inset-[1px] rounded-2xl border border-white/20" />

        {/* Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/8 to-primary-glow/5 opacity-0 rounded-2xl"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating Tech Particles */}
        {techParticles.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/10 pointer-events-none"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{
              y: [-2, 2, -2],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={16} />
          </motion.div>
        ))}

        <div className="relative px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo */}
            <motion.div 
              className="font-bold text-xl cursor-pointer group flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#hero')}
            >
              <motion.div className="relative">
                {/* Logo Container with Tech Border */}
                <motion.div
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30"
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                    borderColor: "rgba(59,130,246,0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                  </motion.div>
                </motion.div>
                
                {/* Tech Indicator Dots */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.span 
                className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent font-extrabold tracking-tight"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                MSR
              </motion.span>
              
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                                     <motion.button
                     key={item.label}
                     onClick={() => scrollToSection(item.href)}
                     className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group overflow-hidden ${
                       isActive 
                         ? 'text-primary bg-primary/10 border border-primary/20' 
                         : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                     }`}
                     whileHover={{ 
                       scale: 1.08, 
                       y: -2,
                       transition: { type: "spring", stiffness: 400, damping: 25 }
                     }}
                     whileTap={{ scale: 0.95 }}
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                   >
                     {/* Enhanced Hover Background with Animation */}
                     <motion.div
                       className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/20 to-primary-glow/15 rounded-xl opacity-0"
                       whileHover={{ 
                         opacity: 1,
                         scale: 1.02,
                         transition: { duration: 0.2 }
                       }}
                     />
                     
                     {/* Shimmer Effect on Hover */}
                     <motion.div
                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl opacity-0 -translate-x-full"
                       whileHover={{
                         opacity: [0, 1, 0],
                         x: ["100%", "-100%"],
                         transition: { duration: 0.6, ease: "easeInOut" }
                       }}
                     />
                     
                     {/* Active State Background */}
                     {isActive && (
                       <motion.div
                         className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl"
                         layoutId="activeTab"
                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
                       />
                     )}
                     
                     {/* Enhanced Border Effect */}
                     <motion.div
                       className="absolute inset-0 rounded-xl border border-transparent"
                       whileHover={{ 
                         borderColor: "rgba(59,130,246,0.4)",
                         boxShadow: "0 0 15px rgba(59,130,246,0.2), inset 0 0 15px rgba(59,130,246,0.1)",
                         transition: { duration: 0.3 }
                       }}
                     />
                     
                     <motion.span 
                       className="relative z-10 font-semibold"
                       whileHover={{ 
                         textShadow: "0 0 8px rgba(59,130,246,0.3)",
                         transition: { duration: 0.2 }
                       }}
                     >
                       {item.label}
                     </motion.span>
                     
                     {/* Enhanced Underline with Glow */}
                     <motion.div
                       className="absolute bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full"
                       whileHover={{ 
                         width: "90%", 
                         x: "-50%",
                         boxShadow: "0 0 10px rgba(59,130,246,0.6)",
                         transition: { duration: 0.3, ease: "easeOut" }
                       }}
                     />
                     
                     {/* Particle Effect on Hover */}
                     <motion.div
                       className="absolute top-1/2 left-1/2 w-1 h-1 bg-accent rounded-full opacity-0"
                       whileHover={{
                         opacity: [0, 1, 0],
                         scale: [0, 4, 0],
                         x: "-50%",
                         y: "-50%",
                         transition: { duration: 0.5, repeat: 2 }
                       }}
                     />
                   </motion.button>
                );
              })}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative hover:bg-primary/10 border border-primary/20 rounded-xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <X className="w-5 h-5 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Menu className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="md:hidden border-t border-gradient-to-r from-primary/20 to-accent/20 overflow-hidden backdrop-blur-sm"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Mobile Menu Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95 backdrop-blur-md" />
                
                <div className="relative px-4 py-6 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                                             <motion.button
                         key={item.label}
                         onClick={() => scrollToSection(item.href)}
                         className={`block w-full text-left font-medium py-4 px-4 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                           isActive 
                             ? 'text-primary bg-primary/10 border border-primary/20' 
                             : 'text-muted-foreground hover:text-primary hover:bg-primary/8'
                         }`}
                         initial={{ opacity: 0, x: -30 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: index * 0.1, duration: 0.4 }}
                         whileHover={{ 
                           x: 12, 
                           scale: 1.03,
                           transition: { type: "spring", stiffness: 300, damping: 25 }
                         }}
                         whileTap={{ scale: 0.97, x: 15 }}
                       >
                         {/* Enhanced Mobile Hover Background */}
                         <motion.div
                           className="absolute inset-0 bg-gradient-to-r from-primary/12 via-accent/15 to-primary-glow/8 rounded-xl opacity-0"
                           whileHover={{ 
                             opacity: 1,
                             scale: 1.01,
                             transition: { duration: 0.25 }
                           }}
                         />
                         
                         {/* Mobile Shimmer Effect */}
                         <motion.div
                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-xl opacity-0 -translate-x-full"
                           whileHover={{
                             opacity: [0, 1, 0],
                             x: ["100%", "-100%"],
                             transition: { duration: 0.8, ease: "easeInOut" }
                           }}
                         />
                         
                         {/* Mobile Border Glow */}
                         <motion.div
                           className="absolute inset-0 rounded-xl border border-transparent"
                           whileHover={{ 
                             borderColor: "rgba(59,130,246,0.3)",
                             boxShadow: "0 0 12px rgba(59,130,246,0.15)",
                             transition: { duration: 0.3 }
                           }}
                         />
                         
                         <div className="flex items-center gap-3 relative z-10">
                           <motion.span 
                             className="text-base font-semibold"
                             whileHover={{ 
                               textShadow: "0 0 6px rgba(59,130,246,0.4)",
                               transition: { duration: 0.2 }
                             }}
                           >
                             {item.label}
                           </motion.span>
                           
                           {/* Enhanced Tech Arrow Indicator */}
                           <motion.div
                             className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                             whileHover={{ 
                               x: 6,
                               scale: 1.1,
                               transition: { type: "spring", stiffness: 400, damping: 20 }
                             }}
                           >
                             <motion.div 
                               className="w-4 h-4 border-t-2 border-r-2 border-primary/70 transform rotate-45"
                               whileHover={{
                                 borderColor: "rgba(59,130,246,1)",
                                 filter: "drop-shadow(0 0 3px rgba(59,130,246,0.5))"
                               }}
                             />
                           </motion.div>
                         </div>
                         
                         {/* Enhanced Mobile Side Indicator */}
                         <motion.div
                           className="absolute left-1 top-1/2 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-0"
                           whileHover={{ 
                             opacity: 1, 
                             x: 3, 
                             y: "-50%",
                             width: "4px",
                             boxShadow: "0 0 8px rgba(59,130,246,0.5)",
                             transition: { duration: 0.3 }
                           }}
                         />
                         
                         {/* Mobile Pulse Effect */}
                         <motion.div
                           className="absolute right-2 top-1/2 w-2 h-2 bg-accent/50 rounded-full opacity-0"
                           whileHover={{
                             opacity: [0, 0.8, 0],
                             scale: [0, 1.5, 0],
                             y: "-50%",
                             transition: { duration: 0.6, repeat: 1 }
                           }}
                         />
                       </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;