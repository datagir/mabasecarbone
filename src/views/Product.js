import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { useProduct } from 'utils/api'
import Title from './product/Title'
import Card from './product/Card'
import Details from './product/Details'
import Equivalents from './product/Equivalents'

const Wrapper = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms;
`
const Content = styled.div`
  width: 46rem;
  margin: 0 auto;
  padding: 0 0.5rem;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export default function Search() {
  let { id } = useParams()
  const { data } = useProduct(id)

  return (
    <Wrapper visible={data}>
      {data && data.results[0] && (
        <Content>
          <Header>
            <Title result={data.results[0]} />
            <Card result={data.results[0]} />
          </Header>
          <Details />
          <Equivalents result={data.results[0]} />
        </Content>
      )}
    </Wrapper>
  )
}
