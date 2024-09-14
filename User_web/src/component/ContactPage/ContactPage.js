import './ContactPage.css'
import HeaderComponent from '../HeaderAndFooter/HeaderComponent';
import FooterComponent from '../HeaderAndFooter/FooterComponent';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactPage = () => {
    return (
        <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
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
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default ContactPage;
