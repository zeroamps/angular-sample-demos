import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailComponent } from './email.component';
import { EmailRoutingModule } from './email-routing.module';

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule, ReactiveFormsModule, EmailRoutingModule]
})
export class EmailModule {}
