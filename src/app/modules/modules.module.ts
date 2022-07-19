import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostOfficeComponent } from './post-office/post-office.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostOfficeModule } from './post-office/post-office.module';

@NgModule({
  declarations: [
    PostOfficeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    PostOfficeModule
  ],
  exports: [
    PostOfficeModule
  ],
  
})
export class ModulesModule { }
