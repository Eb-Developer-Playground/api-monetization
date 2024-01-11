import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [NavbarComponent, HomepageComponent, FooterComponent, BaseComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarComponent, HomepageComponent, FooterComponent],
})
export class LayoutModule {}
