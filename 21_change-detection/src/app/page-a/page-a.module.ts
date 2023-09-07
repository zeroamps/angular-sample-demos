import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAComponent } from './page-a.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@NgModule({
  declarations: [PageAComponent, ChildAComponent, ChildBComponent],
  imports: [CommonModule],
  exports: [PageAComponent]
})
export class PageAModule {}
