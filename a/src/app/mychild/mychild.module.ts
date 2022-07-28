import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { PerentComponent } from './components/perent/perent.component';



@NgModule({
  declarations: [ChildComponent, PerentComponent],
  imports: [CommonModule],
  exports: [ChildComponent, PerentComponent],
  providers: [],
  bootstrap: [PerentComponent],
})
export class MychildModule {}