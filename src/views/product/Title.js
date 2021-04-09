import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
`
const Name = styled.h1`
  margin: 0.5rem 0;
  font-size: 2.25rem;
  line-height: 1.2;
`
const Attribute = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.3;
  opacity: 0.75;
`
const Border = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.3;
  opacity: 0.75;
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
