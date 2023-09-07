import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpRoutingModule } from './signup-routing.module';
import { SignUpComponent } from './signup.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, SignUpRoutingModule]
})
export class SignUpModule {}
