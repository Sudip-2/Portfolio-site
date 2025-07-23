import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
          >
            Sudip Paul
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
              initial={{
                opacity: 0,
                height: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="py-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-300 font-medium"
                    initial={{ opacity: 0, x: -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -120 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05 + 0.15,
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
