import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={42} />, color: "text-cyan-400" },
  { name: "HTML5", icon: <FaHtml5 size={42} />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt size={42} />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs size={42} />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript size={42} />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={42} />, color: "text-cyan-300" },
  { name: "Node.js", icon: <FaNodeJs size={42} />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress size={42} />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb size={42} />, color: "text-green-400" },
  { name: "MySQL", icon: <SiMysql size={42} />, color: "text-blue-400" },
  { name: "Python", icon: <FaPython size={42} />, color: "text-yellow-300" },
  { name: "Java", icon: <FaJava size={42} />, color: "text-red-500" },
  { name: "Git", icon: <FaGitAlt size={42} />, color: "text-orange-500" },
  { name: "GitHub", icon: <FaGithub size={42} />, color: "text-white" },
  { name: "VS Code", icon: <VscCode size={42} />, color: "text-blue-500" },
  { name: "Figma", icon: <FaFigma size={42} />, color: "text-pink-500" },
];

export default function SkillsSection() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center gap-5 hover:border-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] transition-all duration-300"
            >

              <div className={skill.color}>
                {skill.icon}
              </div>

              <h3 className="text-white font-semibold text-lg">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}