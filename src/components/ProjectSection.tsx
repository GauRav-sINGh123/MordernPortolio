"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {Github, ExternalLink } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Maison",
    description:
      "Maison is an AI-powered interior design platform that generates personalized design recommendations based on user preferences. Built with Next.js, Firebase, Replicate AI, Zustand for state management, and Tailwind CSS for a sleek, responsive UI.",
    preview:
      "/Maison.jpg",
    tags: ["Next.js","React", "TypeScript", "Replicate", "Tailwind","Zustand", "Firebase","Clerk"],
    github: "https://github.com/GauRav-sINGh123/Maison",
    link: "https://maison-iota.vercel.app/",
    featured: true,
  },
  {
    title: "NoteNinja",
    description:
      "An AI-powered notes generator built using Next.js, TypeScript, Tailwind CSS, Shadcn, Firebase, UUID, and Clerk for authentication. This app allows users to generate, store, and manage notes efficiently with a sleek and responsive UI.",
    preview:
      "/Note.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Clerk","Firebase","Framer Motion"],
    github: "https://github.com/GauRav-sINGh123/NoteNinja",
    link: "https://note-ninja-seven.vercel.app/",
    featured: true,
  },
  {
    title: "Triply",
    description:
      "Triply is an AI-powered trip planning application that helps users create personalized travel itineraries with ease.",
    preview:
      "/Triply.jpg",
    tags: ["ReactJs","Google Maps Api","Gemini Api","Tailwind","Firebase"],
    github: "https://github.com/GauRav-sINGh123/Triply",
    link: "https://blog-85ce6.web.app/",
    featured: true,
  },
  {
    title: "PikClick",
    preview:
      "/PikClick.jpg",
    tags: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/GauRav-sINGh123/PikClick",
    link: "https://pikclik-bba5c.web.app/",
  },
  {
    title: "MovieHub",
    preview:
      "/MovieHub.jpg",
    tags: ["React", "Tailwind CSS", "Omdb Api"],
    github: "https://github.com/GauRav-sINGh123/MovieHub",
    link: "https://movie-hub-xi-flax.vercel.app/",
  },
  {
    title: "Job Finder",
    preview:
      "/JobFinder.jpg",
    tags: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/GauRav-sINGh123/JobFinder",
    link: "https://online-job-portal-26f13.web.app/#_",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of projects that showcase my expertise in building
            innovative and scalable solutions.
          </p>
        </motion.div>

        <div className="space-y-32 mb-32">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <FeaturedProject
                key={project.title}
                project={project}
                index={index}
              />
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProject({ project, index }: { project: any; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      className="group relative rounded-xl overflow-hidden bg-muted/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: any) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-background rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground text-lg">
              {project.description}
            </p>

            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Preview
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <ProjectPreview src={project.preview} />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-muted/50 rounded-xl overflow-hidden"
    >
      <div className="aspect-[4/3] relative">
        <ProjectPreview src={project.preview} />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: any) => (
            <span
              key={tag}
              className="px-2 py-1 bg-background rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
