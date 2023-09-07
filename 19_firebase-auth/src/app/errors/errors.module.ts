import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsComponent } from './errors.component';
import { ErrorsService } from './errors.service';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [CommonModule],
  exports: [ErrorsComponent],
  providers: [{ provide: ErrorHandler, useClass: ErrorsService }]
})
export class ErrorsModule {}
