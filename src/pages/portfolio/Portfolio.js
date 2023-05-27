import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";


const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
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
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        video={project.video}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Portafolio" description="Les muestro mi trabajo" />
      <div className="contenedorGeneral">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
