import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgDemoComponent } from './svg-demo.component';

const routes: Routes = [{ path: 'svg', component: SvgDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvgDemoRoutingModule {}
