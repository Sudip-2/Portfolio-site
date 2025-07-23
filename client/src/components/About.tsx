import IconCloudDemo from "./IconCloudCustom";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-about">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Self taught developer with 1+ years of experience building scalable
            web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{
              opacity: 0,
              translateX: -50,
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              I'm Sudip Paul, a full-stack web developer from Kolkata, India,
              building fast, clean, and impactful softwares. With a strong grip
              on the MERN stack, I focus on writing clean, maintainable code and
              crafting user-first solutions that scale.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive in collaborative teams, love simplifying complex
              problems, and aim to bring real value through thoughtful,
              functional software.
            </p>
          </motion.div>
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
};

export default About;
