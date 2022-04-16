import * as C from './style'
import { Card as CardUI } from '../parts'

export const Card = ({ value, label, color }) => {
  return (
    <C.Container>
      <CardUI>
        <C.CardContentStyled color={color}>
          <C.ValueStyled>{value}</C.ValueStyled>
          <C.LabelStyled>{label}</C.LabelStyled>
        </C.CardContentStyled>
      </CardUI>
    </C.Container>
  )
}
