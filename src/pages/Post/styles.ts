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
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;
  h1 {
    font-size: 1.5rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const PostInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
interface PostInformationContainerProps {
  isFirstLetterIsUpperCase?: boolean
}

export const PostInformationContent = styled.div<PostInformationContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['blue-200']};

  svg {
    color: ${({ theme }) => theme['blue-600']};
  }
  p::first-letter {
    text-transform: ${({ isFirstLetterIsUpperCase }) =>
      isFirstLetterIsUpperCase && 'uppercase'};
  }
`

export const PostContent = styled.main`
  padding: 2rem;
  margin-bottom: 2.5rem;

  h1,
  h2 {
    margin: 1rem 0;
  }
  p {
    margin-left: 1rem;
  }
  li {
    margin-left: 2rem;
  }
`
