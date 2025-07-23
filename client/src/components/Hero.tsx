import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import CustomDock from "./CustomDock";
import { motion } from "motion/react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero py-20 md:py-0"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-hero-accent rounded-full blur-xl opacity-60 animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-lg opacity-80 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="animate-fade-in">
          {/* Modern badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full mb-8"
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <div className="text-sm text-muted-foreground">
              Available for Internship opportunities
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            Hi,I'm <span className="gradient-text">Sudip Paul</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            Full-Stack Developer from India, Currently in 3rd year of college
            Proficient in fullstack development.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Link to="https://drive.google.com/file/d/1bnTZ77RcyMTSp8s0co5wDdv3R1KDGLjd/view?usp=drive_link">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 backdrop-blur-sm"
              >
                <FileText />
                Resume
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            <CustomDock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
