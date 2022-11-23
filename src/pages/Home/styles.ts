import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: -5.5rem auto;
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const HomePrincipalCard = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${({ theme }) => theme['blue-800']};
  border-radius: 10px;
  display: flex;
  gap: 2rem;

  img {
    border-radius: 8px;
    width: 148px;
    height: 148px;
  }
`

export const InformationContainer = styled.div`
  margin-top: 0.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['blue-100']};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme['blue-300']};
    margin-bottom: 1.5rem;
  }
`

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${({ theme }) => theme['blue-500']};
  text-decoration: none;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  transition: 300ms;

  svg {
    margin-bottom: 0.2rem;
  }

  &:hover {
    text-transform: none;
    border-bottom: 1px solid ${({ theme }) => theme['blue-500']};
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['blue-200']};

  svg {
    color: ${({ theme }) => theme['blue-600']};
  }
`

export const GithubLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme['blue-200']};
    font-size: 1.25rem;
  }

  p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['blue-450']};
  }
`

export const SearchForm = styled.form`
  margin-top: 0.75rem;
`

export const HomeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`
