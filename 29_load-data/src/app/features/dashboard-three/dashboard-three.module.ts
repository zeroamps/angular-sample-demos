import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardThreeComponent } from './dashboard-three.component';
import { DashboardThreeRoutingModule } from './dashboard-three-routing.module';

@NgModule({
  declarations: [DashboardThreeComponent],
  imports: [CommonModule, DashboardThreeRoutingModule]
})
export class DashboardThreeModule {}
