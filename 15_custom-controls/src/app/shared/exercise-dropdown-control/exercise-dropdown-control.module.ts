import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseDropdownControlComponent } from './exercise-dropdown-control.component';

@NgModule({
  declarations: [ExerciseDropdownControlComponent],
  imports: [CommonModule, NgbModule],
  exports: [ExerciseDropdownControlComponent]
})
export class ExerciseDropdownControlModule {}
