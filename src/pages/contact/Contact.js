import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";
import Background from "../../components/Background";

const Contact = ({ className }) => {
  return (
    <section className={`contact ${className}`}>
      <PageHeader title="Contacto" description="Conóceme" />

      <div className="contactWrap container">
        <div className="container">
          <Background />
          <div className="contenido">
            <div className="row">
              <div className="col-12 col-lg-6">
                <Form />
              </div>
              <div className="col-12 col-lg-6">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
