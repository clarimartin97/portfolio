import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/aboutme.jpg";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ className, name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },

  };

  return (
    <section className={`landing ${className}`} style={styles.landing}>
      <Draw />
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("Desarrolladora de Aplicaciones")
                .pauseFor(1500)
                .deleteChars(9)
                .typeString("")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Desarrolladora de Aplicaciones")
                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Clara Martin"
        />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
