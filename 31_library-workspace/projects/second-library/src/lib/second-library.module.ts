import { NgModule } from '@angular/core';
import { SecondLibraryComponent } from './second-library.component';

@NgModule({
  declarations: [SecondLibraryComponent],
  exports: [SecondLibraryComponent]
})
export class SecondLibraryModule {}
