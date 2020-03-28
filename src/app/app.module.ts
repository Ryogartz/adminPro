import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTES } from './app.routes';
//modulo externo
import { PageModule } from './pages/page.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { FormsModule } from '@angular/forms';
//Servicio global
import { ServiceModule } from './services/service.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PageModule,
    APP_ROUTES,
    FormsModule,
    ServiceModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
