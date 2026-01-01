import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";

function Services() {
  const sliderRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    { icon: "💻", title: "Web Development", desc: "Responsive & scalable websites." },
    { icon: "📱", title: "App Development", desc: "Modern mobile & web apps." },
    { icon: "🎨", title: "UI / UX Design", desc: "Clean & user-friendly designs." },
    { icon: "⚙️", title: "Backend Development", desc: "Secure server-side solutions." },
    { icon: "🔐", title: "Security & Maintenance", desc: "Reliable support & protection." }
  ];

  /* Visibility / focus handlers */
  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden);
    const onBlur = () => setIsPaused(true);
    const onFocus = () => setIsPaused(false);

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  /* Auto Scroll (runs only when not paused) */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        // Guard in case element was removed
        if (!slider) return;
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }, 25);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  /* Pause auto-scroll temporarily (e.g., after arrow click or touch) */
  const pauseAutoTemporarily = (ms = 2000) => {
    setIsPaused(true);
    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), ms);
  };

  /* Arrow Controls */
  const slideLeft = () => {
    if (!sliderRef.current) return;
    pauseAutoTemporarily();
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    pauseAutoTemporarily();
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  /* Cleanup timeout on unmount */
  useEffect(() => {
    return () => clearTimeout(pauseTimeoutRef.current);
  }, []);

  return (
    <div className="container my-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h1 className="fw-bold text-primary">Our Services</h1>
        <p className="text-muted">Explore our professional digital solutions</p>
      </motion.div>

      {/* Slider Wrapper */}
      <div className="slider-wrapper">
        {/* Left Arrow */}
        <button className="slider-btn left" onClick={slideLeft} aria-label="Scroll left">
          ❮
        </button>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          className="services-slider"
          drag="x"
          whileTap={{ cursor: "grabbing" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => pauseAutoTemporarily(3000)}
          onTouchEnd={() => pauseAutoTemporarily(2000)}
        >
          {[...services, ...services].map((service, index) => (
            <motion.div key={index} className="service-card" whileHover={{ scale: 1.05 }}>
              <div className="icon-box">{service.icon}</div>
              <h5 className="mt-3">{service.title}</h5>
              <p className="text-muted">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button className="slider-btn right" onClick={slideRight} aria-label="Scroll right">
          ❯
        </button>
      </div>
    </div>
  );
}

export default Services;