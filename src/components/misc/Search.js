import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import SearchBar from './search/SearchBar'

const Wrapper = styled.div`
  height: ${(props) => (props.small ? '7rem' : '33vh')};
  margin-bottom: 7.5rem;
  background: ${(props) => props.theme.colors.second};
  transition: height 400ms ease-out;

  ${(props) => props.theme.mq.small} {
    height: 10rem;
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 46rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 0.5rem;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const Title = styled.h1`
  position: relative;
  z-index: 101;
  margin-bottom: ${(props) => (props.small ? '1.5rem' : '0')};
  font-size: ${(props) => (props.small ? '2rem' : '2.5rem')};
  transition: all 400ms ease-out;

  ${(props) => props.theme.mq.small} {
    font-size: 8vw;
    text-align: center;
  }
`
export default function Search() {
  let location = useLocation()
  const [small, setSmall] = useState(false)
  useEffect(() => {
    setSmall(location.pathname !== '/')
  }, [location])

  return (
    <Wrapper small={small}>
      <Content>
        <StyledLink to='/'>
          <Title small={small}>Ma Base Carbone</Title>
        </StyledLink>
        <SearchBar />
      </Content>
    </Wrapper>
  )
}
