import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void { }


  @Input('valor') progress = 0;

  @Output() valueOut: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  get getPorcentaje(){
    return this.progress+'%';
  }

  cambiarValor(valor: number) {
    if (this.progress >= 100 && valor >= 0 ) {
      this.valueOut.emit(100)
      return this.progress = 100;
    }
    
    if (this.progress <= 0 && valor < 0 ) {
      this.valueOut.emit(0)
      return this.progress = 0;
    }

    this.valueOut.emit(this.progress + valor);
    this.progress = this.progress + valor; 
  }
}
