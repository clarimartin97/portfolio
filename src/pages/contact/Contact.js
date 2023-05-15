import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ className }) => {
  return (
    <section className={`contact ${className}`}>
      <PageHeader title="Contacto" description="Conóceme" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form />
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
