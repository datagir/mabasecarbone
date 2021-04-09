import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  display: none;
  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    align-items: center;

    > button {
      margin-bottom: 1.5rem;
    }
  }
`
export default function ButtonsMore() {
  const { setEmbedOpen, setShareOpen, setTypeShare } = useContext(UXContext)

  return (
    <Wrapper>
      <Button
        onClick={() => {
          setShareOpen(true)
          setTypeShare('result')
        }}
      >
        Je partage mon résultat
      </Button>
      <Button
        onClick={() => {
          setEmbedOpen(true)
        }}
      >
        J'intègre ce simulateur à mon site
      </Button>
    </Wrapper>
  )
}
