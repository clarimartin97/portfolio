import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const ContactInfo = ({ name, email, location }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Información de contacto</h4>
      <p className="infoDescription">Abierta a nuevas oportunidades. ¡Contáctenme! </p>
      <div className="socialVertical">
        <SocialIcons />
      </div>
    </motion.div>
  );
};

export default ContactInfo;
