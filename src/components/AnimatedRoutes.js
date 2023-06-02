import { Routes, Route, useLocation } from "react-router-dom";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Portfolio />} />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}

          />
        }
      />

      <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
