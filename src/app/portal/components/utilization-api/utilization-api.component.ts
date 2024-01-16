import { AfterViewInit, Component, inject } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataService } from '../../services/module-data/data.service';

@Component({
  selector: 'app-utilization-api',
  templateUrl: './utilization-api.component.html',
  styleUrls: ['./utilization-api.component.scss'],
})
export class UtilizationApiComponent implements AfterViewInit {
  chart: any;

  private chartService = inject(DataService);

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const dummyData = this.chartService.getUtilizationData();
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
