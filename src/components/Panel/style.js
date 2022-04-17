import styled from "@emotion/styled";
import { CardContent } from '../parts'

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  
  @media (max-width: 550px) {
    flex-direction: column;

    .share-btn {
      margin-top: 1rem;
    }
  }
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`