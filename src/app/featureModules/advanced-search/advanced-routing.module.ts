import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsearchComponent } from './adsearch/adsearch.component';

const routes: Routes = [
  { path: 'advanced', component: AdsearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }
