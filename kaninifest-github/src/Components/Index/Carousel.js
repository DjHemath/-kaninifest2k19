import React from 'react';
import M from "materialize-css/dist/js/materialize"
import Image1 from "../../assets/ESEC_NEW.jpg"


const Carousel = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {fullWidth: true});

        setInterval(()=>instances[0].next(), 3000)
        
      });


    return (
        <div className="Carousel carousel">
            <a className="carousel-item " href="#one!"><img className="responsive-img" src={Image1} /></a>
            <a className="carousel-item" href="#one!"><img className="responsive-img" src={Image1} /></a>
            <a className="carousel-item" href="#one!"><img className="responsive-img" src={Image1} /></a>
            <h3 className="carousel-text">Erode Sengunthar Engineering College</h3>
            <h5 className="carousel-text">proudly presents</h5>
            <h4 className="carousel-text">Advya</h4>
            <h2 className="carousel-text">Welcome</h2>
        </div>
    );
};

export default Carousel;