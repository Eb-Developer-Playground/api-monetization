import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/base/portal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApiDocumentationComponent } from './components/documentation-api/api-documentation.component';
import { UtilizationApiComponent } from './components/utilization-api/utilization-api.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    // redirectTo: '/portal/dash',
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'documentation/:id',
        component: ApiDocumentationComponent,
      },
      {
        path: 'utilization',
        component: UtilizationApiComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
