import { useEffect, useState, useRef } from "react";
import {
  FaSmile,
  FaTools,
  FaAward,
  FaMapMarkedAlt,
} from "react-icons/fa";

/* ---------------- COUNTER ---------------- */
function Counter({ end, start, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(end / 35);

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 40);

    return () => clearInterval(timer);
  }, [end, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { icon: <FaSmile />, value: 1000, suffix: "+", title: "Happy Clients" },
    { icon: <FaTools />, value: 1500, suffix: "+", title: "Projects Completed" },
    { icon: <FaAward />, value: 10, suffix: "+", title: "Years Experience" },
    { icon: <FaMapMarkedAlt />, value: 2, suffix: "", title: "States Served" },
  ];

  /* ---------------- SCROLL TRIGGER ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.4, // 40% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Trusted Waterproofing Experts
          </h2>

          <p className="text-blue-100 mt-5 text-lg leading-8">
            Delivering reliable waterproofing solutions with premium materials,
            expert workmanship and proven results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-7">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden
              bg-white/10 backdrop-blur-md border border-white/20
              rounded-3xl p-8 text-center
              shadow-lg
              transition-all duration-300 ease-out
              hover:scale-[1.06] hover:-translate-y-2
              hover:bg-white/15 hover:border-white/30
              hover:shadow-2xl"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition" />

              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto rounded-2xl bg-white text-blue-600 text-2xl flex items-center justify-center shadow-lg">
                {item.icon}
              </div>

              {/* Counter */}
              <h3 className="relative text-4xl font-bold mt-6">
                <Counter
                  end={item.value}
                  suffix={item.suffix}
                  start={startCount}
                />
              </h3>

              {/* Title */}
              <p className="relative mt-3 text-blue-100 text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-2xl shadow-xl
            hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Book Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;