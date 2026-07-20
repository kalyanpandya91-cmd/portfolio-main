import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-12 text-center"
        >

          <h2 className="text-5xl font-bold mb-6">
            Resume
          </h2>

          <p className="text-gray-400 mb-8 text-lg">
            Download my latest resume with projects, certifications and technical skills.
          </p>

          <a
            href="/assets/Kalyan_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold"
          >
            <Download size={22} />
            Download Resume
          </a>

        </motion.div>

      </div>
    </section>
  );
}