import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortalComponent } from './components/base/portal.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from 'src/material.module';
import { ApiDocumentationComponent } from './components/documentation-api/api-documentation.component';
import { SearchComponent } from './components/search/search.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilizationApiComponent } from './components/utilization-api/utilization-api.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PortalComponent,
    ApiDocumentationComponent,
    SearchComponent,
    UtilizationApiComponent,
    UserAccountComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    LayoutModule,
    MaterialModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PortalModule {}
