import React from 'react'
import styled from 'styled-components'

import Suggestions from 'components/misc/Suggestions'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
const Content = styled.div`
  max-width: 46rem;
  padding: 0 0.5rem 2rem;

  ${(props) => props.theme.mq.small} {
    padding-bottom: 1rem;
  }
`
export default function SuggestionsWrapper() {
  return (
    <Wrapper>
      <Content>
        <Suggestions>
          En panne d’inspiration ? Essayez une des suggestions ci dessous.
        </Suggestions>
      </Content>
    </Wrapper>
  )
}
