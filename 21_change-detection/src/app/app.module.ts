import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageAModule } from './page-a/page-a.module';
import { PageBModule } from './page-b/page-b.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PageAModule, PageBModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
