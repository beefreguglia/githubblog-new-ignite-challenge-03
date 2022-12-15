import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: -5.5rem auto;
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PostPrincipalCard = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${({ theme }) => theme['blue-800']};
  border-radius: 10px;
  display: flex;
  gap: 2rem;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
