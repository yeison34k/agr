import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  labels = ["label1", "label2", "label3"]
  data = [2, 3, 4];
  constructor() { }

  ngOnInit(): void { }
}
