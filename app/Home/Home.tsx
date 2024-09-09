import React from "react";
import Hero from "./Hero/Hero";
import Introduction from "./Introduction/Introduction";
import Services from "./Services/Services";

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <Services />
        </>
    );
};

export default Home;
