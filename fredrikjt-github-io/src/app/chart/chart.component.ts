import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: 'line',
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  constructor() { }

  ngOnInit() {
  }


}
