import { Component, DoCheck } from '@angular/core';
// interface
import { TaskList } from '../../model/task-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements DoCheck {

  listaCompleta: Array<TaskList> = JSON.parse(localStorage.getItem("lista") || '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  setEmitLista(event: string) {
    this.listaCompleta.push({ task: event, checked: false });
  }

  deletarItemDaLista(event: number): void {
    this.listaCompleta.splice(event, 1);
  }

  deletaTudo(): void {
    const confirm = window.confirm("Você Realmente deseja Excluir tudo ?");
    if (confirm == true) {
      this.listaCompleta = [];
    }
  }

  validacaoDoInput(event: string, index: number) {
    if(!event.length){
      const confirm = window.confirm("O item está vazio, deseja deletar ? ")

      if(confirm){
        this.deletarItemDaLista(index);
      } 
    }
  }

  setLocalStorage(){
    if(this.listaCompleta) {
      this.listaCompleta.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("lista",JSON.stringify(this.listaCompleta))
    }
  }
}
