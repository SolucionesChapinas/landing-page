import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <AboutUs />
            <Services />
            <Contact />
        </React.Fragment>
    );
};

export default Home;
