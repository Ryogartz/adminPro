import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: ['./graficas1.component.css']
})
export class Graficas1Component implements OnInit {
  
  graficas:any = {
    'graficas1':{
      'labels':['arroz','pollo','azucar'],
      'data': [10,20,40],
      'type': 'doughnut'
    },
    'graficas2':{
      'labels':['patata','avena','miel'],
      'data': [50,80,60],
      'type': 'doughnut'
    }

  }


  constructor() { }

  ngOnInit() {
  }

}
