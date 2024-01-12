import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortalComponent } from './components/base/portal.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from 'src/material.module';
import { ApiDocumentationComponent } from './components/api-documentation/api-documentation.component';

@NgModule({
  declarations: [DashboardComponent, PortalComponent, ApiDocumentationComponent],
  imports: [CommonModule, PortalRoutingModule, LayoutModule, MaterialModule],
})
export class PortalModule {}
