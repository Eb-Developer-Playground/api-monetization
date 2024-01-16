import { Injectable } from '@angular/core';

declare var Redoc: any;

@Injectable({
  providedIn: 'root',
})
export class RedocService {
  documentation(specUrl: string, options: any, container: HTMLElement): void {
    Redoc.init(specUrl, options, container);
  }
}
