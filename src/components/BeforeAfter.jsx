import { motion } from "framer-motion";

function BeforeAfter() {
  const items = [
    {
      before:
        "/8.jpeg",
      after:
        "/9.jpeg",
      title: "Terrace Leakage Repair",
    },
    {
      before:
        "/10.jpeg",
      after:
        "/11.jpeg",
      title: "Bathroom Waterproofing",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Real Results
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Before & After Projects
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            See how we transform damaged leaking areas into protected spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-6 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div>
                  <p className="font-semibold text-red-500 mb-3">
                    Before
                  </p>

                  <img
                    src={item.before}
                    alt="Before"
                    className="rounded-2xl h-64 w-full object-cover"
                  />
                </div>

                {/* After */}
                <div>
                  <p className="font-semibold text-green-500 mb-3">
                    After
                  </p>

                  <img
                    src={item.after}
                    alt="After"
                    className="rounded-2xl h-64 w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-6 text-gray-900">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;