import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageHostComponent } from './page-host/page-host.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { COUNTERS, CounterService, COUNTER_SERVICE } from './counter.service';

@NgModule({
  declarations: [AppComponent, PageAComponent, PageBComponent, PageHostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    CounterService,
    { provide: CounterService, useClass: CounterService },
    { provide: 'COUNTER_SERVICE', useExisting: CounterService },
    { provide: COUNTER_SERVICE, useValue: new CounterService() },
    { provide: COUNTER_SERVICE, useFactory: () => new CounterService() },
    { provide: COUNTERS, useClass: CounterService, multi: true },
    { provide: COUNTERS, useClass: CounterService, multi: true },
    { provide: COUNTERS, useClass: CounterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
