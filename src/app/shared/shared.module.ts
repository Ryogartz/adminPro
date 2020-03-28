import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadscrumsComponent } from './breadscrums/breadscrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadscrumsComponent,
    NopagefoundComponent
  ],
  imports:[
    //usar los router
   RouterModule,
   //sin esto no puede usar los ngif/for
   CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadscrumsComponent,
    NopagefoundComponent
  ],
})
export class SharedModule { }
