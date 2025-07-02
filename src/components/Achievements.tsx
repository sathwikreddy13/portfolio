import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, DollarSign, Bot, Recycle } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Bot,
      title: "BOSCH Codeathon 2024",
      position: "2nd Place",
      description: "Developed an AI-powered automation system that streamlined industrial processes",
      category: "Competition",
      year: "2024",
      highlight: "AI-Powered Solution"
    },
    {
      icon: DollarSign,
      title: "NewGen IDEC 2024",
      position: "₹2,00,000 Funding",
      description: "Secured substantial funding for an innovative AI-based waste management startup",
      category: "Startup",
      year: "2024",
      highlight: "Entrepreneurship"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for innovation, technical excellence, and entrepreneurial spirit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-0 shadow-medium hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-right">
                    <Badge className="bg-accent text-accent-foreground border-0 mb-2">
                      {achievement.year}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {achievement.category}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {achievement.title}
                </h3>
                
                <div className="mb-4">
                  <Badge className="bg-tech-gradient text-white border-0 text-lg px-4 py-2">
                    <Trophy className="w-4 h-4 mr-2" />
                    {achievement.position}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {achievement.description}
                </p>

                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {achievement.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;