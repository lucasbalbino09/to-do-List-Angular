import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/models/Task';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  usuario : string = "Lucas Balbino"
  constructor(public dialog: MatDialog) { }
  //lista de tarefas
  tarefas: Task[] = [];
  tarefaList: Task[] = [];

  //metodo para abrir nosso dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent);
    dialogRef.afterClosed().subscribe(res =>{
      if(res){
        this.tarefas.push(res)
      }
    } )
  }
  //contador da lista de tarefas
  get totalDeTarefas(): number{
    return this.tarefas.length
  }
  //total de pendentes
  get totalDePendentes(): number {
    return this.tarefas.filter(tarefa => tarefa.situacao === "Pendente").length
  }
  get totalDeConcluido(): number {
    return this.tarefas.filter(tarefa => tarefa.situacao === "Concluido").length
  }
  get totalDeAFazer(): number {
    return this.tarefas.filter(tarefa => tarefa.situacao === "Fazendo").length
  }
  //metedo altera status da tarefa
  alterarSituacao(tarefa: Task, situacao: string): void {
    tarefa.situacao = situacao
  }

  cardSelecionado(tarefaEnviada : string) {
    this.tarefaList = [];
    if(tarefaEnviada == "") {
      this.tarefaList = this.tarefas;   
    } else {
      this.tarefaList =  this.tarefas.filter(tarefa => tarefa.situacao === tarefaEnviada);
    }
  }

}
