import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EzfComponent } from './ezf/ezf.component';


const routes: Routes = [
  { path: 'ezf', component: EzfComponent },
  { path: 'stepper', component: EzfComponent },
  { path: 'alarm', component: EzfComponent },
  { path: 'port', component: EzfComponent },
  { path: 'home', component: EzfComponent },
  { path: '**', redirectTo: 'ezf' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
