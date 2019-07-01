import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Featured from "../components/HomePage/Featured";
import Services from "../components/HomePage/Services";

const HomePage = () => {
    return (
        <>
            <Hero title="awesome gadgets" max="true">
                <Link to="/products" className="main-link" style={{ margin: "2rem" }}>our products</Link>
            </Hero>
            <Services />
            <Featured />
        </>
    );
}


export default HomePage;