import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieLabelsDemoComponent } from './pie-labels-demo.component';

const routes: Routes = [{ path: 'labels', component: PieLabelsDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieLabelsDemoRoutingModule {}
