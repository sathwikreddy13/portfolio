import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      institution: "CVR College of Engineering",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2022 - 2026",
      grade: "CGPA: 8.8",
      location: "Hyderabad, India",
      description: "Comprehensive study in computer science fundamentals, software engineering, and emerging technologies with focus on practical applications.",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Web Technologies"]
    },
    {
      icon: BookOpen,
      institution: "FIITJEE",
      degree: "Intermediate (IPE MPC)",
      duration: "2020 - 2022", 
      grade: "93%",
      location: "Hyderabad, India",
      description: "Specialized in Mathematics, Physics, and Chemistry with emphasis on analytical thinking and problem-solving skills.",
      highlights: ["Mathematics", "Physics", "Chemistry", "Analytical Reasoning"]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and analytical mindset
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  {/* Icon and Institution */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-primary/10 p-4 rounded-xl">
                        <edu.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <Badge className="bg-tech-gradient text-white border-0 text-lg px-4 py-2">
                      {edu.grade}
                    </Badge>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-card-foreground">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <Badge 
                          key={highlightIndex}
                          variant="secondary" 
                          className="bg-secondary text-secondary-foreground text-sm"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;