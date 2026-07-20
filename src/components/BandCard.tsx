export default function BandCard() {
  return (
    <div className="absolute right-16 top-20 animate-float pointer-events-auto">
      <div className="w-[340px] rounded-3xl overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl shadow-black/60">

        <img
          src="/assets/prince.png"
          alt="Kalyan"
          className="w-full h-[430px] object-cover"
        />

        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            KALYAN
          </h2>

          <p className="text-gray-400 mt-2">
            Computer Science Engineering Student
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
              React
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
              Java
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
              Python
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
              Full Stack
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}