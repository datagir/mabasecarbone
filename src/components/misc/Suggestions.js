import React from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'

const Title = styled.h4`
  text-align: center;
  margin-bottom: 1rem;

  ${(props) => props.theme.mq.small} {
    font-size: 0.875rem;
  }
`
const Listing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const StyledButton = styled(Button)`
  margin: 0.5rem;
  font-size: 0.875rem;

  ${(props) => props.theme.mq.small} {
    margin: 0.25rem;
    font-size: 0.75rem;
  }
`
export default function Suggestions(props) {
  return (
    <>
      <Title>{props.children}</Title>
      <Listing>
        <StyledButton to={'/product/20689'}>Repas avec du boeuf</StyledButton>
        <StyledButton to={'/product/27010'}>Smartphone classique</StyledButton>
        <StyledButton to={'/product/28145'}>TGV</StyledButton>
        <StyledButton to={'/product/27000'}>
          Télévision de 40 à 49 pouces
        </StyledButton>
        <StyledButton to={'/product/22066'}>Ordures ménagères</StyledButton>
      </Listing>
    </>
  )
}
