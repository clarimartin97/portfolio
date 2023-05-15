import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";

const AnimatedRoutes = ({ className, personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing className={className} name={personalDetails.name} tagline={personalDetails.tagline} />} />
      <Route
        path="/about"
        element={
          <About
            className={className}
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route
        path="/contact"
        element={
          <Contact className={className} name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
