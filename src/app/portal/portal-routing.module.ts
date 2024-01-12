import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/base/portal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApiDocumentationComponent } from './components/api-documentation/api-documentation.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
