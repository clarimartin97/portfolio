import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from "../images/close.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderProyects from "./SliderProyects";



const Project = ({ technologies, title, image, image1, image2, image3, image4, color, id, github, deployed, video, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const goToDemo = deployed !== undefined && deployed !== ""
  var buttonText = "Demo"
  if (!goToDemo) {
    buttonText = "Ver Demo"
  }

  return (
    <motion.div
      ref={ref}

      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center p-5"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">Ver trabajo &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt="Laptop displaying the application" />
        </div>
      </div>
      <div className="divModal">
        <Modal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          style={{
            content: {
              backgroundColor: "#101010",
              color: "#9f9f9f",
              margin: "5vw",
              padding: "9vw", /* Utilizando unidades de vista de ventana */
              display: "flex",
              flexDirection: "column",
              width: "80%", /* Utilizando porcentaje */
              maxWidth: "600px", /* Establece un ancho máximo si es necesario */
              margin: "auto", /* Centra horizontalmente el modal */
              zIndex: "999",
              objectFit: "contain"
            },
          }}
        >

          <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
          <h3 className="modalTitle">{title}</h3>
          <SliderProyects image1={image1} image2={image2} image3={image3} image4={image4}></SliderProyects>
          <p className="projectDescription">{description}</p>
          <button className="btn" onClick={() => (window.location.href = github)}>
            Repo de Github
          </button>
          <button className="btn" onClick={() => {
            if (goToDemo) {
              window.open(deployed, '_blank')
            }
            else {
              window.open(video, '_blank')
            }
          }
          }>
            {buttonText}
          </button>
        </Modal>
      </div>
    </motion.div>
  );
};

export default Project;
