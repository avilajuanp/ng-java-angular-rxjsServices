import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MartyComponent } from './marty/marty.component';
import { DocbrownComponent } from './docbrown/docbrown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MartyComponent, 
    DocbrownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [MartyComponent, DocbrownComponent]
})
export class PostOfficeModule { }
