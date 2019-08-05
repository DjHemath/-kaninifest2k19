import React, {Fragment} from 'react';
import Header from "./Header"
import Carousel from "./Carousel"
import About from "./About"
import Events from "./Events"
import Contact from "./Contact"
import Footer from "./Footer"

import "../../assets/fa.css"

import "./Index.css"

const Rule = () =>
{
  return <div className="divider"></div>
}


const Index = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Rule />
            <About />
            <Rule />
            <Events />
            <Rule />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;