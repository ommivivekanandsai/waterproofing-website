import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { TAGLINE, DESCRIPTION } from "../constants/brand";


function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            {TAGLINE}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mt-6">
            Stop Water Leakage.{" "}
            <span className="text-blue-600">Permanent Protection</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            {DESCRIPTION}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Non-Demolition Treatment</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>100% Leak Protection</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Advanced Chemicals</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Long-Term Guarantee</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg"
            >
              Get Free Inspection
            </a>

            <a
              href="https://wa.me/919000548071"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-600 px-8 py-4 rounded-xl hover:bg-green-50"
            >
              WhatsApp Now
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/1.jpeg"
            alt="House"
            className="rounded-[30px] shadow-2xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;