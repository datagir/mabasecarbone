import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  margin-right: 3rem;

  ${(props) => props.theme.mq.small} {
    margin: 0 0 1.5rem;
    padding-bottom: 2rem;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 1rem;
      right: 1rem;
      height: 2px;
      background-color: ${(props) => props.theme.colors.text};
      opacity: 0.5;
    }
  }
`
const Name = styled.h1`
  margin: 0.5rem 0;
  font-size: 2.25rem;
  line-height: 1.2;

  ${(props) => props.theme.mq.small} {
    font-size: 1.75rem;
    font-weight: 700;
  }
`
const Attribute = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.3;
  opacity: 0.75;

  ${(props) => props.theme.mq.small} {
    font-size: 1.25rem;
  }
`
const Border = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.3;
  opacity: 0.75;

  ${(props) => props.theme.mq.small} {
    font-size: 1.25rem;
  }
`
const Location = styled.div`
  font-size: 0.875rem;
  opacity: 0.75;
`
export default function Title(props) {
  return (
    <Wrapper>
      <Name>{props.result['Nom_base_français']}</Name>
      {props.result['Nom_attribut_français'] && (
        <Attribute>{props.result['Nom_attribut_français']}</Attribute>
      )}
      {props.result['Nom_frontière_français'] && (
        <Border>{props.result['Nom_frontière_français']}</Border>
      )}
      <Location>({props.result['Localisation_géographique']})</Location>
    </Wrapper>
  )
}
