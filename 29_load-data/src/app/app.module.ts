import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './features/home/home.module';
import { DashboardOneModule } from './features/dashboard-one/dashboard-one.module';
import { DashboardTwoModule } from './features/dashboard-two/dashboard-two.module';
import { DashboardThreeModule } from './features/dashboard-three/dashboard-three.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, DashboardOneModule, DashboardTwoModule, DashboardThreeModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
