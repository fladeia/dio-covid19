import { useEffect, useState } from 'react'
import * as C from './style.js'
import { Board } from '../Board'
import { Panel } from '../Panel'
// import { COUNTRIES as data } from '../../data/countries'

export const Main = () => {
  const [country, setCountry] = useState('Brazil')
  const [data, setData] = useState({})
  const path = `https://coronavirus-19-api.herokuapp.com/countries/${country}`

  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(data => setData(data))
  }, [country])
  //data: cases, deaths, recovered, todayCases, todayDeaths

  return (
    <C.Container>
      <C.Main>

        {/* <Panel /> */}
        <Board data={data} />

      </C.Main>
    </C.Container>
  )
}
