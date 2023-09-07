import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalErrorHandlerService } from './errors/global-error-handler.service';
import { ErrorDialogComponent } from './errors/error-dialog/error-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService }]
})
export class CoreModule {}
