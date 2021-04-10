import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { useProduct } from 'utils/api'
import Suggestions from 'components/misc/Suggestions'
import Title from './product/Title'
import Card from './product/Card'
import Details from './product/Details'
import Equivalents from './product/Equivalents'

const Wrapper = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms;
  width: 46rem;
  margin: 0 auto;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
const Content = styled.div``
const MobileCard = styled.div`
  margin-bottom: 3rem;
  ${(props) => props.theme.mq.small} {
    padding: 1rem 1rem 1.5rem;
    text-align: center;
    background-color: ${(props) => props.theme.colors.second};
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
  }
`
export default function Search() {
  let { id } = useParams()
  const { data } = useProduct(id)

  return (
    <Wrapper visible={data}>
      {data && data.results[0] ? (
        <Content>
          <MobileCard>
            <Header>
              <Title result={data.results[0]} />
              <Card result={data.results[0]} />
            </Header>
            <Details />
          </MobileCard>
          <Equivalents result={data.results[0]} />
        </Content>
      ) : (
        <Suggestions>
          Ce produit n'existe pas :(
          <br />
          Essayez une des suggestions ci dessous.
        </Suggestions>
      )}
    </Wrapper>
  )
}
