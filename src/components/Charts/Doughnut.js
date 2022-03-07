import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import doughnut2d from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
ReactFC.fcRoot(FusionCharts, doughnut2d, FusionTheme)

export const Doughnut = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars per language',
        pieRadius: '45%',
        useDataPlotColorForLabels: true,
        enableMultiSlicing: false,
        showPercentValues: false,
        theme: 'fusion',
        decimals: '0',
      },
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}
