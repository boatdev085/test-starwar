import styled from 'styled-components'
import ListItem from './components/list'
import { LayoutWrapper } from './components/layout/index'
import Search from './components/search/index'
import Pagination from './components/pagination/index'
import Favorite from './components/Favorite'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [pagination, setPagination] = useState({})
  const [countPage, setCountPage] = useState(1)
  const [searchFail, setSearchFail] = useState('')
  const [favoriteList, setFavoriteList] = useState([])

  const fetch = async (search, url) => {
    setSearchFail('')
    if (!url) {
      setCountPage(1)
    }
    const res = await axios.get(
      url ||
        `https://swapi.dev/api/people/?${
          (search && `search=${search || ''}`) || ''
        }`
    )

    if (res?.data?.results?.length === 0 && search) {
      setSearchFail('data not found')
    }
    setItems(res?.data?.results || [])
    setPagination({
      count: res?.data?.count,
      next: res?.data?.next,
      previous: res?.data?.previous,
      maxPage: !res?.data?.next
        ? pagination?.maxPage
        : (res?.data?.count &&
            res?.data?.results &&
            Math.ceil(res?.data?.count / res?.data?.results.length)) ||
          1,
    })
  }

  const handleSetFavorite = () => {
    const getFavorite = localStorage.getItem('favorite')
    setFavoriteList(getFavorite?.split(',') || [])
  }
  useEffect(() => {
    fetch()
    handleSetFavorite()
  }, [])
  return (
    <div className='App'>
      <Container>
        <h1>STAR wars character</h1>
        <Search fetch={fetch} />
        <h3>Search result</h3>

        {searchFail && <h4>{searchFail}</h4>}
        <WrapItems>
          {items.map((item, idx) => (
            <ListItem
              key={`list-item-${idx + 1}`}
              item={item}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          ))}
        </WrapItems>
        {!searchFail && (
          <Pagination
            pagination={pagination}
            fetch={fetch}
            countPage={countPage}
            setCountPage={setCountPage}
          />
        )}

        <Favorite
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      </Container>
    </div>
  )
}

export default App

const Container = styled(LayoutWrapper)`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`

const WrapItems = styled.div`
  position: relative;
`
