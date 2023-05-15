import aboutMeImg from "../images/aboutme.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/resumeClaraMartin.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
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
    <div className="aboutContainer container">
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
                    <br></br>Durante mi carrera, tuve un compañero muy especial que me acompañó en todo momento: mi perra Pochi. Ella estuvo presente en cada paso de mi camino, desde las primeras clases hasta los proyectos finales. Es increíble cómo los animales pueden ser una fuente de apoyo y motivación en nuestras vidas. Estoy agradecida de tenerla a mi lado y de haber podido compartir este camino juntas.
                    <br></br>
                    <br></br>
                    Actualmente, me estoy formando como Analista en Tecnologías de la Información, y gracias a los conocimientos adquiridos como Diseñador Digital, sé bien donde estoy parada y me siento muy calificada en cuanto a herramientas y conocimientos.
                    Estoy muy agradecida de estar donde estoy y sé que voy a seguir creciendo.
                    <br></br>
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
  );
};

export default AboutMe;
