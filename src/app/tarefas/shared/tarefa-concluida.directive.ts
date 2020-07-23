import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util'

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConcluida: boolean;


  constructor(private element?: ElementRef<HTMLTableDataCellElement>) { }

  ngOnInit(): void {
    if(this.tarefaConcluida && !isNullOrUndefined(this.element)){
      this.element.nativeElement.style.textDecoration = "line-through";
    }
  }
}
