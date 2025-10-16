import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

import heroBannerMobile from "@/assets/hero-banner-mobile.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<section
  id="home"
  className="relative flex min-h-[600px] md:h-screen items-center justify-center overflow-hidden bg-[#B41F01]"
>
  {/* Desktop Background */}
  <div
    className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
    style={{ backgroundImage: `url(${heroBanner})` }}
  />

  {/* Content */}
  <div className="relative z-10 container mx-auto mt-20 px-4 text-center sm:px-6 md:text-left lg:px-8">
    <div className="animate-fade-in">
      <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        Pramendra Singh Bhati
      </h1>

      <p className="mb-4 text-xl font-medium text-primary-foreground/90 sm:text-2xl md:text-3xl">
        Advocate • Social Worker • Political Leader
      </p>

      <p className="mx-auto mb-8 font-display italic text-lg text-primary-foreground/80 sm:text-xl md:text-2xl">
        "Think Positive, Be Positive – Service, Integrity, Results."
      </p>

      {/* Buttons */}
      <div className="hidden flex-col items-center justify-start gap-4 sm:flex-row md:flex">
        <Button
          size="lg"
          onClick={scrollToContact}
          className="shadow-elegant bg-secondary px-8 py-6 text-lg text-secondary-foreground hover:bg-secondary/90"
        >
          Join the Movement
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border-2 border-primary-foreground px-8 py-6 text-lg text-red-500 hover:bg-primary-foreground hover:text-primary"
        >
          Learn More
        </Button>
      </div>
    </div>

    {/* Mobile Banner */}
    <img
      src={heroBannerMobile}
      alt="Pramendra Singh Bhati"
      className="mt-6 w-full md:hidden"
    />
  </div>

  {/* Scroll Arrow */}
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 transform animate-bounce">
    <ArrowDown className="h-8 w-8 text-primary-foreground" />
  </div>
</section>

  );
};

export default Hero;
