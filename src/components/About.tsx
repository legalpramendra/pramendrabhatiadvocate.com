import { Card } from "@/components/ui/card";
import { Scale, Users, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Scale,
      title: "Advocate",
      description: "Dedicated legal professional serving the community with integrity"
    },
    {
      icon: Users,
      title: "Bar Leader",
      description: "President of District Court Bar Association, Noida & Gautam Buddh Nagar"
    },
    {
      icon: Heart,
      title: "Public Servant",
      description: "Four generations of family in public service and social work"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Parmender Singh Bhati</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-card">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Parmender Singh Bhati is an advocate by profession, recognized for his disciplined upbringing under his father, 
                a retired officer of the Indian Army who served with distinction in the 1965 and 1971 wars. Inspired by four 
                generations of family involvement in social and political spheres, he chose law as a career to best serve society.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Bhati started his public service as early as 2011, contesting in the Uttar Pradesh Bar Council elections across 
                75 districts, and has since held leadership as President of the District Court Bar Association in Noida and Gautam 
                Buddh Nagar. His tenure is marked by selfless commitment, always prioritizing the welfare of advocates.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-accent italic text-xl font-display">
                "हर समय, मेरा जीवन समाज को समर्पित है और समाज की सेवा में ही मेरा उद्देशय है।"
              </blockquote>
              <p className="text-lg leading-relaxed">
                Raised in an environment of discipline and public service, with deep family roots in politics spanning four 
                generations, he has achieved significant milestones as President of major Bar Associations, earning widespread 
                respect for championing the rights and development of legal professionals.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
