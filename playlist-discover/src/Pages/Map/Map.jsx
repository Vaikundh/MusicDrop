import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import  LocationPin  from './LocationPin'
//import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyLogin from './SpotifyLogin'
import 'bootstrap/dist/css/bootstrap.min.css'

const API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`

const location1 = {
    address: 'Memorial Glade',
    lat: 37.873183,
    lng: -122.259623,
  }


  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location1}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location1.lat}
            lng={location1.lng}
            text={location1.address}
          />
        </GoogleMapReact>
        <SpotifyLogin/>
      </div>
    </div>
  )

  export default Map;
