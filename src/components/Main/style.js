import styledComponents from "styled-components";
import covidBg from '../../assets/images/covid.jpg'

export const Container = styledComponents.div`
  display: flex;
  background-image: url(${covidBg});
`

export const Main = styledComponents.main`
  width: min(100% - 2rem, 1440px);
  height: 100vh;
  margin: 2rem auto;
  border: 2px solid red;
`