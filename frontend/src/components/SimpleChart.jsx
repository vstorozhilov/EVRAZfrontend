import React from 'react';
import Chart, {
  ArgumentAxis,
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
  Tooltip
} from 'devextreme-react/chart';
import TooltipTemplate from './TooltipTemplate.jsx';
import { zoomingData } from './data.js';

const visualRange = { startValue: 300, endValue: 500 };

export default function SimpleChart(props) {
    return (
      <Chart
        title={props.title}
        style={{
          backgroundColor : 'white',
          borderRadius : '5px'
        }}
        id="chart"
        palette="Harmony Light"
        dataSource={zoomingData}>
        <Series argumentField="arg" valueField="y1" />
        <Series argumentField="arg" valueField="y2" />
        <ArgumentAxis defaultVisualRange={visualRange} />
        <ScrollBar visible={true} />
        <ZoomAndPan argumentAxis="both" />
        <Legend visible={false} />
        <Tooltip
          enabled={true}
          contentRender={TooltipTemplate}/>
      </Chart>
    );
}
