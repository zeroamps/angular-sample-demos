import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3DemoComponent } from './d3-demo.component';

const routes: Routes = [{ path: 'd3', component: D3DemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3DemoRoutingModule {}
