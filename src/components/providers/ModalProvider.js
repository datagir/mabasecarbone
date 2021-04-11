import React, { useState } from 'react'
import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [CO2E, setCO2E] = useState(false)
  const [footprint, setFootprint] = useState(false)
  const [transportation, setTransportation] = useState(false)
  console.log(transportation)
  return (
    <ModalContext.Provider
      value={{
        CO2E,
        setCO2E,
        footprint,
        setFootprint,
        transportation,
        setTransportation,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
