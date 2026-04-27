import { useEffect, useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

function OfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          <FaTimes />
        </button>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Limited Free Offer
        </span>

        <h2 className="text-3xl font-bold mt-6 text-gray-900">
          Free Leakage Inspection
        </h2>

        <p className="text-gray-600 mt-4 leading-8">
          Book today and get free inspection + expert consultation.
        </p>

        <a
          href="https://wa.me/919000548071"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold flex justify-center items-center gap-2 transition"
        >
          <FaWhatsapp />
          Claim on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default OfferPopup;