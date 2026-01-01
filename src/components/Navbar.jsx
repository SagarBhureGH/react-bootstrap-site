import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const collapseRef = useRef(null);
  const location = useLocation();

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Animate open/close via max-height
  useEffect(() => {
    const el = collapseRef.current;
    if (!el) return;

    if (open) {
      el.classList.add("show");
      el.style.maxHeight = el.scrollHeight + "px";
    } else {
      el.style.maxHeight = "0px";
      // remove 'show' after transition to keep DOM class similar to bootstrap
      const handle = setTimeout(() => el.classList.remove("show"), 350);
      return () => clearTimeout(handle);
    }
  }, [open]);

  // Ensure collapse is fully visible on wide screens
  useEffect(() => {
    function onResize() {
      const el = collapseRef.current;
      if (!el) return;
      if (window.innerWidth >= 992) {
        el.style.maxHeight = "";
        el.classList.add("show");
      } else if (!open) {
        el.style.maxHeight = "0px";
        el.classList.remove("show");
      }
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">React Web App</Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarMenu"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarMenu"
          ref={collapseRef}
          className="collapse navbar-collapse collapse-custom"
        >
          <ul className="navbar-nav ms-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={() => setOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setOpen(false)}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;