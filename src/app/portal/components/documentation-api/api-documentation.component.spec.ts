import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocumentationComponent } from './api-documentation.component';
import { MaterialModule } from 'src/material.module';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { DataService } from '../../services/module-data/data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApiDocumentationComponent', () => {
  let component: ApiDocumentationComponent;
  let fixture: ComponentFixture<ApiDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiDocumentationComponent],
      imports: [MaterialModule, RouterTestingModule],
      // providers: [
      //   {
      //     provide: ActivatedRoute,
      //     useValue: {
      //       snapshot: {
      //         paramMap: convertToParamMap({ id: '1' }),
      //       },
      //     },
      //   },
      //   { provide: DataService, useValue: {} },
      // ],
    });
    fixture = TestBed.createComponent(ApiDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
