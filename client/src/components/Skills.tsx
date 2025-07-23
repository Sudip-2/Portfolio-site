import { motion } from "motion/react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML","CSS","JavaScript", "React", "Next.js","TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js","Express.js","MongoDB","Mongoose","PostgreSQL","Prisma"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{
            opacity: 0,
            translateY: 50,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technologies</span> I Work With
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern tools and technologies I use to build amazing digital
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-card/20 hover:card-glow border rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{
                opacity: 0,
                translateY: 100,
              }}
              whileInView={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + skillIndex * 0.05 + 0.3,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
