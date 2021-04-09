import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-width: 20rem;
  padding: 1rem 1rem 1.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.second};
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`
const Total = styled.span`
  display: block;
  font-size: 4rem;
  font-weight: 700;
`
const Unit = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`
const Uncertainty = styled.span`
  font-size: 0.875rem;
  opacity: 0.75;
`
export default function Search(props) {
  return (
    <Wrapper>
      <Total>{props.result['Total_poste_non_décomposé']}</Total>
      <Unit>{props.result['Unité_français']}</Unit>
      <Uncertainty>
        Incertitude :{' '}
        {props.result['Incertitude']
          ? props.result['Incertitude'] + '%'
          : 'Pas de donnée'}
      </Uncertainty>
    </Wrapper>
  )
}
