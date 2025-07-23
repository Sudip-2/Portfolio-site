import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Pointer } from "./magicui/pointer";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "AutoCV",
      description:
        "An AI-driven resume builder that enables users to generate, customize, and optimize resumes in real-time.",
      image: "/project-one.png",
      technologies: ["Next.js", "TypeScript", "Prisma"],
      github: "https://github.com/Sudip-2/AutoCV-AI-Resume-Builder",
      live: "https://auto-cv-ai-resume-builder.vercel.app/",
    },
    {
      title: "SudipBlogs",
      description:
        "Full-stack blog platform with real-time search, push notifications, and 100% responsive design .",
      image: "/project-two.png",
      technologies: ["HTML", "JavaScript", "Node.js"],
      github: "https://github.com/Sudip-2/Blog-Website",
      live: "https://sudipblogs.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-projects">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{
            opacity: 0,
            translateY: 50,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-full h-full space-y-4"
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
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              <p className="text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <div className="w-full h-auto overflow-hidden rounded-sm">
                <Link
                  to={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt="Project image"
                    className="w-full h-auto"
                  />
                  <Pointer>
                    <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-lg border border-primary/20">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Try me now!</span>
                    </div>
                  </Pointer>
                </Link>
              </div>
              <div className="flex gap-x-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div>
                <Button variant="outline" className="mr-2" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="default"
                  className="transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <div className="w-full flex justify-center mt-6">
          <Button variant="outline" className="group" asChild>
            <a href={"#"} target="_blank" rel="noopener noreferrer">
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
