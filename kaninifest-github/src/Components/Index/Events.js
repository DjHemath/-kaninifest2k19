import React from 'react';

const Events = () => {
    return (
        <div id="Events" className="Events">
            <h3 className="ComponentHeading">Events</h3>

            <div className="row EventsGroup">

                <div className="col s12 l6 EventsGroup">
                    <div className="EventsTitle">Technical Events</div>
                    <ul className="EventsList">
                        <li>Paper Presentation</li>
                        <li>Workshop</li>
                        <li>Project Expo</li>
                        <li>Blind Code</li>
                        <li>Tech Quiz</li>
                        <li>Hackathon</li>
                    </ul>
                </div>

                <div className="col s12 l6 EventsGroup">
                    <div className="EventsTitle">Non-Technical Events</div>
                    <ul className="EventsList">
                        <li>Short Film</li>
                        <li>Fun Games</li>
                        <li>Treasuer Hunt</li>
                        <li>Something</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Events;