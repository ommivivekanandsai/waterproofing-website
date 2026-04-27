import {
  FaHome,
  FaBuilding,
  FaBath,
  FaTint,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <FaHome />,
      title: "Terrace Waterproofing",
      text: "Complete terrace leakage prevention with durable coatings.",
    },
    {
      icon: <FaBath />,
      title: "Bathroom Waterproofing",
      text: "Stop seepage, dampness and tile leakage permanently.",
    },
    {
      icon: <FaBuilding />,
      title: "Roof Protection",
      text: "Weather-resistant roof treatment for homes & buildings.",
    },
    {
      icon: <FaTint />,
      title: "Wall Leakage Repair",
      text: "Fix cracks, moisture stains and wall seepage issues.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Chemical Coating",
      text: "Advanced waterproof membrane and protective coatings.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance Works",
      text: "Inspection, repair and waterproof maintenance solutions.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Premium Waterproofing Solutions
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Reliable treatments for homes, apartments and commercial buildings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-transform duration-300 ease-out will-change-transform"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white text-2xl flex items-center justify-center shadow-md">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;