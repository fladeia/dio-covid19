import * as C from './style'
import { Grid } from '../parts'
import { Card } from '../Card'
import Box from '@mui/material/Box';

export const Board = ({ data }) => {
  const { cases, deaths, recovered, todayCases, todayDeaths } = data

  const getValue = (value) => value ? value : <C.StyledSkeleton variant="text" />

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
        </Grid>
      </Grid>
    </Box>
  )
}
