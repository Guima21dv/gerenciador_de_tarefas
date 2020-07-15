import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service'
import { Tarefa } from '../shared/tarefa.model'

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = []

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos()
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos()
  }

  remover(event: Event, tarefa: Tarefa): void{
    event.preventDefault()
    if(confirm(`Deseja`)){

    }
  }

}
