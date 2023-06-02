import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/resumeClaraMartin.pdf";
import Background from "./Background";

const AboutMe = ({ name }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resumeClaraMartin.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container">
      <Background />
      <div className="contenido">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-4"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img src={aboutMeImg} alt={name} />
          </motion.div>
          <motion.div
            className="personalInfo col-12 col-lg-8"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div>
              <div className="infoContainer">
                <div>
                  <div>
                    <span>
                      Mi nombre es Clara Martín y soy desarrolladora y diseñadora de aplicaciones móviles.
                      Al terminar el liceo me costó encontrar algo que me interesara estudiar; probé con administración de empresas, traductorado, entre otras. En 2021 comencé una carrera en ORT que sin saberlo, iba a cambiar mi vida. Descubrí mi vocación, y desde entonces, no he parado de estudiar.
                      <br></br>
                      <br></br>
                      <br></br>
                      Actualmente, me estoy formando como Analista en Tecnologías de la Información, y gracias a los conocimientos adquiridos como Diseñador Digital, sé bien donde estoy parada y me siento muy calificada en cuanto a herramientas y conocimientos.
                      Estoy muy agradecida de estar donde estoy y sé que voy a seguir creciendo.
                      <br></br><br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="buttonContainer">
                <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                  {downloading ? "Descargando..." : "Descargar Currículum"}
                </button>{" "}
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
