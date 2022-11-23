import styled from 'styled-components'
import backgroundImg from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4rem 0 8.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 4rem;
    width: 41rem;
  }
`
