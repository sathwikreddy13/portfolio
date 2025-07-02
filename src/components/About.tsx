import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Cpu, Brain } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive and interactive web applications using modern frameworks"
    },
    {
      icon: Cpu,
      title: "Blockchain Technology",
      description: "Exploring decentralized applications and smart contract development"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Developing AI-powered solutions for real-world problems"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="bg-card-gradient border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-semibold text-card-foreground">Education & Background</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m currently pursuing my B.Tech in Computer Science and Engineering at 
                  <span className="font-semibold text-primary"> CVR College of Engineering</span> (2022-2026) 
                  with a CGPA of 8.8. My academic journey has been complemented by hands-on experience 
                  in cutting-edge technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Based in <span className="font-semibold text-accent">Hyderabad, India</span>, I&apos;m passionate about 
                  leveraging technology to solve complex problems and create impactful solutions. 
                  My interests span across web development, blockchain technology, and artificial intelligence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Interests Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Areas of Interest</h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <interest.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-card-foreground mb-2">
                          {interest.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;