import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.less']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() EmitItemListaCompleta = new EventEmitter();

  adiconarItensnaLista : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  enviarItensaLista() : void {
    
    this.adiconarItensnaLista = this.adiconarItensnaLista.trim()
    
    if(this.adiconarItensnaLista){
      this.EmitItemListaCompleta.emit(this.adiconarItensnaLista);
      this.adiconarItensnaLista = "";
    }
  }

}
