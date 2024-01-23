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
    // debounceTime(500)(this.createChart.bind(this))();
  }

  createChart() {
    const utilizationData = this.chartService.getUtilizationData();

    const labels = utilizationData.map((entry) => entry.timestamp);
    const requestDataset = utilizationData.map((entry) => entry.requests);
    const errorsDataset = utilizationData.map((entry) => entry.errors);
    const responseTimeDataset = utilizationData.map(
      (entry) => entry.responseTime
    );

    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'API Requests',
            data: requestDataset,
            backgroundColor: '#2F9803',
            tension: 0.1,
          },
          {
            label: 'Error Rates',
            data: errorsDataset,
            backgroundColor: '#FF0000',
            tension: 0.1,
          },
          {
            label: 'Response Times',
            data: responseTimeDataset,
            backgroundColor: '#0000FF',
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
