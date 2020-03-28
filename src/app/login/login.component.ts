import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//como llamar con una funcion desde angular una funcion declarada de forma externa como jquery,plugin,etc.
declare function init_plugin()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
    init_plugin()
  }

  iniciar(){
    this.ruta.navigate(['/dashboard'])
  }

}
