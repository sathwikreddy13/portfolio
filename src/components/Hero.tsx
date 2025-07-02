import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code, Zap, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: "10%", y: "20%" },
    { Icon: Zap, delay: 2, x: "85%", y: "30%" },
    { Icon: Sparkles, delay: 4, x: "15%", y: "70%" },
    { Icon: Github, delay: 1, x: "80%", y: "75%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/30 via-accent/20 to-primary-glow/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent/25 via-primary-glow/20 to-primary/25 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-primary-glow/30 via-accent/25 to-primary/20 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
            rotate: [0, 180, 360],
          }}
          transition={{
            x: { type: "spring", stiffness: 30, damping: 20 },
            y: { type: "spring", stiffness: 30, damping: 20 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/20"
            style={{ left: x, top: y }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              y: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2 + delay, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Welcome to my digital space</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                M Sathwik Reddy
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.p 
              className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Aspiring{" "}
              <motion.span 
                className="text-primary font-medium"
                animate={{ color: ["hsl(217, 91%, 60%)", "hsl(195, 85%, 55%)", "hsl(217, 91%, 60%)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Software Developer
              </motion.span>
              {" "}&{" "}
              <motion.span 
                className="text-accent font-medium"
                animate={{ color: ["hsl(195, 85%, 55%)", "hsl(280, 100%, 70%)", "hsl(195, 85%, 55%)"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                Tech Enthusiast
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Computer Science undergraduate passionate about{" "}
              <span className="text-primary font-medium">blockchain</span>,{" "}
              <span className="text-accent font-medium">web development</span>, and{" "}
              <span className="text-primary-glow font-medium">AI</span>.
              Building innovative solutions for tomorrow's challenges.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/sathwikreddy", color: "hover:text-foreground" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sathwikreddy", color: "hover:text-blue-500" },
              { icon: Mail, label: "Email", href: "mailto:sathwikreddy13@gmail.com", color: "hover:text-green-500" }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group ${social.color}`}
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <social.icon className="w-5 h-5 mr-2" />
                  </motion.div>
                  {social.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold overflow-hidden group"
                onClick={() => scrollToSection('projects')}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">View My Projects</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 px-8 py-6 text-lg font-semibold group"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Download Resume</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div 
          variants={itemVariants}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary-glow/30 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            />

            {/* Main Image Container */}
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary-glow/10 backdrop-blur-sm border border-border/20 shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary-glow/20 flex items-center justify-center">
                <motion.div
                  className="text-6xl md:text-8xl font-bold text-primary/30"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <img src="sathwik.JPG" alt="" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              
              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full"
                animate={{
                  y: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full"
                animate={{
                  y: [5, -5, 5],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;