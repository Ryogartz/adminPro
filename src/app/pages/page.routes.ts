import { RouterModule  ,Routes } from '@angular/router';
import { PageControllerComponent } from './page-controller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


 const routes: Routes = [
     //Redirecionar ala pagina donde tiene los stylo
    {path:'' , 
    component: PageControllerComponent,
    children:[
        {path:'dashboard' , component: DashboardComponent},
        {path:'graficas1' , component: Graficas1Component},
        {path:'progress' , component: ProgressComponent},
        {path:'accout-settings' , component: AccoutSettingsComponent},
        {path:'' , redirectTo:'/dashboard' , pathMatch:'full'},
        ]
    },

]

export const PAGE_ROUTES = RouterModule.forChild(routes)
