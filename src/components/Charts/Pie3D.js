import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import pie3d from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
ReactFC.fcRoot(FusionCharts, pie3d, FusionTheme)

export const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most used languages',

        // enableSmartLabels: '1',
        startingAngle: '0',
        showPercentValues: '1',
        decimals: '0',
        useDataPlotColorForLabels: '1',
        theme: 'fusion',
        pieRadius: '55%',
        enableMultiSlicing: false,
      },
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}
