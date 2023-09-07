import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './signin-routing.module';
import { SignInComponent } from './signin.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule]
})
export class SignInModule {}
