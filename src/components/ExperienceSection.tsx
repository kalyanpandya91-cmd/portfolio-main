import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "GenAI Powered Data Analytics",
    company: "Internship",
    year: "2026",
    icon: <Briefcase className="w-7 h-7" />,
    description:
      "Worked on AI-powered data analytics, visualization, and business insights using Generative AI tools.",
  },
  {
    title: "Infosys Springboard",
    company: "Learning Program",
    year: "2026",
    icon: <GraduationCap className="w-7 h-7" />,
    description:
      "Completed professional learning modules on Full Stack Development and modern software engineering.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-5xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {experiences.map((item,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*0.2}}
              viewport={{once:true}}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8 hover:border-white/20 transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.company}
                  </p>
                </div>

              </div>

              <p className="text-gray-300 mt-6 leading-8">
                {item.description}
              </p>

              <p className="mt-6 text-orange-400 font-semibold">
                {item.year}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}