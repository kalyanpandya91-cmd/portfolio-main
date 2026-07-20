import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Cricket Analytics",
    description:
      "A full-stack cricket analytics web application with player statistics, career insights, AI predictions, and interactive dashboards.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
  },
  {
    title: "Personal Portfolio",
    description:
      "Premium Apple-inspired portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "GenAI Data Analytics",
    description:
      "Data analytics dashboards and AI-powered insights developed during internship activities.",
    tech: ["Python", "Power BI", "GenAI"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          className="text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*0.2}}
              viewport={{once:true}}
              className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 hover:border-orange-500 transition-all"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech)=>(
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Github className="cursor-pointer hover:text-orange-400" />
                <ExternalLink className="cursor-pointer hover:text-orange-400" />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}