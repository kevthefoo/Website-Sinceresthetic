import React from "react";
import Hero from "./Hero/Hero";
import Introduction from "./Introduction/Introduction";
import Services from "./Services/Services";
import Enviroment from "./Enviroment/Enviroment";
const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <Services />
            <Enviroment />
        </>
    );
};

export default Home;
