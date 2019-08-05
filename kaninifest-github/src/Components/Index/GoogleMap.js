import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from "google-maps-react"

class GoogleMap extends Component {
    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={8}
                styles={{
                    width: "100%",
                    height: 350
                }}
                initialCenter = {{lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBFvVJ2zUJ9LrOhhT2wVT2mkiQBthWZypI'
})(GoogleMap)