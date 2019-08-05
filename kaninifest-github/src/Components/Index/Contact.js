import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import LocationImg from "../../assets/location.png"

class Contact extends Component {
    render() {
        return (
            <div id="Contact" className="Contact">
                <h4 className="ComponentHeading">
                    Contact Us
                </h4>

                <div className="row ContactGroups">

                    <div className="col s12 l4 ContactGroup">
                        <div className="ContactType">Staff</div>
                        <div className="ContactDetailsGroup">
                            <li className="fa fa-phone fa-custom ContactIcon"></li>
                            <a className="ContactDetails" href="tel:9384288287">9384288287</a>
                        </div>
                    </div>

                    <div className="col s12 l4 ContactGroup">
                        <div className="ContactType">Staff</div>
                        <div className="ContactDetailsGroup">
                            <li className="fa fa-phone fa-custom ContactIcon"></li>
                            <a className="ContactDetails" href="tel:9384288287">9384288287</a>
                        </div>
                    </div>

                    <div className="col s12 l4 ContactGroup">
                        <div className="ContactType">Event</div>
                        <div className="ContactDetailsGroup">
                            <li className="fa fa-envelope-o ContactIcon"></li>
                            <a className="ContactDetails" href="mailto:esec2k19@gmail.com">esec2k19@gmail.com</a>
                        </div>
                    </div>

                </div>

                <div className="ContactBoxContainer row">

                    <div className="ContactBox col s12 l6">
                        <form>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="name" type="text" class="validate" />
                                    <label for="name">Name</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                <textarea id="message" class="materialize-textarea"></textarea>
                                <label for="message">Message....</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12 align-center">
                                    <button className="waves-effect waves-light btn btn-lg">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="ContactMap col s12 l6">
                        {/* <GoogleMap /> */}
                        <a href="https://maps.google.com/?daddr=Erode+Sengunthar+Engineering+College" target="_blank">
                            <img className="LocationImg" src={LocationImg} href="Location" />
                        </a>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Contact;