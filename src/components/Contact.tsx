import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      detail: "Bisrakh, Greater Noida West, Uttar Pradesh"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "Available on request"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "legal.pramendra@gmail.com"
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/pramendra.singh.543" },
    { icon: Linkedin, label: "Linkedin", href: "https://www.linkedin.com/in/pramendra-bhati-advocate/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/president_pramendra_bhati_adv_/" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Join the <span className="gradient-text">Movement</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we can build a just, prosperous, and inclusive society. Connect with us to be part of meaningful change.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.detail}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 md:p-12 bg-card shadow-elegant">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="text-muted-foreground mb-6">
                Whether you want to volunteer, learn more about our initiatives, or simply show your support,
                we'd love to hear from you.
              </p>
              <a href="mailto:legal.pramendra@gmail.com">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-elegant text-lg px-8 py-6"
                >
                  Contact Us
                </Button>
              </a>
            </div>

            <div className="border-t border-border pt-8 mt-8">
              <h4 className="text-center text-lg font-semibold mb-6">Follow Our Journey</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
