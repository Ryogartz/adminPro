import { Component, OnInit } from '@angular/core';

//como llamar con una funcion desde angular una funcion declarada de forma externa
declare function init_plugin()


@Component({
  selector: 'app-page-controller',
  templateUrl: './page-controller.component.html'
})
export class PageControllerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugin()
  }

}
