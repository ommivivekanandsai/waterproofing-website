import { useRef } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function FloatingBar() {
  const callRef = useRef(null);
  const waRef = useRef(null);

  const handleMove = (e, ref) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.08)`;
  };

  const reset = (ref) => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px) scale(1)";
  };

  const createSeal = (e, color) => {
    const btn = e.currentTarget;

    const circle = document.createElement("span");
    circle.className = `seal-circle ${color}`;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = circle.style.height = size + "px";
    circle.style.left = e.clientX - rect.left - size / 2 + "px";
    circle.style.top = e.clientY - rect.top - size / 2 + "px";

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 700);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">

      {/* CALL */}
      <a
        href="tel:+919000548071"
        ref={callRef}
        onMouseMove={(e) => handleMove(e, callRef)}
        onMouseLeave={() => reset(callRef)}
        onClick={(e) => createSeal(e, "blue")}
        className="seal-btn group relative w-14 h-14 rounded-full flex items-center justify-center
        bg-gradient-to-br from-gray-900 to-black
        border border-blue-400/20 shadow-lg overflow-hidden
        transition-all duration-200 will-change-transform"
      >
        <FaPhoneAlt className="relative z-10 text-blue-300" />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919000548071"
        target="_blank"
        rel="noopener noreferrer"
        ref={waRef}
        onMouseMove={(e) => handleMove(e, waRef)}
        onMouseLeave={() => reset(waRef)}
        onClick={(e) => createSeal(e, "green")}
        className="seal-btn group relative w-14 h-14 rounded-full flex items-center justify-center
        bg-gradient-to-br from-gray-900 to-black
        border border-green-400/20 shadow-lg overflow-hidden
        transition-all duration-200 will-change-transform"
      >
        <FaWhatsapp className="relative z-10 text-green-300" />
      </a>

      {/* STYLE */}
      <style>{`
        .seal-btn {
          position: relative;
        }

        /* 🧿 SEAL STAMP EFFECT */
        .seal-circle {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          opacity: 0.6;
          animation: sealExpand 0.7s ease-out forwards;
          pointer-events: none;
          z-index: 0;
        }

        .seal-circle.blue {
          border: 2px solid rgba(59,130,246,0.8);
          box-shadow: 0 0 15px rgba(59,130,246,0.4);
        }

        .seal-circle.green {
          border: 2px solid rgba(34,197,94,0.8);
          box-shadow: 0 0 15px rgba(34,197,94,0.4);
        }

        @keyframes sealExpand {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          60% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>

    </div>
  );
}

export default FloatingBar;