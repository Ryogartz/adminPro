import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  //Element ref es para obtener el DOM del elemento html.
  @ViewChild('txtPorcentaje') txtPorcentaje:ElementRef

  @Input() porcentaje:number = 50
  @Input('nombre') leyenda = "leyenda"
    
  @Output() actualizarValor = new EventEmitter<number>();

  constructor() { 
    // console.log(this.porcentaje)
    // console.log(this.leyenda)
  }

  ngOnInit() {
    // console.log(this.leyenda)
  }

  cambiarngModel(valor:number){
    //vainilla js
    //  const inputHTML:any = document.getElementsByName('porcentaje')[0]
    //   console.log("valor del input",inputHTML.value)
    // console.log("elemento",this.txtPorcentaje.nativeElement.value)
    console.log("ngmodel",valor)
    
    if(valor >= 100){
      this.porcentaje = 100
    }else if(valor <= 0 ){
      this.porcentaje = 0
    }else{
      this.porcentaje = valor
    }
      // inputHTML.value = this.porcentaje
      this.txtPorcentaje.nativeElement.value = this.porcentaje

    this.actualizarValor.emit(this.porcentaje)
    this.txtPorcentaje.nativeElement.focus()
  }

  cambiarValor(valor:number){
    if(this.porcentaje >= 100 && valor > 0){
      this.porcentaje = 100
      return
    }
    if(this.porcentaje <= 0  && valor < 0){
      this.porcentaje = 0
      return
    }

    this.porcentaje +=valor
      
    this.actualizarValor.emit(this.porcentaje)

  }


}
