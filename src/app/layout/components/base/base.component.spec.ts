import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from 'src/material.module';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BaseComponent,
        NavbarComponent,
        HomepageComponent,
        FooterComponent,
      ],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
