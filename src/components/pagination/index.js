import styled from 'styled-components'
const Pagination = (props) => {
  const { pagination, fetch, setCountPage, countPage } = props
  const handlePrevious = () => {
    setCountPage(countPage - 1)
    fetch('', pagination?.previous)
  }

  const handleNext = () => {
    setCountPage(countPage + 1)
    fetch('', pagination?.next)
  }
  return (
    <Container>
      {pagination?.previous ? (
        <ButtonPagination onClick={handlePrevious}>Previous</ButtonPagination>
      ) : (
        <div />
      )}
      {countPage}/{pagination?.maxPage || '0'}
      {pagination?.next ? (
        <ButtonPagination onClick={handleNext}>Next</ButtonPagination>
      ) : (
        <div />
      )}
    </Container>
  )
}

export default Pagination

const Container = styled.div`
  position: relative;
  padding: 8px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonPagination = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
`
