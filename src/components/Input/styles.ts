import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme['blue-900']};
  border: 1px solid ${({ theme }) => theme['blue-700']};
  color: ${({ theme }) => theme['blue-300']};

  &::placeholder {
    color: ${({ theme }) => theme['blue-600']};
  }
`
