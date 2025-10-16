import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Community rally and public engagement",
      title: "Community Leadership"
    },
    {
      src: gallery2,
      alt: "With the Visionary Leader, Akhilesh Yadav Ji",
      title: "With the Visionary Leader, Akhilesh Yadav Ji"
    },
    {
      src: gallery3,
      alt: "High Court Prayagraj",
      title: "High Court Prayagraj"
    },
    {
      src: gallery4,
      alt: "Independence Day",
      title: "Independence Day"
    },
    {
      src: gallery5,
      alt: "Supreme Court of India",
      title: "Supreme Court of India"
    },
    {
      src: gallery6,
      alt: "Grassroots engagement with farmers",
      title: "Grassroots Connect"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Impact <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments of service, leadership, and community transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-primary-foreground">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
            From rallies to infrastructure inaugurations, every moment reflects a commitment to authentic leadership 
            and meaningful community impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
