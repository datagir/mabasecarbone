import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.75rem;
  font-weight: 300;
  background: transparent;
  border: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.text};
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }

  ${(props) => props.theme.mq.small} {
    padding: 0.75rem;
    font-size: 1.125rem;
  }
`
const Suggestion = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  opacity: ${(props) => (props.visible ? (props.isFetching ? 0.25 : 0.75) : 0)};
  pointer-events: none;
  transition: opacity ${(props) => (props.visible ? 200 : 0)}ms;

  ${(props) => props.theme.mq.small} {
    opacity: ${(props) => (props.visible ? (props.isFetching ? 0.2 : 0.6) : 0)};
  }
`
const Invisible = styled.div`
  opacity: 0;
  padding: 1rem 0.75rem 1rem 1rem;
  font-size: 1.75rem;
  line-height: 1.15;

  ${(props) => props.theme.mq.small} {
    padding: 0.75rem 0.5rem 0.75rem 0.75rem;
    font-size: 1.125rem;
  }
`
const Visible = styled.div`
  position: relative;
  margin-top: 0.2rem;
  padding-left: 1.25rem;

  ${(props) => props.theme.mq.small} {
    padding-left: 1rem;
    font-size: 0.875rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-150%);
    width: 0.75rem;
    height: 1px;
    background-color: ${(props) => props.theme.colors.text};

    ${(props) => props.theme.mq.small} {
      width: 0.5rem;
    }
  }
`
export default React.forwardRef(function TextInput(props, ref) {
  return (
    <Wrapper>
      <Input
        ref={ref}
        type='text'
        placeholder='Entrez votre recherche'
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        onFocus={() => props.setFocus(true)}
        onBlur={() => props.setFocus(false)}
      />
      <Suggestion
        visible={props.suggestion && props.suggestionVisible && props.search}
        isFetching={props.isFetching}
      >
        <Invisible>{props.search}</Invisible>
        {props.suggestion && (
          <Visible>
            {props.suggestion['Nom_base_français']}{' '}
            {props.suggestion['Nom_attribut_français']}{' '}
            {props.suggestion['Nom_frontière_français']}
          </Visible>
        )}
      </Suggestion>
    </Wrapper>
  )
})
