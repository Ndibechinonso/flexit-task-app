import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { ButtonComponent } from './shared/button/button.component';
import { CategoriesComponent } from './categories/categories.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import {HttpClientModule} from "@angular/common/http";
import { OtherRouteComponent } from './other-route/other-route.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ButtonComponent,
    CategoriesComponent,
    GalleryGridComponent,
    OtherRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
