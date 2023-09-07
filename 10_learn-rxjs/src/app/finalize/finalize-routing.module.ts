import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizeComponent } from './finalize.component';

const routes: Routes = [
  { path: '', redirectTo: 'finalize', pathMatch: 'full' },
  { path: 'finalize', component: FinalizeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalizeRoutingModule {}
