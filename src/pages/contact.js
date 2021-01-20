import React from "react";
import SEO from "../components/seo";
import ContactForm from "../components/forms/contact-form";

const ContactPage = () => {
    return (
        <>  
            <SEO title="Contact" />
            <h1>Contact Me</h1>
            <hr />
            <ContactForm />
        </>
    );
}

export default ContactPage;