import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostOfficeComponent } from './modules/post-office/post-office.component';

const routes: Routes = [
  {path:'post', component:PostOfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
