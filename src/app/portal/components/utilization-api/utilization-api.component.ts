import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-utilization-api',
  templateUrl: './utilization-api.component.html',
  styleUrls: ['./utilization-api.component.scss'],
})
export class UtilizationApiComponent implements AfterViewInit {
  chart: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const dummyData = [
      { timestamp: '2022-05-10', requests: 467 },
      { timestamp: '2022-05-11', requests: 576 },
      { timestamp: '2022-05-12', requests: 572 },
      { timestamp: '2022-05-13', requests: 79 },
      { timestamp: '2022-05-14', requests: 92 },
      { timestamp: '2022-05-15', requests: 574 },
      { timestamp: '2022-05-16', requests: 573 },
      { timestamp: '2022-05-17', requests: 576 },
    ];

    const labels = dummyData.map((entry) => entry.timestamp);
    const data = dummyData.map((entry) => entry.requests);

    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'API Usage Over Time',
            data: data,
            backgroundColor: '#2F9803',
            tension: 0.1,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
