import { useEffect, useState } from 'react'
import * as C from './style.js'
import { getCovidData } from '../../api'
import { Board } from '../Board'
import { Panel } from '../Panel'

export const Main = () => {
  const [country, setCountry] = useState('brazil')
  const [data, setData] = useState({})
  const updateAt = new Date().toLocaleString()

  useEffect(() => {
    getCovidData(country, setData)
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
