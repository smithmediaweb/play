import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Play2Page } from './play2.page';

const routes: Routes = [
  {
    path: '',
    component: Play2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Play2PageRoutingModule {}
