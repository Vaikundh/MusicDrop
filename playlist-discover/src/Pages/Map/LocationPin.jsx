import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

function openGladePlaylist() {
    if(onclick===true) window.open("http://google.com");
}
export const LocationPin = ({ text }) => (
    <div className="pin" onClick={openGladePlaylist()} > 
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

