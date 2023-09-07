import { NgModule } from '@angular/core';
import { FirstLibraryComponent } from './first-library.component';

@NgModule({
  declarations: [FirstLibraryComponent],
  exports: [FirstLibraryComponent]
})
export class FirstLibraryModule {}
