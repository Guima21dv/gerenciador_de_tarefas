import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConcluida: boolean;


  constructor(private element: ElementRef<HTMLTableDataCellElement>) { }

  ngOnInit(): void {
    if(this.tarefaConcluida){
      this.element.nativeElement.style.textDecoration = "line-through";
    }
  }
}
