import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadChildren:() =>import('./celebrity-party/celebrity-party-routing.module')
        .then(m => m.CelebrityPartyRoutingModule)
      }
];
