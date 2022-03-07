import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import bar3d from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
ReactFC.fcRoot(FusionCharts, bar3d, FusionTheme)

export const Bar = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most forked',
        yAxisName: 'Forks',
        xAxisName: 'Repos',
        showValues: true,
        theme: 'fusion',
        rotateLabels: false,
        palettecolors: '5d62b5,29c3be,f2726f,f3f36f,29f3ce',
      },
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}
