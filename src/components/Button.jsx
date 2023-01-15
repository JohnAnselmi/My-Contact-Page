import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { Colors } from '../utilities/Colors'

export default function Button({ details }) {
  function getIconFromType(type) {
    switch (type) {
      case 'call':
        return <FaPhone color={Colors.primary} />
      case 'email':
        return <FaEnvelope color={Colors.primary} />
      default:
        return 'error'
    }
  }

  return (
    <a target="_blank" href={details.link}>
      <div className="circleButton">{getIconFromType(details.type)}</div>
    </a>
  )
}
