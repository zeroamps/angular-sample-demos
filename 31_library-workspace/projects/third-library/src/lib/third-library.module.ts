import { NgModule } from '@angular/core';
import { ThirdLibraryComponent } from './third-library.component';

@NgModule({
  declarations: [ThirdLibraryComponent],
  exports: [ThirdLibraryComponent]
})
export class ThirdLibraryModule {}
