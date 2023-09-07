import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForkjoinComponent } from './forkjoin.component';

const routes: Routes = [{ path: 'forkjoin', component: ForkjoinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForkjoinRoutingModule {}
