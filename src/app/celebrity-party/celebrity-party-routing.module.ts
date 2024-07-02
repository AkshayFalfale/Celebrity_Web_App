import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityDashboardComponent } from './celebrity-dashboard/celebrity-dashboard.component';

const routes: Routes = [

  {
    path: '',
    component: CelebrityDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrityPartyRoutingModule { }
