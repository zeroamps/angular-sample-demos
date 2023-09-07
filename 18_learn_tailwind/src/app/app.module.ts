import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FundamentalsModule } from './fundamentals/fundamentals.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BootstrapModule, DashboardModule, FundamentalsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
