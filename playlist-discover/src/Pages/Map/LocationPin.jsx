import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

 const LocationPin = ({ text }) => {
  const openGladePlaylist = () => {
     window.open("http://google.com")
}

  return(
    <div className="pin" onClick={ openGladePlaylist} > 
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )}

export default LocationPin