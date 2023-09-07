import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundamentalsComponent } from './fundamentals.component';

const routes: Routes = [{ path: 'fundamentals', component: FundamentalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundamentalsRoutingModule {}
