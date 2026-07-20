import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

const education = [
  {
    icon: <GraduationCap size={28} />,
    year: "2024 - Present",
    title: "B.E. Computer Science & Engineering",
    place: "Jai Shriram Engineering College",
    description:
      "Currently pursuing my Bachelor's degree with a strong interest in Full Stack Development, Artificial Intelligence, and Software Engineering.",
  },
  {
    icon: <School size={28} />,
    year: "2022 - 2024",
    title: "Higher Secondary Education",
    place: "Jawahar Navodaya Vidyalaya",
    description:
      "Completed Higher Secondary with a solid academic foundation in Mathematics and Science.",
  },
  {
    icon: <BookOpen size={28} />,
    year: "2020 - 2022",
    title: "Secondary School",
    place: "Jawahar Navodaya Vidyalaya",
    description:
      "Completed secondary education while developing problem-solving and analytical skills.",
  },
];

export default function EducationTimeline() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-white text-center mb-20"
        >
          Education Journey
        </motion.h2>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-orange-500 rounded-full"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: .8,
                delay: index * .2,
              }}
              className="relative flex gap-8 mb-16"
            >

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-black z-10">
                {item.icon}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-500 transition">

                <p className="text-orange-400 font-semibold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {item.title}
                </h3>

                <p className="text-lg text-gray-400 mt-2">
                  {item.place}
                </p>

                <p className="text-gray-500 mt-4 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}