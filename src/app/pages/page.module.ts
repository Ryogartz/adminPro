import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PageControllerComponent } from './page-controller.component';
import { SharedModule } from '../shared/shared.module';
import { PAGE_ROUTES } from './page.routes';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PageControllerComponent
  ],
  imports:[
    SharedModule,
    PAGE_ROUTES
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PageControllerComponent
  ],
})
export class PageModule { }
