import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java","kotlin", "HTML/CSS"]
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools", 
      skills: ["React.js", "Node.js", "Express.js", "Git", "Docker", "Web3.js"]
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Vercel", "IPFS"]
    },
    {
      icon: BarChart,
      title: "Other Skills",
      skills: ["Business Analysis", "UI/UX Design", "Smart Contracts", "DeFi", "Data Structures & Algorithms"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-0 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl font-semibold text-card-foreground">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default px-3 py-2 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;