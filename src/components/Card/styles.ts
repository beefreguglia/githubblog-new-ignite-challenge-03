import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  background: ${({ theme }) => theme['blue-750']};
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 300ms;

  &:hover {
    border: 2px solid ${({ theme }) => theme['blue-600']};
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h1 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['blue-100']};
    overflow-wrap: break-word;
    max-width: 75%;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['blue-450']};

    &::first-letter {
      text-transform: uppercase;
    }
  }
`
