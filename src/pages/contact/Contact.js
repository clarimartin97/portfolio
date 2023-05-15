import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ className, name, email, location }) => {
  return (
    <section className={`contact ${className}`}>
      <PageHeader title="Contacto" description="Conóceme" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form />
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo /* name={name} location={location} email={email} */ />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
