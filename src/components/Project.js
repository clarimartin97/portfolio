import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from "../images/close.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderProyects from "./SliderProyects";


const Project = ({ technologies, title, image, image1, image2, image3, image4, backImage, background, id, github, deployed, video, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const projectStyle = {
    backgroundImage: `url(${backImage})`,
    backgroundSize: background.size,
    backgroundPosition: background.position,
    backgroundRepeat: background.repeat,
    backgroundColor: background.color,
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.div
      ref={ref}

      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={projectStyle}
        className="backgroundImage projectCard "
        onClick={handleOpenModal}
      >
        <div className="textWrap">
          <h3 className="projectTitle">{title}</h3>
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
              padding: "60px",
              display: "flex",
              flexDirection: "column",
              width: "70%",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              zIndex: "999",
              objectFit: "contain",
              "@media (maxWidth: 750px)": {
                backgroundColor: "#101010",
                color: "#9f9f9f",
                margin: "5vw",
                padding: "9vw",
                display: "flex",
                flexDirection: "column",
                width: "80%",
                maxWidth: "600px",
                zIndex: "999",
                objectFit: "contain",
              }
            },
          }}
        >
          <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
          <h3 className="modalTitle">{title}</h3>
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <SliderProyects image1={image1} video={video} image2={image2} image3={image3} image4={image4}></SliderProyects>
          <p className="projectDescription">{description}</p>
          <button className="btn" onClick={() => (window.location.href = github)}>
            Repo de Github
          </button>

        </Modal>
      </div>
    </motion.div >
  );
};

export default Project;
