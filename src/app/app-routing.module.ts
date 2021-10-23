import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridComponent} from "./gallery-grid/gallery-grid.component";
import {OtherRouteComponent} from "./other-route/other-route.component";
// import {SectionRoutingModule} from "./side-nav/side-nav-routing.module";

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./side-nav/side-nav-routing.module').then((m) => m.SectionRoutingModule),
  // },
  { path: '', component: GalleryGridComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
