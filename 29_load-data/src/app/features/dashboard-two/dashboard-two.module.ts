import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTwoComponent } from './dashboard-two.component';
import { DashboardTwoRoutingModule } from './dashboard-two-routing.module';

@NgModule({
  declarations: [DashboardTwoComponent],
  imports: [CommonModule, DashboardTwoRoutingModule]
})
export class DashboardTwoModule {}
