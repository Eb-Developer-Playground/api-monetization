import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-catalog-section',
  templateUrl: './catalog-section.component.html',
  styleUrls: ['./catalog-section.component.scss'],
})
export class CatalogSectionComponent implements OnInit {
  dummyData = [
    {
      title: 'Text generation',
      description: 'Learn how to generate text and call functions',
      backgroundColor: '#77100f',
      icon: 'textsms',
    },
    {
      title: 'Prompt engineering',
      description: 'Learn best pracrices for prompt engineering',
      backgroundColor: '#000000',
      icon: 'integration_instructions',
    },
    {
      title: 'Speech to text',
      description: 'Learn how to turn audio into text',
      backgroundColor: '#000000',
      icon: 'graphic_eq',
    },
    {
      title: 'Fine-tuning',
      description: 'Learn how to train a model for your use case',
      backgroundColor: '#881a19',
      icon: 'model_training',
    },
    {
      title: 'Image generation',
      description: 'Learn how to generate or edit images',
      backgroundColor: '#881a19',
      icon: 'image',
    },
    {
      title: 'Vision',
      description: 'Learn how to process image inputs with GPT-4',
      backgroundColor: '#000000',
      icon: 'visibility',
    },
  ];

  isSmallScreen: boolean = false;

  ngOnInit(): void {
    this.setScreenSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setScreenSize((event.target as Window).innerWidth);
  }

  private setScreenSize(windowWidth: number): void {
    if (windowWidth <= 600) {
      this.isSmallScreen = true;
    } else if (windowWidth > 600 && windowWidth <= 1024) {
      this.isSmallScreen = false;
    } else {
      this.isSmallScreen = false;
    }
  }
}
