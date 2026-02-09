import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1 } from './frontoffice/home1/home1';
import { Home2 } from './backoffice/home2/home2';

const routes: Routes = [
  {
    path: '',
    component: Home1,
    children: [{ path: '', component: Home1 }],
  },
  {
    path: 'admin',
    component: Home2,
    children: [{ path: '', component: Home2 }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
