import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Kumar",
      place: "Hyderabad",
      text: "Excellent waterproofing work. Terrace leakage completely solved. Very professional team.",
    },
    {
      name: "Suresh Reddy",
      place: "Vijayawada",
      text: "Bathroom seepage issue fixed perfectly. Fast response and affordable pricing.",
    },
    {
      name: "Lakshmi Devi",
      place: "Guntur",
      text: "Highly recommended. Honest team and quality materials used.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Client Reviews
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Trusted by hundreds of happy homeowners and businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl" />

              <p className="text-gray-600 leading-8 mt-5">
                {item.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mt-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Name */}
              <div className="mt-6">
                <h3 className="font-bold text-lg text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.place}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;