import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 
 :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-500']};
  }

  body {
    background-color: ${({ theme }) => theme['blue-850']};
    color: ${({ theme }) => theme['blue-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }
`
