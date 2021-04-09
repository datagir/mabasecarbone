import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`
const Button = styled.button`
  align-self: center;
  margin-bottom: 1rem;
  padding: 0;
  font-weight: 300;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.ter};
  background: none;
  border: none;
  cursor: pointer;
`
const Content = styled.div``
export default function Details(props) {
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Button onClick={() => setOpen((prevOpen) => !prevOpen)}>Détails</Button>
      {open && <Content>Pas tout de suite :(</Content>}
    </Wrapper>
  )
}
