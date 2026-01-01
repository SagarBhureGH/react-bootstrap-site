import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const designations = [
    { icon: "💻", title: "Web Development", description: "We create responsive and high-performance websites." },
    { icon: "📱", title: "App Development", description: "Modern mobile and web apps using latest technologies." },
    { icon: "🎨", title: "UI / UX Design", description: "Clean, attractive, and user-friendly design solutions." },
    { icon: "⚙️", title: "Backend Development", description: "Robust and scalable server-side solutions." },
    { icon: "🔐", title: "Security & Maintenance", description: "Keep your applications secure and up-to-date." }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-primary text-white rounded-3">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Welcome to MyWebsite</h1>
          <p className="col-md-8 mx-auto fs-5">
            Build fast, responsive, and modern web applications using
            React and Bootstrap.
          </p>
          <Link to="/" className="btn btn-light btn-lg mt-3">
            Get Started
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="container">
        <h2 className="text-center mb-4 text-primary">Our Services</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h5 className="card-title text-success">Web Development</h5>
                <p className="card-text">
                  We create responsive and high-performance websites.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h5 className="card-title text-warning">App Development</h5>
                <p className="card-text">
                  Modern mobile and web apps using latest technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h5 className="card-title text-danger">UI / UX Design</h5>
                <p className="card-text">
                  Clean, attractive, and user-friendly design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Slider Section */}
      <div className="container p-5 mt-5">
        <h2 className="text-center mb-4 text-primary">Our Expertise</h2>
        
        <div className="slider-container">
          <div className="slider">
            {designations.map((item, index) => (
              <div key={index} className="slider-item">
                <div className="card shadow h-100 text-center slider-card">
                  <div className="card-body">
                    <div className="icon-container">
                      <span className="icon">{item.icon}</span>
                    </div>
                    <h5 className="card-title mt-3">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-dark text-white text-center p-5 mt-5 rounded">
        <h2>Ready to start your project?</h2>
        <p>Contact us today and grow your business with us.</p>
        <Link to="/contact" className="btn btn-warning btn-lg" style={{ textDecoration: 'none' }}>
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Home;