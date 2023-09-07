import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsubscribeComponent } from './unsubscribe.component';

const routes: Routes = [{ path: 'unsubscribe', component: UnsubscribeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubscribeRoutingModule {}
