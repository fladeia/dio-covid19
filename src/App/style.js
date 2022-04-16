import { createGlobalStyle } from 'styled-components'

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  .mb-2 {
  margin-bottom: 32px;
  }
  
  .pt-2 {
    padding-top: 16px;
  }
`