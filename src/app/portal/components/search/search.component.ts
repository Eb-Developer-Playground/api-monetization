import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/module-data/data.service';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  cardData!: any[];
  filteredCardData!: any[];

  formCtrl = new FormControl();
  formFilterCtrl = new FormControl();

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.cardData = this.dataService.cardData;
    this.formFilterCtrl.valueChanges.pipe(startWith('')).subscribe((value) => {
      console.log('Search input value:', this.formFilterCtrl.value);
      this.filteredCardData = this.filterCardData(value);
    });
  }

  private filterCardData(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.cardData.filter(
      (data) =>
        data.title.toLowerCase().includes(filterValue) ||
        data.content.toLowerCase().includes(filterValue)
    );
  }
}
