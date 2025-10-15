const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Parmender Singh Bhati</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Advocate • Social Worker • Political Leader
          </p>
          <p className="text-primary-foreground/60 text-sm mb-8 italic font-display">
            "हर समय, मेरा जीवन समाज को समर्पित है और समाज की सेवा में ही मेरा उद्देशय है।"
          </p>
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Parmender Singh Bhati. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Service • Integrity • Results
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
