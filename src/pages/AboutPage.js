import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
const AboutPage = () => {
    return (
        <>
            <Hero img={aboutBcg} />
            <Info />
        </>
    );
}

export default AboutPage;



