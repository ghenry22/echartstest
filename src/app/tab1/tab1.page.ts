import { EChartOption } from 'echarts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any = {};

  chartOption1: EChartOption;
  chartOption2: EChartOption;
  updateOptions1: EChartOption;
  updateOptions2: EChartOption;

  xAxis1 = {};
  yAxis1 = {};
  dataZoom1 = {};
  series1 = [];

  xAxis2 = {};
  yAxis2 = {};
  dataZoom2 = {};
  series2 = [];

  constructor() {
    this.init();
  }

  async init() {
    //
    // Both charts use the same dataset.
    //
    await this.setupData();

    //
    // bar chart lower layer
    //
    this.setupBarGraph();

    //
    // Line chart top layer
    //
    this.setupLineGraph();
  }

  async setupData() {
    // hardcoded sample set, replace with API query.
    this.data = {
      data: [
        null,
        { value: 120, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' } },
        { value: 100, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        null,
        { value: 140, itemStyle: { color: '#dc4f53' }, label: { backgroundColor: '#dc4f53', borderColor: '#D2F7EB', color: 'white' }  },
        { value: 150, itemStyle: { color: '#dc4f53' }, label: { backgroundColor: '#dc4f53', borderColor: '#D2F7EB', color: 'white' }  },
        { value: 123, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 98, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 132, itemStyle: { color: '#dc4f53' }, label: { backgroundColor: '#dc4f53', borderColor: '#D2F7EB', color: 'white' }  },
        { value: 100, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#dc4f53', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 150, itemStyle: { color: '#dc4f53' }, label: { backgroundColor: '#dc4f53', borderColor: '#D2F7EB', color: 'white' }  },
        { value: 86, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 94, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 110, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 130, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 145, itemStyle: { color: '#dc4f53' }, label: { backgroundColor: '#dc4f53', borderColor: '#D2F7EB', color: 'white' }  },
        { value: 166, itemStyle: { color: '#dc4f53' }, label: { backgroundColor: '#dc4f53', borderColor: '#D2F7EB', color: 'white' }  },
        { value: 150, itemStyle: { color: '#dc4f53' }, label: { backgroundColor: '#dc4f53', borderColor: '#D2F7EB', color: 'white' }  },
        { value: 85, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        { value: 120, itemStyle: { color: '#4fb585' }, label: { backgroundColor: '#4fb585', borderColor: '#FAD4D4', color: 'white' }  },
        null ],
      labels: [ '', '23/10', '30/10', '7/11', '10/11', '12/11', '16/11', '21/11', '25/11', '28/11', '30/11', '1/12', '5/12', '16/12', '18/12', '1/1', '5/1', '10/1', '29/1', '2/2', '' ]
    };
    return;
  }

  updateOptions() {

    //
    // if we fetch new data from the API and want the chart to adjust to show the new data
    // we need to load the new options data into the updateOptionsX object for each graph.
    // THis is not likely to be an issue here but we can have support in place.
    //

  }

  setupBarGraph() {
    this.xAxis1 = {
      type: 'category',
      boundaryGap: false,
      data: this.data.labels,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    };

    this.yAxis1 = {
      show: false,
    };

    this.dataZoom1 = {
      type: 'inside',
      zoomLock: true
    };

    this.series1 = [
      {
        type: 'bar',
        data: [ {
          value: 80,
          label: {
            formatter: '80',
            fontWeight: 'bold',
            show: true,
            backgroundColor: 'white',
            color: 'grey',
            padding: [ 4, 8, 4, 8 ],
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'lightgrey',
            position: 'top',
            distance: -10
          }
        } ],
        barMaxWidth: 20,
        stack: 'first',
        itemStyle: { color: '#dc4f53' },
        z: 40
      },
      {
        type: 'bar',
        data: [ {
          value: 50,
          label: {
            formatter: '130',
            fontWeight: 'bold',
            show: true,
            backgroundColor: 'white',
            color: 'grey',
            padding: [ 4, 8, 4, 8 ],
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'lightgrey',
            position: 'top',
            distance: -10
          }
        } ],
        barMaxWidth: 20,
        stack: 'first',
        itemStyle: { color: '#4fb585' },
        z: 30
      },
      {
        type: 'bar',
        data: [ 70 ],
        barMaxWidth: 20,
        stack: 'first',
        itemStyle: { color: '#dc4f53' },
        z: 20
      }

    ];

    this.chartOption1 = {
      dataZoom: [this.dataZoom1],
      xAxis: this.xAxis1,
      yAxis: this.yAxis1,
      series: this.series1
    };
  }

  setupLineGraph() {

    this.xAxis2 = {
      type: 'category',
      boundaryGap: false,
      data: this.data.labels,
      axisLine: {
        show: false
      },
      axisLabel: {
        margin: 16,
        fontSize: 9,
        color: 'grey',
        fontWeight: 'bold'
      },
      axisTick: {
        show: false
      }
    };

    this.yAxis2 = {
      show: false,
      min: 0,
      max: 200
    };

    this.dataZoom2 = {
      startValue: '23/10',
      start: 66,
      end: 100,
      type: 'inside',
      zoomLock: true
    };

    this.series2 = [
      {
        type: 'line',
        data: this.data.data,
        symbolSize: 16,
        symbolKeepAspect: true,
        connectNulls: true,
        z: 100,
        label: {
          show: true,
          fontWeight: 'bold',
          padding: [ 4, 8, 4, 8 ],
          borderRadius: 4,
          borderWidth: 1,
          position: 'top',
          distance: 10
        },
        symbol: 'path://M120.79,164.61h0a15.51,15.51,0,0,1-15.57-15.46l-.11-27.83a15.52,15.52,0,0,1,15.47-15.57h0a15.51,15.51,0,0,1,15.57,15.46l.1,27.82A15.52,15.52,0,0,1,120.79,164.61Z',
        lineStyle: {
          color: '#6e7d78'
        }
      },
      {
        type: 'line',
        color: '#FAD4D4',
        markArea: {
          data: [
            [ { yAxis: 0 }, { yAxis: 80 } ]
          ]
        }
      },
      {
        type: 'line',
        color: 'lightgrey',
        markLine: {
          label: {
            show: false
          },
          symbolSize: [ 0, 0 ],
          silent: true,
          data: [ { yAxis: 80 }, { yAxis: 130 } ]
        },
      },
      {
        type: 'line',
        color: '#D2F7EB',
        markArea: {
          data: [
            [ { yAxis: 80 }, { yAxis: 130 } ]
          ]
        }
      },
      {
        type: 'line',
        color: '#FAD4D4',
        markArea: {
          data: [
            [ { yAxis: 130 }, { yAxis: 200 } ]
          ]
        }
      }
    ];

    this.chartOption2 = {
      dataZoom: [this.dataZoom2],
      xAxis: this.xAxis2,
      yAxis: this.yAxis2,
      series: this.series2
    };
  }

}
