import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialogComponent {
  @Input() errors: any[] = [];
  constructor(public modal: NgbActiveModal) {}
}
