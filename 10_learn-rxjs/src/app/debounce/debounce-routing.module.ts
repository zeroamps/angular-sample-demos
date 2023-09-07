import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceComponent } from './debounce.component';

const routes: Routes = [{ path: 'debounce', component: DebounceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebounceRoutingModule {}
