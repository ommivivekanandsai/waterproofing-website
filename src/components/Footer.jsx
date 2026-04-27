import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  const works = [
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
  ];

  return (
    <>
      {/* Gallery */}
      <section
        id="gallery"
        className="py-24 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Recent Works
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
              Waterproofing Projects Showcase
            </h2>

            <p className="text-gray-600 text-lg mt-5 leading-8">
              See some of our completed terrace, bathroom, tank and leakage repair projects.
            </p>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7">
            {works.map((img, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl shadow-lg"
              >
                <img
                  src={img}
                  alt="Project"
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg transition"
            >
              Request Free Inspection
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1220] text-white pt-20 pb-8">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              {/* LOGO REPLACED HERE */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/logo.png"
                  alt="G.N.R Waterproofing Logo"
                  className="w-10 h-10 object-contain drop-shadow-md"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  G.N.R Waterproofing
                </h2>

                <p className="text-sm text-slate-400">
                  Trusted Protection Experts
                </p>
              </div>

            </div>

            <p className="text-slate-400 mt-6 leading-8">
              Premium waterproofing services for homes, apartments and commercial buildings.
            </p>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Services</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Terrace Waterproofing</li>
              <li>Bathroom Leakage Repair</li>
              <li>Roof Protection</li>
              <li>Wall Crack Repair</li>
              <li>Water Tank Treatment</li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Service Areas</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Andhra Pradesh</li>
              <li>Telangana</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Info</h3>

            <div className="space-y-4 text-slate-400">

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                +91 9000548071
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                Andhra Pradesh, India
              </p>

              <p className="flex items-center gap-3">
                <FaClock className="text-blue-500" />
                Mon - Sun : 8AM to 8PM
              </p>

            </div>

            <a
              href="https://wa.me/919000548071"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-600 mt-14 pt-6 text-center text-slate-500 text-sm px-6">
          © G.N.R Waterproofing. All Rights Reserved.
        </div>

      </footer>
    </>
  );
}

export default Footer;