import { motion } from "framer-motion";

function CinematicRepairFlow() {
  const steps = [
    {
      title: "Water Leakage Detected",
      desc: "Moisture penetration identified in slab, terrace, or bathroom surfaces.",
      accent: "from-blue-500/20 to-transparent",
      line: "bg-blue-400",
    },
    {
      title: "Structural Crack Mapping",
      desc: "Cracks and seepage paths are scientifically identified.",
      accent: "from-red-500/20 to-transparent",
      line: "bg-red-400",
    },
    {
      title: "Chemical Penetration",
      desc: "High-grade waterproofing chemicals injected deep into pores.",
      accent: "from-cyan-500/20 to-transparent",
      line: "bg-cyan-400",
    },
    {
      title: "Permanent Waterproof Seal",
      desc: "Surface becomes fully sealed with long-term protection layer.",
      accent: "from-green-500/20 to-transparent",
      line: "bg-green-400",
    },
  ];

  return (
    <section className="relative py-32 bg-[#05070C] text-white overflow-hidden">

      {/* subtle engineered grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* energy wave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.10),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="bg-white/10 px-4 py-2 rounded-full text-sm tracking-widest">
            ENGINEERED WATERPROOFING PROCESS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            From Leakage to Structural Protection
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A scientifically designed waterproofing process using advanced chemical systems.
          </p>
        </div>

        {/* FLOW SYSTEM */}
        <div className="space-y-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* CONNECTING LINE */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-16 w-[2px] h-full bg-white/10">
                  <div className={`w-full h-1/2 ${step.line} animate-pulse`} />
                </div>
              )}

              <div className="flex items-start gap-6">

                {/* STEP NUMBER (clean industrial badge) */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-sm font-semibold">
                  {index + 1}
                </div>

                {/* CONTENT CARD */}
                <div
                  className={`flex-1 rounded-3xl p-6 border border-white/10 backdrop-blur-xl bg-gradient-to-br ${step.accent} transition`}
                >
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">
                    {step.desc}
                  </p>

                  {/* subtle data bar instead of icons */}
                  <div className="mt-5 h-[2px] bg-white/10 overflow-hidden rounded-full">
                    <div className={`h-full w-1/2 ${step.line}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CinematicRepairFlow;