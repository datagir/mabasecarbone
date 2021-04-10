import React from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import Emoji from 'components/base/Emoji'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -1rem 2rem;

  ${(props) => props.theme.mq.small} {
    margin: 0 -0.5rem 2rem;
  }
`
const Title = styled.h2`
  position: relative;
  margin-bottom: 2rem;
  text-align: center;
`
const Equivalent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(33.3333333% - 2rem);
  margin: 0 1rem 1.5rem;
  padding: 1.5rem 1rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.second};
  ${(props) => props.theme.shadow};

  ${(props) => props.theme.mq.small} {
    width: calc(50% - 1rem);
    margin: 0 0.5rem 1rem;

    button {
      font-size: 0.875rem;
    }
  }
`
const Top = styled.div`
  margin-bottom: 1.5rem;
`
const StyledEmoji = styled(Emoji)`
  margin-bottom: 0.5rem;
  font-size: 3rem;
`
const Number = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
`
const Label = styled.span`
  display: block;
  font-size: 1rem;
`
export default function Equivalents(props) {
  const value = parseFloat(
    props.result['Total_poste_non_décomposé'].replace(',', '.')
  )
  return (
    <>
      <Title>Soit l'équivalent de</Title>
      <Wrapper>
        <Equivalent>
          <Top>
            <StyledEmoji>📱</StyledEmoji>
            <Number>{Math.round((value / 16.5) * 100) / 100}</Number>
            <Label>
              smartphone
              <br />
              (classique)
            </Label>
          </Top>
          <Button>En Savoir +</Button>
        </Equivalent>
        <Equivalent>
          <Top>
            <StyledEmoji>🚗</StyledEmoji>
            <Number>{Math.round((value / 0.193) * 100) / 100}km</Number>
            <Label>
              en voiture
              <br />
              (moteur thermique)
            </Label>
          </Top>
          <Button>En Savoir +</Button>
        </Equivalent>
        <Equivalent>
          <Top>
            <StyledEmoji>🌍</StyledEmoji>
            <Number>{Math.round((value / 10000) * 10000) / 100}%</Number>
            <Label>de l'empreinte carbone annuelle d'un français</Label>
          </Top>
          <Button>En Savoir +</Button>
        </Equivalent>
      </Wrapper>
    </>
  )
}
