import styled from 'styled-components'
import ImageMock from '../../static/img_mock.png'
const Popup = (props) => {
  const { item, setShowPopup } = props

  const getEpisode = (url) => {
    const splitData = url?.split('/')
    return splitData ? splitData[splitData.length - 2] : url || '-'
  }
  return (
    <Container>
      <WrapperLayout>
        <h1>{item?.name || '-'}</h1>
        <Row>
          <BoxImg>
            <img src={ImageMock} alt='mock image' />
          </BoxImg>

          <BoxFilms>
            <h4>Films</h4>
            <ul>
              {item?.films?.map((film) => (
                <li key={`film-${film}`}>
                  <a href={film} target='_blank'>
                    Episode {getEpisode(film)}
                  </a>
                </li>
              ))}
            </ul>
          </BoxFilms>
        </Row>
        <Row>
          <div>Birthplace: {item?.birth_year || '-'}</div>
          <div>Mass: {item?.mass}</div>
        </Row>

        <Row>
          <div>Gender: {item?.gender || '-'}</div>
          <div>Height: {item?.height}</div>
        </Row>

        <ButtonClose onClick={() => setShowPopup(false)}>Close</ButtonClose>
      </WrapperLayout>
    </Container>
  )
}

export default Popup

const Container = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #0000005a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WrapperLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  margin: 0 20px;
  padding: 20px 40px;
  border-radius: 12px;
  background: #fff;
  @media (max-width: 500px) {
    width: 100%;
    max-width: 350px;
  }
`

const Row = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 16px;
  div {
    flex: 1;
    text-align: left;
  }
`

const BoxImg = styled.div`
  text-align: center !important;
`

const BoxFilms = styled.div`
  h4 {
    margin: 0;
  }
  flex: 1;
  text-align: left;
`

const ButtonClose = styled.button`
  position: relative;
  margin-top: 30px;
  padding: 8px 20px;
  border-radius: 4px;
`
