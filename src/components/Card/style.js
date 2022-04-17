import styled from "@emotion/styled";
import { CardContent, Typography } from "../parts";

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`
