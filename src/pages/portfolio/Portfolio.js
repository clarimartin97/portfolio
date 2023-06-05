import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";

const projectsPerSection = [
  [1, 2],
  [3, 4, 5],
  [6, 7],
  [8, 9, 10]
]


const Portfolio = () => {
  const ProjectList = () =>
    projectsPerSection.map((cards, a) => (
      < div key={a} className={`row${a + 1}`}>
        {projectData.slice(cards[0] - 1, cards[cards.length - 1]).map((project, i) => (
          <Project
            key={i}
            id={project.id}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            image1={project.image1}
            image2={project.image2}
            image3={project.image3}
            image4={project.image4}
            backImage={project.backImage}
            github={project.github}
            deployed={project.deployed}
            video={project.video}
            background={project.background}
            description={project.description}
          />
        ))}
      </div >
    ));

  return (
    <section className="portfolio">
      <h3 className="pageTitle">Portafolio</h3>
      <div className="contenedorGeneral">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
