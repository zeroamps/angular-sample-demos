import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardOneComponent } from './dashboard-one.component';
import { DashboardOneRoutingModule } from './dashboard-one-routing.module';

@NgModule({
  declarations: [DashboardOneComponent],
  imports: [CommonModule, HttpClientModule, DashboardOneRoutingModule]
})
export class DashboardOneModule {}
