import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState } from "react";
import Landing from "./components/Landing";

function App() {
  const personalDetails = {
    name: "Clara Martín",
    location: "Montevideo, Uruguay",
    email: "97.claramartin@gmail.com",
    availability: "Abierta a nuevas oportunidades laborales",
  };

  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 8000);

  if (showLoader) {
    return <Landing name={personalDetails.name} />;
  } else {
    return (
      <>
        <Header />
        <AnimatedRoutes personalDetails={personalDetails} />
      </>
    );
  }
}

export default App;