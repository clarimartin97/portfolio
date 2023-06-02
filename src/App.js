import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Clara Martín",
    location: "Montevideo, Uruguay",
    email: "97.claramartin@gmail.com",
    availability: "Abierta a nuevas oportunidades laborales",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
