import styledComponents from "styled-components";
import covidBg from '../../assets/images/covid.jpg'

export const Container = styledComponents.div`
  display: flex;
  background: url(${covidBg}) no-repeat;
  background-size: cover;
`

export const Main = styledComponents.main`
  width: min(100% - 2rem, 1440px);
  height: 100vh;
  margin: 2rem auto;
`