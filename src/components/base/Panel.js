import React from 'react'
import styled from 'styled-components'

import EmbedButton from './panel/EmbedButton'
import ShareButton from './panel/ShareButton'
import ContactButton from './panel/ContactButton'

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.open ? '30rem' : 0)};
  transition: all 400ms ease-out;

  ${(props) => props.theme.mq.medium} {
    display: ${(props) => (props.open ? 'block' : 'none')};
    width: auto;
    border-left: none;
    overflow: hidden;
    transition: none;
  }
`
const Content = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  right: 0;
  width: 30rem;
  height: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  border-left: 5px solid ${(props) => props.theme.colors.main};
  overflow-y: scroll;
  overflow-x: visible;
  transform: translateX(${(props) => (props.open ? 0 : '100%')});
  transition: all 400ms ease-out;

  ${(props) => props.theme.mq.medium} {
    position: relative;
    width: auto;
    height: auto;
    transform: none;
    padding: 1rem;
    border-left: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
    overflow: hidden;
    transition: none;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.3em;
    margin-bottom: 1rem;
  }
`
const ButtonClose = styled.div`
  position: absolute;
  top: 0.25em;
  right: 0.1em;
  font-size: 3em;
  font-weight: 700;
  transform: rotate(45deg);
  cursor: pointer;
  line-height: 0.5;
`
export default function Panel(props) {
  return (
    <Wrapper open={props.open}>
      {props.index === 0 ? (
        <EmbedButton
          open={props.open}
          onClick={props.toggleClose}
          index={props.index}
        />
      ) : props.index === 1 ? (
        <ShareButton
          open={props.open}
          onClick={props.toggleClose}
          index={props.index}
        />
      ) : (
        <ContactButton
          open={props.open}
          onClick={props.toggleClose}
          index={props.index}
        />
      )}
      <Content open={props.open}>
        <ButtonClose onClick={props.toggleClose}>+</ButtonClose>
        {props.children}
      </Content>
    </Wrapper>
  )
}
