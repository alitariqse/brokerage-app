import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './components/header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MainLayoutComponent,
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    ModalModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreLayoutModule { }
