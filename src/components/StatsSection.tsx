import { motion } from "framer-motion";

const stats = [
  {
    number: "3+",
    title: "Projects",
    color: "text-orange-500",
  },
  {
    number: "5+",
    title: "Certificates",
    color: "text-blue-500",
  },
  {
    number: "8.5+",
    title: "CGPA",
    color: "text-green-500",
  },
  {
    number: "10+",
    title: "Technologies",
    color: "text-pink-500",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          My Journey in Numbers
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 text-center shadow-xl"
            >
              <h1 className={`text-6xl font-black ${item.color}`}>
                {item.number}
              </h1>

              <p className="mt-4 text-gray-300 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}