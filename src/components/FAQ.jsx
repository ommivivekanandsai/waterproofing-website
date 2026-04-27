import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "How much does waterproofing cost?",
      a: "Pricing depends on area size, leakage condition and material used. Contact us for a free quote.",
    },
    {
      q: "How long does waterproofing last?",
      a: "With quality materials and proper application, waterproofing can last many years.",
    },
    {
      q: "Do you provide terrace leakage repair?",
      a: "Yes, terrace leakage treatment is one of our main services.",
    },
    {
      q: "Which areas do you serve?",
      a: "We provide services across Andhra Pradesh and Telangana.",
    },
    {
      q: "Do you inspect before work starts?",
      a: "Yes, we provide site inspection to identify the root cause before treatment.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Common Customer Questions
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Everything you need to know before booking our service.
          </p>
        </div>

        {/* Items */}
        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold text-gray-900"
              >
                {item.q}

                {open === index ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;