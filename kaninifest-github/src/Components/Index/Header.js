import React from 'react';
import M from "materialize-css/dist/js/materialize"

const SmoothScroll = (selector, device="desktop") =>
{
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    if(device !== "desktop")
    {
        instances[0].close()
    }
    document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
}

const Header = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });
    return (
        <div className="Header navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="fa fa-bars hamburger"></i></a>
                <ul id="DesktopMenu" className="right hide-on-med-and-down">
                    <li onClick={()=>SmoothScroll('body')}>Home</li>
                    <li onClick={()=>SmoothScroll('#About')}>About</li>
                    <li onClick={()=>SmoothScroll('#Events')}>Events</li>
                    <li onClick={()=>SmoothScroll('#Contact')}>Contact</li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">

                <div className="row">

                    <div className="col s12 SidenavLogo">
                        Logo
                    </div>

                    <div className="col s12 MenuLinks">
                        <li onClick={()=>SmoothScroll('body', "mobile")}><i className="fa fa-home fa-custom-size"></i> Home</li>
                        <li onClick={()=>SmoothScroll('#About', "mobile")}><i className="fa fa-user fa-custom-size"></i> About</li>
                        <li onClick={()=>SmoothScroll('#Events', "mobile")}><i className="fa fa-calendar fa-custom-size"></i> Events</li>
                        <li onClick={()=>SmoothScroll('#Contact', "mobile")}><i className="fa fa-phone fa-custom-size"></i> Contact</li>
                    </div>

                </div>

            </ul>
        </div>
    );
};

export default Header;