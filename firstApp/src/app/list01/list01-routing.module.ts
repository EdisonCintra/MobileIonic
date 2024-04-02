import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List01Page } from './list01.page';

const routes: Routes = [
  {
    path: '',
    component: List01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List01PageRoutingModule {}
