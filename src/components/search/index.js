import { useState } from 'react'
import styled from 'styled-components'
const MAX_INPUT = 50
const Search = (props) => {
  const { fetch } = props
  const [input, setInput] = useState('')
  const handleOnChange = (e) => {
    if (e?.target?.value?.length > MAX_INPUT) {
      return
    }
    setInput(e?.target?.value)
  }

  const onKeyDown = (e) => {
    if (e?.key === 'Enter') {
      fetch(input)
    }
  }
  return (
    <Container>
      <input
        type='text'
        placeholder='Search'
        value={input}
        onChange={handleOnChange}
        onKeyDown={onKeyDown}
      />
      <span>
        {input.length}/{MAX_INPUT}
      </span>
    </Container>
  )
}

export default Search

const Container = styled.div`
  position: relative;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 8px 36px;
  display: flex;
  align-items: center;
  input {
    padding: 8px 0;
    width: 100%;
    border: none;
    outline: none;
  }
`
