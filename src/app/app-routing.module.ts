import { NgModule } from "@angular/core"
import {Routes, RouterModule} from '@angular/router'
import { TarefasModule } from './tarefas/tarefas.module'
import { TarefaRoutes } from './tarefas/tarefas-routing.module'

export const routes:Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes
]

@NgModule({
  imports: [
     RouterModule.forRoot(routes),
     TarefasModule
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
