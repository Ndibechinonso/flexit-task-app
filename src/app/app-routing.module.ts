import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridComponent} from "./gallery-grid/gallery-grid.component";
import {OtherRouteComponent} from "./other-route/other-route.component";

const routes: Routes = [{ path: '', component: GalleryGridComponent },
  { path: 'other', component: OtherRouteComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
