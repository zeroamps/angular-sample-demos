import { NgModule } from '@angular/core';
import { canActivate } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { redirectUnauthorizedToSignIn } from '../users/auth.service';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: 'home', component: HomeComponent, ...canActivate(redirectUnauthorizedToSignIn) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
