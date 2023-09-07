import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardThreeComponent } from './dashboard-three.component';

const routes: Routes = [{ path: 'dashboard-three', component: DashboardThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardThreeRoutingModule {}
