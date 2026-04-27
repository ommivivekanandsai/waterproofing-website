import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
      >
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
          Need Immediate Help?
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
          Stop Leakage Before It Gets Worse
        </h2>

        <p className="text-blue-100 text-lg mt-5 max-w-3xl mx-auto leading-8">
          Get a free inspection and expert waterproofing solution today.
          Fast response across Andhra Pradesh & Telangana.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <a
            href="tel:+919000548071"
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition flex items-center gap-2"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://wa.me/919000548071"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-semibold shadow-xl transition flex items-center gap-2"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;