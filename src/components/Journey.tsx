import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Journey = () => {
  const achievements = [
    {
      year: "2011",
      title: "Public Service Begins",
      description: "Contested in UP Bar Council elections across 75 districts, marking the start of a dedicated journey in public service"
    },
    {
      year: "Infrastructure",
      title: "₹3 Crores Court Development",
      description: "Secured funding from Greater Noida Authority for critical court infrastructure improvements"
    },
    {
      year: "Connectivity",
      title: "₹5.5 Crore Foot Overbridge",
      description: "Advocated for construction of foot overbridge, substantially improving connectivity and safety for lawyers and public"
    },
    {
      year: "Leadership",
      title: "Bar Association President",
      description: "Elected President of District Court Bar Association in Noida and Gautam Buddh Nagar"
    },
    {
      year: "Farmers' Rights",
      title: "Land Acquisition Victory",
      description: "Helped raise farmer compensation from ₹850 to ₹3,500/meter in Greater Noida, and up to ₹5,000 in Noida"
    },
    {
      year: "Development",
      title: "Lucknow Expressway",
      description: "Participated in successful infrastructure development projects benefiting thousands in the region"
    }
  ];

  const initiatives = [
    "Multi-level parking allocation at court premises",
    "Women lawyers' restrooms and facilities",
    "Administrative staffing and advocate chambers",
    "Legal community welfare programs"
  ];

  return (
    <section id="journey" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Journey & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of dedication, milestones, and transformative impact on the legal community and society
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
            >
              <div className="text-sm font-bold text-primary mb-2">{achievement.year}</div>
              <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-accent/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Initiatives for Advocate Welfare</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {initiatives.map((initiative, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{initiative}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Journey;
