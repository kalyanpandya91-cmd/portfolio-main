import { motion } from "framer-motion";

const certificates = [
  {
    title: "TATA Forage",
    course: "GenAI Powered Data Analytics Job Simulation",
    image: "/assets/tata.png",
  },
  {
    title: "Infosys Springboard",
    course: "Virtualization and Cloud Computing",
    image: "/assets/infosyscloud.png",
  },
  {
    title: "Infosys Springboard",
    course: "Mastering Git",
    image: "/assets/infosysgit.png",
  },
  {
    title: "Bajaj",
    course: "Bajaj Manufacturing Systems",
    image: "/assets/bajaj.png",
  },
  {
    title: "LinkSkill",
    course: "Power BI",
    image: "/assets/linkskill.png",
  },
];

export default function CertificatesSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {certificate.course}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}