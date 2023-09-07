import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstLibraryModule } from 'projects/first-library/src/public-api';
import { SecondLibraryModule } from 'projects/second-library/src/public-api';
import { ThirdLibraryModule } from 'projects/third-library/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FirstLibraryModule, SecondLibraryModule, ThirdLibraryModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
