import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`
const Input = styled.input`
  width: 100%;
  padding: 1rem 3.75rem 1rem 1rem;
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
const Submit = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 0.75rem;
  background: ${(props) => props.theme.colors.background};
  border: none;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity ${(props) => (props.visible ? 600 : 0)}ms;

  svg {
    display: block;
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
      <Submit
        visible={props.suggestion && props.suggestionVisible && props.search}
        onFocus={() => props.setFocus(true)}
        onBlur={() => props.setFocus(false)}
      >
        <svg width='36' height='36' viewBox='0 0 36 36'>
          <path
            d='M35.7803 17.4697L24.5303 6.2197C24.2373 5.92671 23.7627 5.92671 23.4697 6.2197C23.1768 6.51269 23.1768 6.9873 23.4697 7.28022L33.4395 17.25H0.750023C0.335461 17.25 0 17.5854 0 18C0 18.4146 0.335461 18.75 0.750023 18.75H33.4395L23.4697 28.7197C23.1768 29.0127 23.1768 29.4873 23.4697 29.7802C23.6162 29.9267 23.8082 29.9999 24 29.9999C24.1919 29.9999 24.3838 29.9267 24.5303 29.7802L35.7803 18.5302C36.0733 18.2373 36.0733 17.7627 35.7803 17.4697Z'
            fill='#5E85FE'
          />
        </svg>
      </Submit>
    </Wrapper>
  )
})
