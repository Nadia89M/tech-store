import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";
const ContactPage = () => {
    return (
        <>
            <Hero img={contactImg} />
            <Contact />
        </>
    );
}

export default ContactPage;