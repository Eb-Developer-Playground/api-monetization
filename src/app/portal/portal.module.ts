import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortalComponent } from './components/base/portal.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [DashboardComponent, PortalComponent],
  imports: [CommonModule, PortalRoutingModule, LayoutModule],
})
export class PortalModule {}
