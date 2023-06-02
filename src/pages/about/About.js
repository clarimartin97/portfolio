import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="Sobre mí" />

      <AboutMe name={name} location={location} email={email} availability={availability} />
    </section>
  );
};

export default About;

