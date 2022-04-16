import { useEffect, useState } from 'react'
import * as C from './style.js'
import { Board } from '../Board'
import { Panel } from '../Panel'

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

        {/* <Panel />
        <Board /> */}

      </C.Main>
    </C.Container>
  )
}
