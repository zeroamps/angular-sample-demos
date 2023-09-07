import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinalizeModule } from './finalize/finalize.module';
import { PromiseModule } from './promise/promise.module';
import { UnsubscribeModule } from './unsubscribe/unsubscribe.module';
import { DebounceModule } from './debounce/debounce.module';
import { ForkjoinModule } from './forkjoin/forkjoin.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FinalizeModule,
    PromiseModule,
    UnsubscribeModule,
    DebounceModule,
    ForkjoinModule,
    ShareModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
