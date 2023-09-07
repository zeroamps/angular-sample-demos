import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppOneComponent } from './app-one/app-one.component';
import { AppTwoComponent } from './app-two/app-two.component';

@NgModule({
  declarations: [AppOneComponent, AppTwoComponent],
  imports: [BrowserModule],
  bootstrap: [AppOneComponent, AppTwoComponent]
})
export class AppModule {}
