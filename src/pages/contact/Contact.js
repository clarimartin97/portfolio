import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";
import Background from "../../components/Background";

const Contact = () => {
  return (
    <section className="contact">
      <PageHeader title="Contacto" description="Conóceme" />

      <div className="container">
        <div >
          <Background />
          <div className="contenido">
            <div className="contentContacto">
              <div >
                <Form />
              </div>
              <div >
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
