import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkImageComponent } from './components/link-image/link-image.component';

const routes: Routes = [
  { path: '', component: LinkImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
