import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import FloatingBar from "../components/FloatingBar";
import Loader from "../components/Loader";
import CursorGlow from "../components/CursorGlow";
import CinematicRepairFlow from "../components/CinematicRepairFlow";
import OfferPopup from "../components/OfferPopup";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CursorGlow />

      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Navbar />
          <Hero />
          <Services />
          <CinematicRepairFlow />
          <WhyUs />
          <BeforeAfter />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
          <Footer />
          <FloatingBar />
          <BackToTop />
          <OfferPopup />
        </motion.div>
      )}
    </>
  );
}

export default Home;