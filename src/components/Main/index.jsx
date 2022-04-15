import { useEffect, useState } from 'react'
import FullWidthGrid from '../Grid.jsx'
import * as C from './style.js'

export const Main = () => {
  const [country, setCountry] = useState('Brazil')
  const [dataCountry, setDataCountry] = useState({})
  const path = `https://coronavirus-19-api.herokuapp.com/countries/${country}`

  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(data => setDataCountry(data))
  }, [country])
  //dataCountry: cases, deaths, recovered, todayCases, todayDeaths

  return (
    <C.Container>
      <C.Main>
        <FullWidthGrid></FullWidthGrid>
      </C.Main>
    </C.Container>
  )
}
