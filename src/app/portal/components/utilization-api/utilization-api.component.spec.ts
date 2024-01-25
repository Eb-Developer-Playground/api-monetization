import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizationApiComponent } from './utilization-api.component';

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('UtilizationApiComponent', () => {
  let component: UtilizationApiComponent;
  let fixture: ComponentFixture<UtilizationApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilizationApiComponent],
    });
    fixture = TestBed.createComponent(UtilizationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
