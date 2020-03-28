import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PageControllerComponent } from './page-controller.component';
import { SharedModule } from '../shared/shared.module';
import { PAGE_ROUTES } from './page.routes';
import {FormsModule} from '@angular/forms'
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PageControllerComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccoutSettingsComponent,
  ],
  imports:[
    SharedModule,
    FormsModule,
    ChartsModule,
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
