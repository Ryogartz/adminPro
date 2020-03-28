import { Component, OnInit,  Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css']
})
export class AccoutSettingsComponent implements OnInit {

  constructor(  public Serviceajuste:SettingsService) {}

  ngOnInit() {
    this.colocarCheck()
  }

  cambiarcolor(tema:string , link:any){
    this.aplicarCheck(link)
    console.log(link)
    this.Serviceajuste.aplicarTema(tema)
    
  }

  
  aplicarCheck(link:any){
    let selectores:any = document.getElementsByClassName('selector')

    for(let ref of selectores){
      ref.classList.remove('working')
    }

    link.classList.add('working')
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector')
      let tema = this.Serviceajuste.ajuste.tema
    for(let ref of selectores){
      if( ref.getAttribute('data-theme') === tema){
        ref.classList.add('working')
        break;
      }
    }

  }


}
