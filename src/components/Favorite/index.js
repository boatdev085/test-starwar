import styled from 'styled-components'
const Favorite = (props) => {
  const { favoriteList, setFavoriteList } = props
  const handleDeleteFavorite = (name) => {
    const newFavorite = favoriteList?.filter((fil) => fil !== name)
    setFavoriteList(newFavorite)
    localStorage.setItem('favorite', newFavorite)
  }
  return (
    <Container>
      <h3>Favorite</h3>
      <WrapList>
        {favoriteList?.map((favorite) => (
          <Items
            key={`favorite-${favorite}`}
            onClick={() => handleDeleteFavorite(favorite)}
          >
            <div>{favorite}</div> <span>X</span>
          </Items>
        ))}
      </WrapList>
    </Container>
  )
}

export default Favorite

const Container = styled.div`
  position: relative;
  text-align: left;
`

const WrapList = styled.div`
  position: relative;
`
const Items = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #000;
  span {
    cursor: pointer;
  }
`
