import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOneComponent } from './dashboard-one.component';

const routes: Routes = [{ path: 'dashboard-one', component: DashboardOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardOneRoutingModule {}
