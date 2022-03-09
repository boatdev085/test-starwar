import { useState } from 'react'
import styled from 'styled-components'
import Popup from '../popup'
const ListItem = (props) => {
  const [isShowPopup, setShowPopup] = useState(false)
  const { item, favoriteList, setFavoriteList } = props
  const haveFavorite = favoriteList?.includes(item?.name)
  const handleAddFavorite = (name) => {
    const newFavorite = [...favoriteList, name]
    setFavoriteList(newFavorite)
    localStorage.setItem('favorite', newFavorite)
  }

  return (
    <Container>
      {isShowPopup && <Popup item={item} setShowPopup={setShowPopup} />}
      {(!haveFavorite && (
        <IconStar onClick={() => handleAddFavorite(item?.name)}>☆</IconStar>
      )) ||
        null}
      <BoxTitle>{item?.name || '-'}</BoxTitle>
      <ButtonDetail onClick={() => setShowPopup(true)}>detail</ButtonDetail>
    </Container>
  )
}

export default ListItem

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #000;
  justify-content: space-between;
  border-radius: 12px;
  margin-bottom: 12px;
`

const BoxTitle = styled.div`
  padding: 0 16px;
  flex: 1;
  text-align: left;
`

const ButtonDetail = styled.button`
  height: 100%;
  padding: 8px 16px;
  border-radius: 8px;
`

const IconStar = styled.i`
  padding-left: 16px;
  cursor: pointer;
`
