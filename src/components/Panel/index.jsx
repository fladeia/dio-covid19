import * as C from './style'
import { Card, Typography, Button, Select, MenuItem } from '../parts'
import { COUNTRIES } from '../../data/countries'

const navigatorHasShare = navigator.share

export const Panel = ({ updateAt, onChange, data, country }) => {
  const { recovered } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <C.ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </C.ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://startling-nougat-471759.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card className='mb-2'>
      <C.CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19</Typography>
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className='pt-2'>
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        <div className='share-btn'>
          {navigatorHasShare ? renderShareButton : renderCopyButton}
        </div>
      </C.CardPanelContentStyled>
    </Card>
  )
}
