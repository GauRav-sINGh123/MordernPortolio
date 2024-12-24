"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "Development",
    icon: Code2,
    skills: [
      {
        name: "Frontend",
        items: [
          "React",
          "Next.js",
          "JavaScript",
          "Zustand",
          "Redux/Redux Toolkit",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        name: "Backend",
        items: ["Node.js", "Firebase", "MongoDB"],
      },
    ],
  },
  {
    title: "Tools",
    icon: Workflow,
    skills: [
      {
        name: "Web",
        items: ["Git", "GitHub", "Postman", "Framer Motion"],
      },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" ref={ref} className="py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical expertise and the
            technologies I use to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <div className="bg-background rounded-xl p-6 border border-border group hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">
                        {skill.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, itemIndex) => (
                          <motion.span
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              delay:
                                categoryIndex * 0.1 +
                                skillIndex * 0.1 +
                                itemIndex * 0.05,
                              type: "spring",
                              stiffness: 100,
                            }}
                            className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
