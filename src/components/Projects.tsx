import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Zap, ChevronLeft, ChevronRight, Star, Users, Code2, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Blippi",
      description: "A comprehensive Web3 blog and crowdfunding platform that revolutionizes how creators connect with their audience and secure funding for their projects.",
      technologies: ["React.js", "TypeScript", "Solidity", "Web3", "Ethereum"],
      achievements: [
        {
          icon: TrendingUp,
          text: "35% increase in funding success rate"
        },
        {
          icon: Zap,
          text: "20% reduction in gas fees"
        }
      ],
      link: "https://blippi-frontend.vercel.app",
      github: "https://github.com/sathwikreddy/blippi",
      featured: true,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web3"
    },
    {
      title: "EcoTrack",
      description: "An AI-powered sustainability tracking application that helps users monitor their carbon footprint and suggests eco-friendly alternatives for daily activities.",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase", "Node.js"],
      achievements: [
        {
          icon: Users,
          text: "10K+ active users"
        },
        {
          icon: Star,
          text: "4.8/5 app store rating"
        }
      ],
      link: "https://ecotrack-demo.vercel.app",
      github: "https://github.com/sathwikreddy/ecotrack",
      featured: false,
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mobile App"
    },
    {
      title: "DevCollab",
      description: "A real-time collaborative coding platform with integrated video chat, code sharing, and project management features for remote development teams.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "WebRTC", "Docker"],
      achievements: [
        {
          icon: Code2,
          text: "Real-time collaboration"
        },
        {
          icon: Users,
          text: "500+ teams using"
        }
      ],
      link: "https://devcollab-platform.vercel.app",
      github: "https://github.com/sathwikreddy/devcollab",
      featured: false,
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Platform"
    },
    {
      title: "SmartFinance",
      description: "An intelligent personal finance management app with AI-driven insights, expense categorization, and investment recommendations.",
      technologies: ["Flutter", "Python", "FastAPI", "PostgreSQL", "ML"],
      achievements: [
        {
          icon: TrendingUp,
          text: "25% better savings rate"
        },
        {
          icon: Smartphone,
          text: "Cross-platform support"
        }
      ],
      link: "https://smartfinance-app.vercel.app",
      github: "https://github.com/sathwikreddy/smartfinance",
      featured: false,
      image: "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "FinTech"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that demonstrate my expertise in modern web technologies and emerging platforms
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-3 shadow-lg hover:bg-primary/10 transition-all duration-300"
            onClick={() => scroll('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-3 shadow-lg hover:bg-primary/10 transition-all duration-300"
            onClick={() => scroll('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>

          {/* Scrollable Projects Container */}
          <motion.div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-12 py-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex-shrink-0 w-96"
              >
                <Card 
                  className={`h-full bg-card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 group ${
                    project.featured ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </motion.div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Badge className="bg-tech-gradient text-white border-0 px-3 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </motion.div>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground text-sm">Key Achievements:</h4>
                      <div className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <motion.div 
                            key={achIndex} 
                            className="flex items-center space-x-3 bg-primary/5 p-3 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                          >
                            <achievement.icon className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-card-foreground font-medium text-sm">{achievement.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-border hover:bg-secondary transition-all duration-300"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 px-8 py-6 text-lg font-semibold"
            onClick={() => window.open('https://github.com/sathwikreddy', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;