import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            KALYAN
          </h2>

          <p className="text-zinc-400 mt-2">
            Computer Science Engineering Student
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/kalyanpandya91-cmd"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/kalyan-b-73609329a"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={28} />
          </a>

          <a href="mailto:kalyanpandya91@gmail.com">
            <Mail size={28} />
          </a>
        </div>

      </div>

      <p className="text-center text-zinc-500 mt-8 text-sm">
        © 2026 Kalyan Durga Prasad B. All Rights Reserved.
      </p>
    </footer>
  );
}