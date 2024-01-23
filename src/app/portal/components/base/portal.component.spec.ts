import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalComponent } from './portal.component';
import { NavbarComponent } from 'src/app/layout/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';

describe('PortalComponent', () => {
  let component: PortalComponent;
  let fixture: ComponentFixture<PortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalComponent, NavbarComponent],
      imports: [RouterModule, MaterialModule],
    });
    fixture = TestBed.createComponent(PortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
