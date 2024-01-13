import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cardData: any[];

  constructor(private router: Router, private dataService: DataService) {
    this.cardData = this.dataService.cardData;
  }

  apiDocumentation(id: number) {
    this.router.navigate(['/documentation', id]);
  }

  apiUtilization() {
    this.router.navigate(['/utilization']);
  }
}
