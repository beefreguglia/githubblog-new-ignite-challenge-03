import styled from 'styled-components'

export const StyledLink = styled.a`
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

  &:hover {
    text-transform: none;
    border-bottom: 1px solid ${({ theme }) => theme['blue-500']};
  }
`
