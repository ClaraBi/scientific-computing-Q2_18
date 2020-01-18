import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Yalei Bi----Assignment: Question 2.18';
  tableResults = [];
  highcharts = Highcharts;
  chartOptions: any;
  xchart = [];
  ychart = [];
  ngOnInit(): void {
    this.generateTable();
    this.drawPlot();
  }
  generateTable() {
    for (let i = -5; i <= 50; i = i + 0.5 ) {
      const t = i;
      const v = this.calcV(t);
      this.xchart.push(t);
      this.ychart.push(v);
      this.tableResults.push({varT: t, varV: v});
    }
  }
  calcV(t) {
    let res;
    if (t >= 0 && t <= 10) {
      res = 11 * Math.pow(t, 2) - 5 * t;
    } else if (t >= 10 && t <= 20) {
      res = 1100 - 5 * t;
    } else if (t >= 20 && t <= 30) {
      res = 50 * t + 2 * Math.pow((t - 20), 2);
    } else if (t > 30) {
      res = 1520 * Math.exp(-0.2 * (t - 30));
    } else {
      res = 0;
    }
    return res;
  }
  drawPlot() {
    this.chartOptions = {
      chart: {
         type: 'spline'
      },
      title: {
         text: 'Using Highcharts to draw line-plot'
      },
      xAxis: {
         categories: this.xchart
      },
      yAxis: {
         title: {
            text: 'Value V'
         }
      },
      series: [
         {
            name: 'results-line',
            data: this.ychart
         }
      ]
   };
  }
}
