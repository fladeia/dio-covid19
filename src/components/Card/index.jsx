import * as C from './style'
import { Card as CardUI } from '../parts'

export const Card = ({ value, label, color }) => {
  return (
    <CardUI>
      <C.CardContentStyled color={color}>
        <C.ValueStyled>{value}</C.ValueStyled>
        <C.LabelStyled>{label}</C.LabelStyled>
      </C.CardContentStyled>
    </CardUI>
  )
}
