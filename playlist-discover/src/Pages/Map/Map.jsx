import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import './LocationPin'
let API_KEY = 'AIzaSyBtt-O9TvFLdHzfEgGOFACMfNPY7LUjbig';

//import { Icon } from '@iconify/react'
//import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

//   const LocationPin = ({ text }) => (
//     <div className="pin">
//       <Icon icon={locationIcon} className="pin-icon" />
//       <p className="pin-text">{text}</p>
//     </div>
//   )
  //add more locations
  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Add to our playlist at the Memorial Glade!</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
         
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map;