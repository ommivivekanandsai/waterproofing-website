import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const text =
      `Hello G.N.R Waterproofing%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Message: ${form.message}`;

    window.open(
      `https://wa.me/919000548071?text=${text}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Book Free Inspection Today
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Fast response for terrace leakage, bathroom seepage and full waterproofing work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold">
              Request Callback
            </h3>

            <div className="space-y-5 mt-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border rounded-xl px-5 py-4"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Explain your leakage issue"
                onChange={handleChange}
                className="w-full border rounded-xl px-5 py-4"
              ></textarea>

              <button
                onClick={sendWhatsApp}
                className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2"
              >
                <FaWhatsapp />
                Send on WhatsApp
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Trust */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex gap-1 text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h3 className="text-2xl font-bold mt-4">
                Trusted Local Experts
              </h3>

              <p className="text-gray-600 mt-3 leading-8">
                Hundreds of satisfied customers trust our waterproofing solutions.
              </p>

              <div className="space-y-4 mt-6">
                <p className="flex gap-3 items-center">
                  <FaPhoneAlt className="text-blue-600" />
                  +91 9000548071
                </p>

                <p className="flex gap-3 items-center">
                  <FaMapMarkerAlt className="text-blue-600" />
                  Andhra Pradesh & Telangana
                </p>

                <p className="flex gap-3 items-center">
                  <FaCheckCircle className="text-green-500" />
                  Free Site Inspection
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Ram%20Talkies,%20Visakhapatnam&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;