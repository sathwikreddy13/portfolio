import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Calendar } from "lucide-react";

const Volunteer = () => {
  const experiences = [
    {
      icon: Users,
      title: "MIWAI 2023",
      role: "Ambassador",
      year: "2023",
      description: "Represented the organization as an ambassador, promoting AI awareness and facilitating networking among tech enthusiasts.",
      skills: ["Leadership", "Communication", "Event Management"]
    },
    {
      icon: Award,
      title: "Teachers Felicitation Ceremony 2023",
      role: "Coordinator",
      year: "2023", 
      description: "Coordinated and managed the annual teachers appreciation event, ensuring seamless execution and meaningful recognition.",
      skills: ["Event Coordination", "Team Management", "Planning"]
    }
  ];

  return (
    <section id="volunteer" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Volunteer Experience
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the community through leadership roles and meaningful initiatives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-0 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-accent/10 p-4 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                    <experience.icon className="w-8 h-8 text-accent" />
                  </div>
                  <Badge className="bg-accent text-accent-foreground border-0 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {experience.year}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {experience.title}
                </h3>
                
                <div className="mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-base px-3 py-1">
                    {experience.role}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {experience.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="border-accent/30 text-accent hover:bg-accent/10 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Volunteer;