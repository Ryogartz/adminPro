import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajuste:Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema:'default'
  }

  constructor( @Inject(DOCUMENT) private _midocumento ) {
    this.cargarAjuste()
   }

   guardarAjuste(){
    //  console.log("guardado en el storage")
     localStorage.setItem('ajustes', JSON.stringify(this.ajuste))
   }

  cargarAjuste(){
    if(localStorage.getItem('ajustes')){
      // console.log("cargando del storage")
      this.ajuste = JSON.parse(localStorage.getItem('ajustes'))

      this.aplicarTema(this.ajuste.tema)

    }else{
      // console.log("valores por defecto")
      this.aplicarTema(this.ajuste.tema)

    }
  }

  aplicarTema(tema:string){
    let url = `assets/css/colors/${tema}.css`
    this._midocumento.getElementById('tema').setAttribute('href',url)

    this.ajuste.tema = tema
    this.ajuste.temaUrl = url

    this.guardarAjuste()

  }



}


interface Ajustes {
  temaUrl:string
  tema:string
}