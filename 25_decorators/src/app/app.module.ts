import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { IfNotDirective } from './if-not.directive';
import { HelloPipe } from './hello.pipe';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, IfNotDirective, HelloPipe, CounterComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
