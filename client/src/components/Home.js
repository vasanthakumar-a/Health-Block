import React from 'react'
import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "../data/data.json";

export const Home = () => { 
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
        </div>
      );
}

export default Home;