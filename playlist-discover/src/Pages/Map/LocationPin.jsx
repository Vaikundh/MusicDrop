import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import SpotifyLogin from './SpotifyLogin'
import Player from './Player'
import { Container } from 'react-bootstrap'

const code = new URLSearchParams(window.location.search).get('code')
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7ddc0104654c4231ba189acc73fd3782&response_type=code&redirect_uri=http://localhost:3000/Map&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

 const LocationPin = ({ text }) => {
    const openGladePlaylist = () => {
        window.open(AUTH_URL, "_self");
    }

    return(
        <div className="pin" onClick={ openGladePlaylist} > 
            <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
        </div>

  )}

  
export default LocationPin