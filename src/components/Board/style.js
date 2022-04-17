import styled from "@emotion/styled";
import { Skeleton } from '../parts'

export const StyledSkeleton = styled(Skeleton)`
  width: 182px;
  height: 60px;
  
  @media (max-width: 1024px) {
    width: 142px;
    height: 60px;
  }
`
