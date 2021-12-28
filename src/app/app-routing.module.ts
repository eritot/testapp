import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {FormPageComponent} from './form-page/form-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'form', component: FormPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
