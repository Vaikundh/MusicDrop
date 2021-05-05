import React from 'react'
import './Map.css'
import useAuth from './useAuth'
import SpotifyPlayer from 'react-spotify-web-playback'
const trackUri = 'spotify:playlist:5d4MXj1mu6y9D6n8VtpJuj'
export default function Player({accessToken}) {
    //const accessToken = useAuth(code)
    return <iframe src="https://open.spotify.com/embed/playlist/5d4MXj1mu6y9D6n8VtpJuj" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    //if (!accessToken) return null;
    // return <SpotifyPlayer
    //     token={accessToken}
    //     showSaveIcon
    //     uris={trackUri ? [trackUri]: []}
    // />
}