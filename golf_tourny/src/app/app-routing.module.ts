import { NgModule } from '@angular/core';
import { GolfuiComponent } from './golfui/golfui.component';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: 'golfui', component: GolfuiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
