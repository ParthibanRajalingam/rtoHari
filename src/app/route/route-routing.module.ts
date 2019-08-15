import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicSearchComponent } from '../basic-search/basic-search.component';
import { TabsComponent } from '../tabs/tabs.component';


const routes: Routes = [

  { path: 'basic', component: BasicSearchComponent },
  { path: '', component: TabsComponent },
  //{ path: '',   redirectTo: 'basic', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
