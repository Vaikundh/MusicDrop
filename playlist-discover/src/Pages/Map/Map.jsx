import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import './LocationPin'
let API_KEY = 'AIzaSyBtt-O9TvFLdHzfEgGOFACMfNPY7LUjbig';

// import 
// import { Droplet } from '@react-feather';
//import locationIcon from '@iconify/icons-mdi/map-marker'

const location1 = {
    address: 'Sather Rd, Berkeley, CA',
    lat: 37.873183,
    lng: -122.259623,
  }

  // const LocationPin = ({ text }) => (
  //   <div className="pin">
  //     <Icon icon={Droplet} className="pin-icon" />
  //     <p className="pin-text">{text}</p>
  //   </div>
  // )

  //add more locations
  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Add to our playlist at the Memorial Glade!</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location1}
          defaultZoom={zoomLevel}
        >
        
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map;