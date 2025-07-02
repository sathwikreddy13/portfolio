import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sathwikreddy13@gmail.com",
      href: "mailto:sathwikreddy13@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91-9581499988",
      href: "tel:+919581499988"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sathwikreddy13",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/sathwik-reddy-0b089a280/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-tech-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card-gradient border-0 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-card-foreground font-medium hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-card-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card-gradient border-0 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="border-border hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="bg-tech-gradient border-0 shadow-glow text-white">
              <CardContent className="p-8 text-center">
                <Send className="w-16 h-16 mx-auto mb-6 animate-float" />
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I&apos;m always excited to discuss new opportunities and challenges.
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-medium w-full"
                    onClick={() => window.open('mailto:sathwikreddy13@gmail.com', '_blank')}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send me an Email
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 w-full"
                    onClick={() => window.open('tel:+919581499988', '_blank')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Me
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-card-gradient border-0 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  Quick Info
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Open to freelance opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Available for full-time positions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Interested in collaborative projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Always learning new technologies
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;