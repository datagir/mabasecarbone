import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import MagicLink from 'components/base/MagicLink'
import SearchContext from 'utils/SearchContext'
import SearchBar from './search/SearchBar'

const Wrapper = styled.div`
  height: ${(props) => (props.small ? '7rem' : '33vh')};
  margin-bottom: 7.5rem;
  background: ${(props) => props.theme.colors.second};
  transition: height 400ms ease-out;

  ${(props) => props.theme.mq.small} {
    height: ${(props) => (props.small ? '4.5rem' : '10rem')};
    margin-bottom: 4rem;
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
const StyledLink = styled(MagicLink)`
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
    font-size: ${(props) => (props.small ? '6vw' : '8vw')};

    text-align: center;
  }
`
export default function Search() {
  let location = useLocation()
  const [small, setSmall] = useState(false)
  const { setSearch } = useContext(SearchContext)
  useEffect(() => {
    setSmall(location.pathname !== '/')
  }, [location])

  return (
    <Wrapper small={small}>
      <Content>
        <StyledLink to='/' onClick={() => setSearch('')}>
          <Title small={small}>Ma Base Carbone</Title>
        </StyledLink>
        <SearchBar />
      </Content>
    </Wrapper>
  )
}
