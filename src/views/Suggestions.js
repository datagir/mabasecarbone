import React from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
const Content = styled.div`
  max-width: 46rem;
  padding: 0 0.5rem 2rem;

  ${(props) => props.theme.mq.small} {
    padding-bottom: 1rem;
  }
`
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
export default function Suggestions() {
  return (
    <Wrapper>
      <Content>
        <Title>
          En panne d’inspiration ? Essayez une des suggestions ci dessous.
        </Title>
        <Listing>
          <StyledButton to={'/product/6tuDh3gBO_LhSL9Zgthm'}>
            Repas avec du boeuf
          </StyledButton>
          <StyledButton to={'/product/BtuDh3gBO_LhSL9ZkeFi'}>
            Smartphone classique
          </StyledButton>
          <StyledButton to={'/product/utuDh3gBO_LhSL9ZluNy'}>TGV</StyledButton>
          <StyledButton to={'/product/3tuDh3gBO_LhSL9ZleIx'}>
            Télévision de 40 à 49 pouces
          </StyledButton>
          <StyledButton to={'/product/yduDh3gBO_LhSL9ZddAx'}>
            Ordures ménagères
          </StyledButton>
        </Listing>
      </Content>
    </Wrapper>
  )
}
