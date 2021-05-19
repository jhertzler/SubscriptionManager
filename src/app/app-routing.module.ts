import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberViewComponent } from './subscriber-view/subscriber-view.component';

const routes: Routes = [
  { path: 'subscriber-view', component: SubscriberViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
