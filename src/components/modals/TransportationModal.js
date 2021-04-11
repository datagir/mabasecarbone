import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'
import Button from 'components/base/Button'

const Title = styled.h2``
const Text = styled.p``
export default function TransportationModal() {
  const { transportation, setTransportation } = useContext(ModalContext)

  return (
    <Modal open={transportation} setOpen={setTransportation}>
      <Title>Modes de transport</Title>
      <Text></Text>
      <Text>
        Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
        comparer différents moyens de transport grace à notre simulateur{' '}
        <MagicLink to={'http://monimpacttransport.fr/'}>
          Mon Impact Transport
        </MagicLink>
        .
      </Text>
      <Button to={`http://monimpacttransport.fr/`}>
        Voir Mon Impact Transport
      </Button>
    </Modal>
  )
}
