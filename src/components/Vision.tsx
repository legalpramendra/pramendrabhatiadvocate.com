import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Shield, Building, Users, Briefcase } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      icon: Users,
      title: "Advocate Welfare",
      description: "Government-sponsored insurance, improved amenities, and dedicated residential townships for legal professionals"
    },
    {
      icon: GraduationCap,
      title: "Youth Empowerment",
      description: "Restore and enhance unemployment allowance for graduates, ensuring affordable and transparent exam processes"
    },
    {
      icon: Shield,
      title: "Ex-Servicemen Support",
      description: "Regular meetings with officials to address genuine concerns and ensure welfare post-retirement"
    },
    {
      icon: Briefcase,
      title: "Teachers' Rights",
      description: "Fair salaries and job regularization for contract teachers (Shiksha Mitra) with parity to government teachers"
    },
    {
      icon: Building,
      title: "Public Infrastructure",
      description: "Public transport, health centers, post offices, and secure environments near all district headquarters"
    },
    {
      icon: Heart,
      title: "Farmers' Rights",
      description: "Continue championing fair compensation and policies based on successful precedents"
    }
  ];

  const values = [
    {
      title: "Service-Oriented Leadership",
      description: "Selflessly dedicated 24/7 to public issues, always seeking solutions for advocates, farmers, and the underprivileged"
    },
    {
      title: "Model Governance",
      description: "Believes in replicable solutions. Successfully implemented projects are proposed as models for other regions"
    },
    {
      title: "Inclusivity & Social Justice",
      description: "Welfare schemes for women lawyers, advocates, and ex-servicemen with better health insurance and financial benefits"
    },
    {
      title: "Grounded Leadership",
      description: "Emphasizes humility and staying connected to grassroots, irrespective of wealth or power"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Vision & <span className="gradient-text">Values</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a just society through concrete action and unwavering commitment
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">Key Issues & Promises</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">Core Values</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card hover:shadow-card transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold mb-3 text-primary">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 md:p-12 bg-primary text-primary-foreground text-center">
            <p className="text-2xl md:text-3xl font-display italic mb-4">
              "Think Positive, Be Positive"
            </p>
            <p className="text-lg opacity-90">
              Steadfast in maintaining optimism and integrity, always striving for solutions with selfless motivation
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
