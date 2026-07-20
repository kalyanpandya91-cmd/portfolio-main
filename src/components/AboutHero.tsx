import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.35em] text-orange-500 mb-4">
            About Me
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Hi,
            <br />
            I'm
            <span className="text-orange-500"> Kalyan.</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            I'm a Computer Science Engineering student passionate about
            building modern web applications, AI-powered software,
            and beautiful user experiences.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 duration-300">
              Download Resume
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black duration-300">
              Contact Me
            </button>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute -inset-3 rounded-full bg-orange-500 blur-3xl opacity-25"></div>

            <img
              src="/assets/prince.png"
              alt="Kalyan"
              className="relative w-[360px] h-[360px] object-cover rounded-full border-4 border-orange-500 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}