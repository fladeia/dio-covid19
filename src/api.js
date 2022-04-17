const path = `https://coronavirus-19-api.herokuapp.com/countries`

export const getCovidData = (country, setData) => {
  fetch(`${path}/${country}`)
    .then(res => res.json()) //data: cases, deaths, recovered, todayCases, todayDeaths
    .then(data => setData(data))
}
