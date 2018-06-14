import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

const { REACT_APP_GOOGLE_KEY } = process.env;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    console.log("nextProps: ", nextProps, this.props);
    return true;
  }
  render() {
    const style = {
      width: "40%",
      height: "40%"
    };
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={this.props.zoom}
        initialCenter={this.props.initialCenter}
        center={this.props.initialCenter}
      >
        <Marker
          onMouseover={this.onMouseoverMarker}
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={this.props.initialCenter}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_KEY
})(MapContainer);