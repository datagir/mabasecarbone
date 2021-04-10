import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'

import Highlighter from 'react-highlight-words'

const Wrapper = styled.div`
  max-height: 60vh;
  overflow-y: scroll;
`
const Suggestion = styled.div`
  padding: 0.75rem 0.75rem 0.75rem 2rem;
  cursor: pointer;
  transition: background-color 200ms ease-out,
    opacity ${(props) => (props.isFetching ? 300 : 0)}ms ease-out;
  background-color: ${(props) =>
    props.current ? props.theme.colors.second : 'transparent'};
  opacity: ${(props) => (props.isFetching ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => props.theme.colors.second};
  }
  &:last-child {
    padding-bottom: 1.5rem;
  }

  mark {
    color: ${(props) => props.theme.colors.text};
    background-color: transparent;
    opacity: 0.5;
  }

  ${(props) => props.theme.mq.small} {
    padding: 0.75rem;
    font-size: 0.875rem;
  }
`
const Name = styled.span``
const Attribute = styled.span``
const Border = styled.span``
export default function Suggestions(props) {
  const onKeyDown = useCallback(
    (e) => {
      if (e.code === 'ArrowDown') {
        e.preventDefault()
        props.current < 9
          ? props.setCurrent((prevCurrent) => prevCurrent + 1)
          : props.setCurrent(0)
      }
      if (e.code === 'ArrowUp') {
        e.preventDefault()
        props.current > 0 && props.setCurrent((prevCurrent) => prevCurrent - 1)
      }
    },
    [props]
  )

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return (
    <Wrapper>
      {props.results.map(
        (result, index) =>
          index < 10 && (
            <Suggestion
              current={index === props.current}
              key={result['_id']}
              isFetching={props.isFetching}
              onClick={() => props.handleSuggestionClick(result)}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Name>
                <Highlighter
                  searchWords={props.search.split(' ')}
                  autoEscape={true}
                  textToHighlight={result['Nom_base_français']}
                />
              </Name>
              {result['Nom_attribut_français'] && (
                <Attribute> - {result['Nom_attribut_français']}</Attribute>
              )}
              {result['Nom_frontière_français'] && (
                <>
                  {' '}
                  <Border>({result['Nom_frontière_français']})</Border>
                </>
              )}
            </Suggestion>
          )
      )}
    </Wrapper>
  )
}
