import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumberUpdatesComponent } from './number-updates/number-updates.component';

const routes: Routes = [
  {path: 'number-updates', component: NumberUpdatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
