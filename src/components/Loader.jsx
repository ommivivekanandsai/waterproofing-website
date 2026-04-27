import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StunningLanding() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loaded ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [loaded]);

  /* ================= LOADER ================= */
  if (!loaded) {
    return (
      <div className="h-screen w-full bg-[#05070C] flex items-center justify-center overflow-hidden relative">

        {/* ⚡ LIGHT FAST WATER GRID (GPU friendly) */}
        <div className="absolute inset-0 opacity-20 animate-[move_6s_linear_infinite] bg-[radial-gradient(circle,#22d3ee_1px,transparent_1px)] bg-[size:35px_35px]" />

        {/* 🌧 LIGHT RAIN (CSS ONLY - NO DOM LOOP) */}
        <div className="rain-layer absolute inset-0" />

        {/* 💡 CENTER ENERGY WAVE */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />

        {/* CONTENT */}
        <div className="relative text-center z-10">

          {/* SCAN LINE EFFECT */}
          <div className="w-72 h-[2px] bg-white/10 mx-auto overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "220%" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-full w-1/2 bg-cyan-400"
            />
          </div>

          {/* BRAND NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-6xl font-light tracking-[0.25em] mt-8"
          >
            G.N.R WATERPROOFING
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-5 tracking-[0.3em] text-xs uppercase"
          >
            Protecting Structures from Water Damage
          </motion.p>

          {/* PULSE DOT */}
          <div className="mt-8 flex justify-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
          </div>
        </div>

        {/* CSS ONLY RAIN (FAST) */}
        <style>{`
          .rain-layer {
            background-image: linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
            background-size: 2px 80px;
            animation: rainMove 0.7s linear infinite;
            opacity: 0.25;
          }

          @keyframes rainMove {
            from { transform: translateY(-50px); }
            to { transform: translateY(50px); }
          }

          @keyframes move {
            from { transform: translate(0,0); }
            to { transform: translate(-40px, 40px); }
          }
        `}</style>
      </div>
    );
  }

  /* ================= MAIN PAGE ================= */
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">

      {/* CLEAN BACKGROUND (NO HEAVY ANIMATION) */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.12),transparent_50%)]" />

      {/* HERO */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-light"
        >
          Waterproofing That Protects
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-6 max-w-xl"
        >
          Reliable waterproofing solutions for homes, buildings, and industrial structures with long-lasting protection and durability.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-10 py-3 bg-white text-black rounded-full font-medium"
        >
          Explore Services
        </motion.button>
      </div>
    </div>
  );
}