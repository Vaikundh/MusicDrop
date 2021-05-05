import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import  LocationPin  from './LocationPin'
import SpotifyLogin from './SpotifyLogin'
import Player from './Player'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const code = new URLSearchParams(window.location.search).get('code')
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7ddc0104654c4231ba189acc73fd3782&response_type=code&redirect_uri=http://localhost:3000/Map&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const openGladePlaylist = () => {
  window.open(AUTH_URL);
}



const API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`

const location1 = {
    address: 'Memorial Glade',
    lat: 37.873183,
    lng: -122.259623,
  }

const PlayerOrLogin = () => {

  return (code ?
    <Player accessToken className="spotify-embed"></Player>
    :
    <SpotifyLogin accessToken></SpotifyLogin>
  )
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
        <iframe className="spotify-embed" src="https://open.spotify.com/embed/playlist/5d4MXj1mu6y9D6n8VtpJuj" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  )

  export default Map;
