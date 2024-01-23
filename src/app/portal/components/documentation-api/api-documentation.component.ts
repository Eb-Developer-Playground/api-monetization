import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/module-data/data.service';

declare const Redoc: any;
@Component({
  selector: 'app-api-documentation',
  templateUrl: './api-documentation.component.html',
  styleUrls: ['./api-documentation.component.scss'],
})
export class ApiDocumentationComponent implements AfterViewInit {
  @Input() id: number = 0;
  @Input() swaggerUrl!: string;

  constructor(
    private element: ElementRef,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngAfterViewInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      const selectedCard = this.dataService.cardData.find(
        (card) => card.id === id
      );

      if (selectedCard) {
        this.swaggerUrl = selectedCard.swaggerUrl;
        this.documentation();
      } else {
        console.error('Card with id ' + id + ' not found.');
      }
    } else {
      console.error('ID parameter is null.');
    }
  }

  documentation() {
    const container = this.element.nativeElement.querySelector('#redoc');
    if (this.swaggerUrl) {
      Redoc.init(
        this.swaggerUrl,
        {
          scrollYOffset: 60,
          hideDownloadButton: true,
        },
        container
      );
    } else {
      console.error('Swagger URL not provided.');
    }
  }
}
