import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridComponent} from "../gallery-grid/gallery-grid.component";
import {SideNavComponent} from "./side-nav.component";
import {OtherRouteComponent} from "../other-route/other-route.component";


const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      { path: '', redirectTo: '' },
      { path: 'other', redirectTo: '' },
      { path: '**', redirectTo: '' }, // Add 404 maybe
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionRoutingModule {}
