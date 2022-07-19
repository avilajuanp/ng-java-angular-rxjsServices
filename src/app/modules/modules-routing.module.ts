import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostOfficeComponent } from './post-office/post-office.component';

const routes: Routes = [
  { path: 'post', component: PostOfficeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
