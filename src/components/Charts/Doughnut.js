import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import doughnut2d from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion'
ReactFC.fcRoot(FusionCharts, doughnut2d, FusionTheme)

export const Doughnut = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        doughnutRadius: '55%',

        enableSlicing: true,

        enableRotation: true,
        enableMultiSlicing: true,
        theme: 'fusion',
      },
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}
