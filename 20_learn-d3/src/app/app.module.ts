import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { D3DemoModule } from './demos/d3-demo/d3-demo.module';
import { SvgDemoModule } from './demos/svg-demo/svg-demo.module';
import { PieLabelsDemoModule } from './demos/pie-labels-demo/pie-labels-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, D3DemoModule, SvgDemoModule, PieLabelsDemoModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
