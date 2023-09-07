import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBComponent } from './page-b.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@NgModule({
  declarations: [PageBComponent, ChildAComponent, ChildBComponent],
  imports: [CommonModule],
  exports: [PageBComponent]
})
export class PageBModule {}
