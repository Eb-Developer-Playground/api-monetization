import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { CatalogSectionComponent } from './layout/components/catalog-section/catalog-section.component';
import { FooterComponent } from './layout/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CatalogSectionComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
