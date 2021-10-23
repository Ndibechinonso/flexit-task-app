import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridComponent} from "../gallery-grid/gallery-grid.component";
import {SideNavComponent} from "./side-nav.component";


const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('./approved/approved.module').then((m) => m.ApprovedModule),
      // },
      // {
      //   path: 'pending',
      //   loadChildren: () =>
      //     import('./pending/pending.module').then((m) => m.PendingModule),
      // },
      // { path: 'categories', component: CategoriesComponent },
      { path: '**', redirectTo: 'home' }, // Add 404 maybe
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionRoutingModule {}
