import { useEffect, useState } from 'react'
import * as C from './style.js'
import { Board } from '../Board'
import { Panel } from '../Panel'

export const Main = () => {
  const [country, setCountry] = useState('brazil')
  const [data, setData] = useState({})
  const path = `https://coronavirus-19-api.herokuapp.com/countries/${country}`
  const updateAt = new Date().toLocaleString()

  const getCovidData = () => {
    fetch(path)
      .then(res => res.json())
      .then(data => setData(data)) //data: cases, deaths, recovered, todayCases, todayDeaths
  }

  useEffect(() => {
    getCovidData()
  }, [country])


  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <C.Container>
      <C.Main>
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
        <Board data={data} />
      </C.Main>
    </C.Container>
  )
}
