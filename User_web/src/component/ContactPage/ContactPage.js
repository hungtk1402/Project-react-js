import './ContactPage.css'
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactPage = () => {
    return (
        <>
            <div className="container contact-section mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <ContactInfo />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
